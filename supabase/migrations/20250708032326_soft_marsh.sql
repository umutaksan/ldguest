/*
  # Add property reviews table

  1. New Tables
    - `property_reviews`
      - `id` (uuid, primary key)
      - `property_id` (uuid, foreign key to properties)
      - `guest_id` (uuid, foreign key to guests)
      - `rating` (integer)
      - `comment` (text)
      - `platform` (text)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `property_reviews` table
    - Add policies for authenticated users to read and write their own reviews
    - Add policy for public users to read reviews
*/

CREATE TABLE IF NOT EXISTS property_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid REFERENCES properties(id) NOT NULL,
  guest_id uuid REFERENCES guests(id) NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text,
  platform text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE property_reviews ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Authenticated users can create reviews"
  ON property_reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can read all reviews"
  ON property_reviews
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can update their own reviews"
  ON property_reviews
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = guest_id)
  WITH CHECK (auth.uid() = guest_id);

CREATE POLICY "Users can delete their own reviews"
  ON property_reviews
  FOR DELETE
  TO authenticated
  USING (auth.uid() = guest_id);

-- Create index for faster queries
CREATE INDEX property_reviews_property_id_idx ON property_reviews(property_id);
CREATE INDEX property_reviews_guest_id_idx ON property_reviews(guest_id);