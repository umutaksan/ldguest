import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { Search, MapPin, Star, Filter, ArrowLeft } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    'All', 'Beach', 'Mountain', 'City', 'Countryside', 'Historic'
  ];
  
  const places = [
    {
      id: 1,
      name: 'Amalfi Coast',
      location: 'Italy',
      image: 'https://images.pexels.com/photos/2421548/pexels-photo-2421548.jpeg',
      rating: 4.9,
      category: 'Beach'
    },
    {
      id: 2,
      name: 'Swiss Alps',
      location: 'Switzerland',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
      rating: 4.8,
      category: 'Mountain'
    },
    {
      id: 3,
      name: 'Prague',
      location: 'Czech Republic',
      image: 'https://images.pexels.com/photos/161077/prague-vencel-square-czech-republic-church-161077.jpeg',
      rating: 4.7,
      category: 'City'
    },
    {
      id: 4,
      name: 'Tuscany',
      location: 'Italy',
      image: 'https://images.pexels.com/photos/1797158/pexels-photo-1797158.jpeg',
      rating: 4.9,
      category: 'Countryside'
    },
    {
      id: 5,
      name: 'Petra',
      location: 'Jordan',
      image: 'https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg',
      rating: 4.8,
      category: 'Historic'
    },
    {
      id: 6,
      name: 'Santorini',
      location: 'Greece',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      rating: 4.9,
      category: 'Beach'
    },
    {
      id: 7,
      name: 'Kyoto',
      location: 'Japan',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
      rating: 4.7,
      category: 'Historic'
    },
    {
      id: 8,
      name: 'Machu Picchu',
      location: 'Peru',
      image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
      rating: 4.9,
      category: 'Historic'
    }
  ];
  
  const filteredPlaces = activeCategory === 'All' 
    ? places 
    : places.filter(place => place.category === activeCategory);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Explore</Text>
          <Text style={styles.subtitle}>Discover amazing places</Text>
        </View>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={theme.colors.textTertiary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search destinations"
            placeholderTextColor={theme.colors.textTertiary}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              activeCategory === category && styles.activeCategoryButton
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                activeCategory === category && styles.activeCategoryText
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.placesContainer}
      >
        {filteredPlaces.map((place, index) => (
          <Animated.View
            key={place.id}
            entering={FadeIn.delay(index * 100)}
            style={styles.placeCard}
          >
            <Image
              source={{ uri: place.image }}
              style={styles.placeImage}
            />
            <View style={styles.placeContent}>
              <View>
                <Text style={styles.placeName}>{place.name}</Text>
                <View style={styles.placeLocation}>
                  <MapPin size={14} color={theme.colors.textSecondary} />
                  <Text style={styles.placeLocationText}>{place.location}</Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <Star size={16} color={theme.colors.primary} />
                <Text style={styles.ratingText}>{place.rating}</Text>
              </View>
            </View>
          </Animated.View>
        ))}
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');
const cardWidth = width > 500 ? (width - 60) / 2 : width - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.m,
    paddingTop: theme.spacing.m,
  },
  backButton: {
    marginRight: theme.spacing.m,
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
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.m,
    marginTop: theme.spacing.m,
    marginBottom: theme.spacing.m,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    paddingHorizontal: theme.spacing.m,
    marginRight: theme.spacing.s,
    ...theme.shadows.small,
  },
  searchInput: {
    flex: 1,
    height: 50,
    color: theme.colors.text,
    marginLeft: theme.spacing.s,
    ...theme.typography.body,
  },
  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.shadows.small,
  },
  categoriesContainer: {
    paddingHorizontal: theme.spacing.m,
    paddingBottom: theme.spacing.m,
  },
  categoryButton: {
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    borderRadius: theme.borderRadius.m,
    marginRight: theme.spacing.s,
    backgroundColor: theme.colors.card,
    ...theme.shadows.small,
  },
  activeCategoryButton: {
    backgroundColor: theme.colors.primary,
  },
  categoryText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.text,
  },
  activeCategoryText: {
    color: theme.colors.white,
  },
  placesContainer: {
    padding: theme.spacing.m,
    flexDirection: width > 500 ? 'row' : 'column',
    flexWrap: 'wrap',
    justifyContent: width > 500 ? 'space-between' : 'flex-start',
  },
  placeCard: {
    width: width > 500 ? (width - 60) / 2 : '100%',
    borderRadius: theme.borderRadius.m,
    backgroundColor: theme.colors.card,
    overflow: 'hidden',
    marginBottom: theme.spacing.m,
    ...theme.shadows.medium,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeContent: {
    padding: theme.spacing.m,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeName: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.xs,
  },
  placeLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  placeLocationText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xs,
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
});