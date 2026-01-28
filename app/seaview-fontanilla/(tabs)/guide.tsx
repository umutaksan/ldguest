import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { InfoCard } from '@/components/common/InfoCard';
import { UtensilsCrossed, Landmark, ShoppingBag, Waves, Map, CarFront, Wine, Film, Compass, Mountain, Dumbbell, TreePalm as Palmtree, Music, Sparkles, Store, ShoppingCart, Leaf, Gift, Building2, Shirt, Smartphone, Navigation2, Pizza, CreditCard, Globe as Globe2, Users, Languages, MessageSquare } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SeaviewGuideScreen() {
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState('activities');

  const categories = [
    { id: 'activities', name: 'Activities', icon: <Compass size={20} color={theme.colors.primary} /> },
    { id: 'shopping', name: 'Shopping', icon: <ShoppingBag size={20} color={theme.colors.primary} /> },
    { id: 'apps', name: 'Useful Apps', icon: <Smartphone size={20} color={theme.colors.primary} /> },
  ];

  const apps = {
    transportation: [
      { id: 1, name: 'Uber', description: 'Popular ride-hailing app for easy transportation' },
      { id: 2, name: 'BlaBlaCar', description: 'Platform for intercity ride-sharing' },
      { id: 3, name: 'Renfe Cercanías', description: 'Spain\'s national railway app for train schedules' },
      { id: 4, name: 'Moovit', description: 'Public transport guide for bus and train schedules' },
      { id: 5, name: 'Google Maps', description: 'Popular app for urban and intercity navigation' }
    ],
    foodAndRestaurants: [
      { id: 1, name: 'Glovo', description: 'Delivery app for food, groceries, and daily needs' },
      { id: 2, name: 'Just Eat', description: 'Order food from local restaurants easily' },
      { id: 3, name: 'TheFork', description: 'Book reservations and get discounts at restaurants' }
    ],
    tourismAndSocial: [
      { id: 1, name: 'TripAdvisor', description: 'Discover places to visit and recommendations' },
      { id: 2, name: 'Civitatis', description: 'Book city tours, activities, and events' },
      { id: 3, name: 'Meetup', description: 'Join social events and meet new people' },
      { id: 4, name: 'Eventbrite', description: 'Find tickets for concerts and events' }
    ],
    financeAndPayments: [
      { id: 1, name: 'Bizum', description: 'Quick person-to-person money transfers' },
      { id: 2, name: 'Revolut', description: 'Manage currency exchange and expenses' },
      { id: 3, name: 'PayPal', description: 'Widely used for online payments' }
    ],
    languageAndTranslation: [
      { id: 1, name: 'Google Translate', description: 'Break language barriers in Spanish' },
      { id: 2, name: 'Duolingo', description: 'Learn Spanish effectively' },
      { id: 3, name: 'SayHi', description: 'Handy tool for voice translation' }
    ],
    communication: [
      { id: 1, name: 'WhatsApp', description: 'Popular communication app in Spain' },
      { id: 2, name: 'Instagram', description: 'Share photos and videos' },
      { id: 3, name: 'Facebook', description: 'Events and group discussions' }
    ],
    parking: [
      { id: 1, name: 'EasyPark', description: 'Find and pay for parking spots easily' },
      { id: 2, name: 'Telpark', description: 'Popular for parking payments and spot finding' },
      { id: 3, name: 'Parkopedia', description: 'Guide to parking locations and prices' }
    ]
  };

  const stores = {
    supermarkets: [
      { id: 1, name: 'Mercadona', description: "Spain's popular supermarket chain with quality products" },
      { id: 2, name: 'Carrefour', description: 'Large supermarket with wide product selection' },
      { id: 3, name: 'Lidl', description: 'Budget-friendly grocery store' },
      { id: 4, name: 'ALDI', description: 'Quality products at affordable prices' },
      { id: 5, name: 'Supersol', description: 'Local supermarket chain in Marbella' }
    ],
    organic: [
      { id: 1, name: 'Bio Market Marbella', description: 'Organic and natural products' },
      { id: 2, name: 'Gourmet Experience', description: 'Premium food and imported goods' },
      { id: 3, name: 'The Farmacy Marbella', description: 'Natural and sustainable products' }
    ],
    markets: [
      { id: 1, name: 'Marbella Municipal Market', description: 'Fresh local produce and goods' },
      { id: 2, name: 'Puerto Banús Street Market', description: 'Saturday market with various items' },
      { id: 3, name: 'San Pedro Market', description: 'Thursday market with fresh produce' }
    ],
    shopping_centers: [
      { id: 1, name: 'La Cañada Shopping Center', description: 'Largest mall in Marbella' },
      { id: 2, name: 'El Corte Inglés', description: 'Premium department store' },
      { id: 3, name: 'Centro Plaza', description: 'Boutiques and restaurants' }
    ],
    specialty: [
      { id: 1, name: 'El Arenal Organic Market', description: 'Ecological products' },
      { id: 2, name: 'Dehesa de Los Monteros', description: 'Local organic products' },
      { id: 3, name: 'Marbella Old Town Boutiques', description: 'Unique local shops' }
    ]
  };

  const activities = {
    beachAndWater: [
      { id: 1, name: 'Playa de la Fontanilla', description: 'Central beach with excellent facilities' },
      { id: 2, name: 'Playa Puerto Banús', description: 'Glamorous beach near the marina' },
      { id: 3, name: 'Playa Nueva Andalucía', description: 'Family-friendly beach with calm waters' },
      { id: 4, name: 'Jet Skiing', description: 'Exciting water sports adventure' },
      { id: 5, name: 'Paddleboarding', description: 'Perfect for all skill levels' },
      { id: 6, name: 'Yacht Charter', description: 'Luxury sailing experience' },
      { id: 7, name: 'Dolphin Watching', description: 'See dolphins in their natural habitat' },
      { id: 8, name: 'CostaWaterPark', description: 'Floating water park fun' },
      { id: 9, name: 'Snorkeling Tour', description: 'Explore underwater marine life' },
      { id: 10, name: 'Scuba Diving', description: 'Professional diving experiences' }
    ],
    adventureAndOutdoor: [
      { id: 1, name: 'La Concha Mountain', description: 'Iconic hiking trail with panoramic views' },
      { id: 2, name: 'Sierra de las Nieves', description: 'National park with diverse trails' },
      { id: 3, name: 'Horseback Tour', description: 'Scenic rides through nature' },
      { id: 4, name: 'Quad Biking', description: 'Off-road adventure tours' },
      { id: 5, name: 'Rock Climbing', description: 'Various difficulty levels available' },
      { id: 6, name: 'Mountain Biking', description: 'Trails for all skill levels' },
      { id: 7, name: 'Selwo Aventura', description: 'Wildlife and adventure park' },
      { id: 8, name: 'Paragliding', description: 'Breathtaking aerial views' },
      { id: 9, name: 'Kitesurfing in Tarifa', description: 'World-class kitesurfing spot' },
      { id: 10, name: 'Beach Volleyball', description: 'Active fun on the beach' }
    ],
    sportsAndFitness: [
      { id: 1, name: 'Aloha Golf Club', description: 'Premium golf experience' },
      { id: 2, name: 'Marbella Golf & Country Club', description: 'Championship course' },
      { id: 3, name: 'Padel Tennis', description: 'Popular local sport' },
      { id: 4, name: 'Beachside Yoga', description: 'Wellness by the sea' },
      { id: 5, name: 'Tennis Club', description: 'Professional facilities' },
      { id: 6, name: 'Fitness Classes', description: 'Various workout options' }
    ],
    culturalAndHistorical: [
      { id: 1, name: 'Marbella Old Town', description: 'Historic district exploration' },
      { id: 2, name: 'Avenida del Mar', description: 'Dalí sculptures display' },
      { id: 3, name: 'Museo Ralli', description: 'Contemporary art museum' },
      { id: 4, name: 'Murallas del Castillo', description: 'Ancient castle walls' },
      { id: 5, name: 'Plaza de los Naranjos', description: 'Historic town square' },
      { id: 6, name: 'Iglesia de la Encarnación', description: 'Beautiful old church' },
      { id: 7, name: 'Museo del Grabado', description: 'Spanish engraving museum' }
    ],
    nightlifeAndEntertainment: [
      { id: 1, name: 'Olivia Valère', description: 'Exclusive nightclub' },
      { id: 2, name: 'Pangea', description: 'Rooftop club experience' },
      { id: 3, name: 'Flamenco Shows', description: 'Traditional Spanish dance' },
      { id: 4, name: 'Aqwa Mist', description: 'Popular nightclub' },
      { id: 5, name: 'Casino Marbella', description: 'Gaming and entertainment' }
    ]
  };

  const renderActivities = () => (
    <>
      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Waves size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Beach & Water Activities
        </Text>
        {activities.beachAndWater.map((activity) => (
          <InfoCard
            key={activity.id}
            title={activity.name}
            description={activity.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Mountain size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Adventure & Outdoor
        </Text>
        {activities.adventureAndOutdoor.map((activity) => (
          <InfoCard
            key={activity.id}
            title={activity.name}
            description={activity.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Dumbbell size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Sports & Fitness
        </Text>
        {activities.sportsAndFitness.map((activity) => (
          <InfoCard
            key={activity.id}
            title={activity.name}
            description={activity.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Landmark size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Cultural & Historical
        </Text>
        {activities.culturalAndHistorical.map((activity) => (
          <InfoCard
            key={activity.id}
            title={activity.name}
            description={activity.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Music size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Nightlife & Entertainment
        </Text>
        {activities.nightlifeAndEntertainment.map((activity) => (
          <InfoCard
            key={activity.id}
            title={activity.name}
            description={activity.description}
            showChevron={false}
          />
        ))}
      </View>
    </>
  );

  const renderShopping = () => (
    <>
      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <ShoppingCart size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Supermarkets
        </Text>
        {stores.supermarkets.map((store) => (
          <InfoCard
            key={store.id}
            title={store.name}
            description={store.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Leaf size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Organic & Gourmet
        </Text>
        {stores.organic.map((store) => (
          <InfoCard
            key={store.id}
            title={store.name}
            description={store.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Store size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Local Markets
        </Text>
        {stores.markets.map((store) => (
          <InfoCard
            key={store.id}
            title={store.name}
            description={store.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Building2 size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Shopping Centers
        </Text>
        {stores.shopping_centers.map((store) => (
          <InfoCard
            key={store.id}
            title={store.name}
            description={store.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Gift size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Specialty Stores
        </Text>
        {stores.specialty.map((store) => (
          <InfoCard
            key={store.id}
            title={store.name}
            description={store.description}
            showChevron={false}
          />
        ))}
      </View>
    </>
  );

  const renderApps = () => (
    <>
      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Navigation2 size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Transportation Apps
        </Text>
        {apps.transportation.map((app) => (
          <InfoCard
            key={app.id}
            title={app.name}
            description={app.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Pizza size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Food & Restaurants
        </Text>
        {apps.foodAndRestaurants.map((app) => (
          <InfoCard
            key={app.id}
            title={app.name}
            description={app.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Globe2 size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Tourism & Social
        </Text>
        {apps.tourismAndSocial.map((app) => (
          <InfoCard
            key={app.id}
            title={app.name}
            description={app.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <CreditCard size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Finance & Payments
        </Text>
        {apps.financeAndPayments.map((app) => (
          <InfoCard
            key={app.id}
            title={app.name}
            description={app.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <Languages size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Language & Translation
        </Text>
        {apps.languageAndTranslation.map((app) => (
          <InfoCard
            key={app.id}
            title={app.name}
            description={app.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <MessageSquare size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Communication
        </Text>
        {apps.communication.map((app) => (
          <InfoCard
            key={app.id}
            title={app.name}
            description={app.description}
            showChevron={false}
          />
        ))}
      </View>

      <View style={styles.categorySection}>
        <Text style={styles.categoryTitle}>
          <CarFront size={20} color={theme.colors.primary} style={styles.categoryIcon} />
          Parking
        </Text>
        {apps.parking.map((app) => (
          <InfoCard
            key={app.id}
            title={app.name}
            description={app.description}
            showChevron={false}
          />
        ))}
      </View>
    </>
  );

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader 
        title="Local Guide" 
        showBackButton={false}
      />

      <View style={styles.categoryTabs}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryTabsContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryTab,
                selectedCategory === category.id && styles.categoryTabActive
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              {category.icon}
              <Text style={[
                styles.categoryTabText,
                selectedCategory === category.id && styles.categoryTabTextActive
              ]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {selectedCategory === 'activities' && renderActivities()}
        {selectedCategory === 'shopping' && renderShopping()}
        {selectedCategory === 'apps' && renderApps()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  categoryTabs: {
    backgroundColor: theme.colors.card,
    paddingVertical: theme.spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  categoryTabsContent: {
    paddingHorizontal: theme.spacing.m,
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.s,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    marginRight: theme.spacing.s,
    backgroundColor: theme.colors.surface,
  },
  categoryTabActive: {
    backgroundColor: theme.colors.primaryLight,
  },
  categoryTabText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.s,
  },
  categoryTabTextActive: {
    color: theme.colors.primary,
  },
  content: {
    padding: theme.spacing.m,
  },
  categorySection: {
    marginBottom: theme.spacing.xl,
  },
  categoryTitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
    marginBottom: theme.spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    marginRight: theme.spacing.s,
  },
});