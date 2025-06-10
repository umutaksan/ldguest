import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { MapPin, Star, Clock, Users } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  const featuredDestinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      rating: 4.9,
      duration: '5 days',
      people: '2 adults'
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/1802255/pexels-photo-1802255.jpeg',
      rating: 4.8,
      duration: '7 days',
      people: '2 adults'
    },
    {
      id: 3,
      name: 'Kyoto, Japan',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
      rating: 4.7,
      duration: '6 days',
      people: '2 adults'
    }
  ];

  const popularExperiences = [
    {
      id: 1,
      name: 'Cooking Class in Barcelona',
      image: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg',
      price: '$65',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Wine Tasting in Tuscany',
      image: 'https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg',
      price: '$89',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Surfing Lessons in Hawaii',
      image: 'https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg',
      price: '$75',
      rating: 4.7
    }
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hello, Traveler</Text>
            <Text style={styles.subtitle}>Where to next?</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg' }} 
              style={styles.profileImage} 
            />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Featured Destinations</Text>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredContainer}
        >
          {featuredDestinations.map((destination, index) => (
            <Animated.View 
              key={destination.id}
              entering={FadeIn.delay(index * 100)}
              style={styles.featuredCard}
            >
              <Image 
                source={{ uri: destination.image }} 
                style={styles.featuredImage} 
              />
              <View style={styles.featuredContent}>
                <Text style={styles.featuredName}>{destination.name}</Text>
                <View style={styles.featuredDetails}>
                  <View style={styles.featuredDetail}>
                    <Star size={16} color={theme.colors.primary} />
                    <Text style={styles.featuredDetailText}>{destination.rating}</Text>
                  </View>
                  <View style={styles.featuredDetail}>
                    <Clock size={16} color={theme.colors.primary} />
                    <Text style={styles.featuredDetailText}>{destination.duration}</Text>
                  </View>
                  <View style={styles.featuredDetail}>
                    <Users size={16} color={theme.colors.primary} />
                    <Text style={styles.featuredDetailText}>{destination.people}</Text>
                  </View>
                </View>
              </View>
            </Animated.View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Popular Experiences</Text>
        
        <View style={styles.experiencesContainer}>
          {popularExperiences.map((experience, index) => (
            <Animated.View 
              key={experience.id}
              entering={FadeIn.delay(index * 100 + 300)}
              style={styles.experienceCard}
            >
              <Image 
                source={{ uri: experience.image }} 
                style={styles.experienceImage} 
              />
              <View style={styles.experienceContent}>
                <Text style={styles.experienceName}>{experience.name}</Text>
                <View style={styles.experienceDetails}>
                  <Text style={styles.experiencePrice}>{experience.price}</Text>
                  <View style={styles.experienceRating}>
                    <Star size={14} color={theme.colors.primary} />
                    <Text style={styles.experienceRatingText}>{experience.rating}</Text>
                  </View>
                </View>
              </View>
            </Animated.View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Trending Cities</Text>
        
        <View style={styles.trendingContainer}>
          <TouchableOpacity style={styles.trendingItem}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg' }} 
              style={styles.trendingImage} 
            />
            <View style={styles.trendingOverlay}>
              <Text style={styles.trendingName}>Paris</Text>
              <View style={styles.trendingLocation}>
                <MapPin size={12} color={theme.colors.white} />
                <Text style={styles.trendingLocationText}>France</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.trendingItem}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg' }} 
              style={styles.trendingImage} 
            />
            <View style={styles.trendingOverlay}>
              <Text style={styles.trendingName}>Tokyo</Text>
              <View style={styles.trendingLocation}>
                <MapPin size={12} color={theme.colors.white} />
                <Text style={styles.trendingLocationText}>Japan</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.trendingItem}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg' }} 
              style={styles.trendingImage} 
            />
            <View style={styles.trendingOverlay}>
              <Text style={styles.trendingName}>New York</Text>
              <View style={styles.trendingLocation}>
                <MapPin size={12} color={theme.colors.white} />
                <Text style={styles.trendingLocationText}>USA</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.trendingItem}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg' }} 
              style={styles.trendingImage} 
            />
            <View style={styles.trendingOverlay}>
              <Text style={styles.trendingName}>Barcelona</Text>
              <View style={styles.trendingLocation}>
                <MapPin size={12} color={theme.colors.white} />
                <Text style={styles.trendingLocationText}>Spain</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: theme.spacing.m,
    paddingBottom: theme.spacing.xl * 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.l,
  },
  greeting: {
    ...theme.typography.subheading,
    color: theme.colors.textSecondary,
  },
  subtitle: {
    ...theme.typography.heading,
    color: theme.colors.text,
  },
  profileImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
    marginTop: theme.spacing.l,
  },
  featuredContainer: {
    paddingRight: theme.spacing.m,
  },
  featuredCard: {
    width: 280,
    borderRadius: theme.borderRadius.m,
    backgroundColor: theme.colors.card,
    overflow: 'hidden',
    marginRight: theme.spacing.m,
    ...theme.shadows.medium,
  },
  featuredImage: {
    width: '100%',
    height: 180,
  },
  featuredContent: {
    padding: theme.spacing.m,
  },
  featuredName: {
    ...theme.typography.bodyMedium,
    marginBottom: theme.spacing.s,
  },
  featuredDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredDetailText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xs,
  },
  experiencesContainer: {
    marginBottom: theme.spacing.m,
  },
  experienceCard: {
    flexDirection: 'row',
    borderRadius: theme.borderRadius.m,
    backgroundColor: theme.colors.card,
    overflow: 'hidden',
    marginBottom: theme.spacing.m,
    height: 100,
    ...theme.shadows.small,
  },
  experienceImage: {
    width: 100,
    height: '100%',
  },
  experienceContent: {
    flex: 1,
    padding: theme.spacing.m,
    justifyContent: 'space-between',
  },
  experienceName: {
    ...theme.typography.bodyMedium,
  },
  experienceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  experiencePrice: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
  },
  experienceRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  experienceRatingText: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xs,
  },
  trendingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  trendingItem: {
    width: '48%',
    height: 120,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    marginBottom: theme.spacing.m,
    ...theme.shadows.small,
  },
  trendingImage: {
    width: '100%',
    height: '100%',
  },
  trendingOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: theme.spacing.s,
  },
  trendingName: {
    ...theme.typography.bodyMedium,
    color: theme.colors.white,
  },
  trendingLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendingLocationText: {
    ...theme.typography.bodySmall,
    color: theme.colors.white,
    marginLeft: 4,
  },
});