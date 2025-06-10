import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { Compass, Utensils, Palmtree, Camera, Ticket, MapPin, Star, ChevronRight } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function GuideScreen() {
  const insets = useSafeAreaInsets();
  const [activeCategory, setActiveCategory] = useState('Activities');
  
  const categories = [
    { id: 'Activities', icon: <Compass size={24} color={theme.colors.primary} /> },
    { id: 'Food', icon: <Utensils size={24} color={theme.colors.primary} /> },
    { id: 'Nature', icon: <Palmtree size={24} color={theme.colors.primary} /> },
    { id: 'Sightseeing', icon: <Camera size={24} color={theme.colors.primary} /> },
    { id: 'Events', icon: <Ticket size={24} color={theme.colors.primary} /> },
  ];
  
  const guides = {
    Activities: [
      {
        id: 1,
        title: 'Best Hiking Trails',
        image: 'https://images.pexels.com/photos/2755612/pexels-photo-2755612.jpeg',
        location: 'Swiss Alps',
        rating: 4.9,
        description: 'Discover the most breathtaking hiking trails in the Swiss Alps with panoramic views.'
      },
      {
        id: 2,
        title: 'Scuba Diving Adventures',
        image: 'https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg',
        location: 'Great Barrier Reef',
        rating: 4.8,
        description: 'Explore the underwater world of the Great Barrier Reef with expert diving guides.'
      },
      {
        id: 3,
        title: 'Hot Air Balloon Rides',
        image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg',
        location: 'Cappadocia',
        rating: 4.9,
        description: 'Experience the magical landscapes of Cappadocia from above in a hot air balloon.'
      }
    ],
    Food: [
      {
        id: 1,
        title: 'Street Food Tour',
        image: 'https://images.pexels.com/photos/2347383/pexels-photo-2347383.jpeg',
        location: 'Bangkok',
        rating: 4.7,
        description: 'Sample the best street food Bangkok has to offer with local food experts.'
      },
      {
        id: 2,
        title: 'Wine Tasting Experience',
        image: 'https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg',
        location: 'Tuscany',
        rating: 4.8,
        description: 'Visit family-owned vineyards and taste premium wines in the heart of Tuscany.'
      },
      {
        id: 3,
        title: 'Cooking Class',
        image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg',
        location: 'Barcelona',
        rating: 4.9,
        description: 'Learn to cook authentic Spanish paella and tapas with professional chefs.'
      }
    ],
    Nature: [
      {
        id: 1,
        title: 'Wildlife Safari',
        image: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg',
        location: 'Serengeti',
        rating: 4.9,
        description: 'Witness the incredible wildlife of the Serengeti on a guided safari adventure.'
      },
      {
        id: 2,
        title: 'Rainforest Expedition',
        image: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg',
        location: 'Amazon',
        rating: 4.8,
        description: 'Explore the biodiversity of the Amazon rainforest with expert naturalists.'
      },
      {
        id: 3,
        title: 'Northern Lights Tour',
        image: 'https://images.pexels.com/photos/1933316/pexels-photo-1933316.jpeg',
        location: 'Iceland',
        rating: 4.9,
        description: 'Chase the aurora borealis across the Icelandic night sky with professional guides.'
      }
    ],
    Sightseeing: [
      {
        id: 1,
        title: 'Ancient Ruins Tour',
        image: 'https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg',
        location: 'Rome',
        rating: 4.8,
        description: 'Discover the fascinating history of ancient Rome with expert archaeologists.'
      },
      {
        id: 2,
        title: 'City Architecture Walk',
        image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg',
        location: 'Paris',
        rating: 4.7,
        description: 'Explore the stunning architectural landmarks of Paris with design experts.'
      },
      {
        id: 3,
        title: 'Temple Exploration',
        image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
        location: 'Kyoto',
        rating: 4.9,
        description: 'Visit ancient temples and learn about Japanese culture and traditions.'
      }
    ],
    Events: [
      {
        id: 1,
        title: 'Music Festival Guide',
        image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
        location: 'Barcelona',
        rating: 4.8,
        description: 'Navigate the best music festivals with insider tips and VIP access.'
      },
      {
        id: 2,
        title: 'Cultural Celebrations',
        image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg',
        location: 'Rio de Janeiro',
        rating: 4.9,
        description: 'Experience the vibrant Carnival celebrations with local guides and dancers.'
      },
      {
        id: 3,
        title: 'Food & Wine Festival',
        image: 'https://images.pexels.com/photos/5638331/pexels-photo-5638331.jpeg',
        location: 'Melbourne',
        rating: 4.7,
        description: 'Sample gourmet cuisine and premium wines at Melbourne\'s top food festival.'
      }
    ]
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Travel Guides</Text>
        <Text style={styles.subtitle}>Expert recommendations for your journey</Text>
      </View>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              activeCategory === category.id && styles.activeCategoryButton
            ]}
            onPress={() => setActiveCategory(category.id)}
          >
            <View style={styles.categoryIcon}>
              {category.icon}
            </View>
            <Text
              style={[
                styles.categoryText,
                activeCategory === category.id && styles.activeCategoryText
              ]}
            >
              {category.id}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.guidesContainer}
      >
        {guides[activeCategory].map((guide, index) => (
          <Animated.View
            key={guide.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.guideCard}
          >
            <Image
              source={{ uri: guide.image }}
              style={styles.guideImage}
            />
            <View style={styles.guideContent}>
              <View style={styles.guideHeader}>
                <Text style={styles.guideTitle}>{guide.title}</Text>
                <View style={styles.ratingContainer}>
                  <Star size={14} color={theme.colors.primary} />
                  <Text style={styles.ratingText}>{guide.rating}</Text>
                </View>
              </View>
              
              <View style={styles.locationContainer}>
                <MapPin size={14} color={theme.colors.textSecondary} />
                <Text style={styles.locationText}>{guide.location}</Text>
              </View>
              
              <Text style={styles.guideDescription} numberOfLines={2}>
                {guide.description}
              </Text>
              
              <TouchableOpacity style={styles.readMoreButton}>
                <Text style={styles.readMoreText}>Read More</Text>
                <ChevronRight size={16} color={theme.colors.primary} />
              </TouchableOpacity>
            </View>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: theme.spacing.m,
    paddingTop: theme.spacing.m,
  },
  title: {
    ...theme.typography.heading,
    color: theme.colors.text,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  categoriesContainer: {
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.m,
  },
  categoryButton: {
    alignItems: 'center',
    marginRight: theme.spacing.l,
  },
  activeCategoryButton: {},
  categoryIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
    ...theme.shadows.small,
  },
  categoryText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
  },
  activeCategoryText: {
    color: theme.colors.primary,
    ...theme.typography.bodyMedium,
  },
  guidesContainer: {
    padding: theme.spacing.m,
  },
  guideCard: {
    borderRadius: theme.borderRadius.m,
    backgroundColor: theme.colors.card,
    overflow: 'hidden',
    marginBottom: theme.spacing.m,
    ...theme.shadows.medium,
  },
  guideImage: {
    width: '100%',
    height: 200,
  },
  guideContent: {
    padding: theme.spacing.m,
  },
  guideHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
  },
  guideTitle: {
    ...theme.typography.bodyMedium,
    flex: 1,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.s,
    paddingVertical: 4,
    borderRadius: theme.borderRadius.s,
  },
  ratingText: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
  },
  locationText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xs,
  },
  guideDescription: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.m,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  readMoreText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
    marginRight: theme.spacing.xs,
  },
});