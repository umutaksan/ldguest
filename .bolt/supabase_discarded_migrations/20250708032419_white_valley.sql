/*
  # Add property reviews table
  
  1. New Tables
    - `property_reviews`
      - `id` (uuid, primary key)
      - `property_id` (uuid, foreign key to properties)
      - `guest_id` (uuid, foreign key to guests)
      - `rating` (integer, 1-5 stars)
      - `comment` (text)
      - `platform` (text, e.g., Airbnb, Booking.com)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `property_reviews` table
    - Add policies for read, create, update, and delete operations
    
  3. Indexes
    - Add indexes on foreign key columns for better performance
*/

-- Create the property_reviews table
CREATE TABLE IF NOT EXISTS property_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid REFERENCES properties(id) ON DELETE CASCADE,
  guest_id uuid REFERENCES guests(id) ON DELETE CASCADE,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text,
  platform text,
  created_at timestamptz DEFAULT now(),
  
  -- Additional constraints
  CONSTRAINT valid_review CHECK (
    property_id IS NOT NULL AND
    guest_id IS NOT NULL AND
    rating IS NOT NULL
  )
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS property_reviews_property_id_idx ON property_reviews(property_id);
CREATE INDEX IF NOT EXISTS property_reviews_guest_id_idx ON property_reviews(guest_id);
CREATE INDEX IF NOT EXISTS property_reviews_created_at_idx ON property_reviews(created_at);

-- Enable Row Level Security
ALTER TABLE property_reviews ENABLE ROW LEVEL SECURITY;

-- Create RLS policies

-- Everyone can read reviews
CREATE POLICY "Anyone can read reviews"
  ON property_reviews
  FOR SELECT
  TO public
  USING (true);

-- Authenticated users can create reviews
CREATE POLICY "Authenticated users can create reviews"
  ON property_reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Users can only update their own reviews
CREATE POLICY "Users can update their own reviews"
  ON property_reviews
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = guest_id)
  WITH CHECK (auth.uid() = guest_id);

-- Users can only delete their own reviews
CREATE POLICY "Users can delete their own reviews"
  ON property_reviews
  FOR DELETE
  TO authenticated
  USING (auth.uid() = guest_id);