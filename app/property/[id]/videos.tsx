import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';
import { PageHeader } from '@/components/common/PageHeader';
import { Video, MapPin, Key, TreePalm as Palmtree, Coffee, Tv, ExternalLink } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '@/constants/theme';

export default function VideosScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();

  // Get videos based on property ID
  const getVideos = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return {
          houseAccess: [
            {
              id: 1,
              title: 'Getting the Key Card',
              description: 'Instructions for getting the key card from the key box',
              thumbnail: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg',
              url: 'https://www.youtube.com/shorts/XNzqKrwDKf8',
              icon: <Key size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'Entering the Building',
              description: 'How to use the key card to enter the building',
              thumbnail: 'https://images.pexels.com/photos/5816297/pexels-photo-5816297.jpeg',
              url: 'https://www.youtube.com/shorts/nWXkqDrRcyU',
              icon: <Key size={24} color={theme.colors.white} />
            }
          ],
          houseGuides: [
            {
              id: 1,
              title: 'How to Use Electronics',
              description: 'Guide for using TV, AC, and other electronic devices',
              thumbnail: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg',
              url: 'https://youtu.be/HuYUrGQOR1E',
              icon: <Tv size={24} color={theme.colors.white} />
            }
          ],
          amenities: [
            {
              id: 1,
              title: 'How to Access the Pool',
              description: 'Instructions for finding and using the swimming pool',
              thumbnail: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg',
              url: 'https://youtu.be/IUErsgo7qd4',
              icon: <Palmtree size={24} color={theme.colors.white} />
            }
          ],
          nearby: [
            {
              id: 1,
              title: 'Walking to Nearby Cafes - Part 1',
              description: 'Guide to finding nearby cafes and restaurants',
              thumbnail: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg',
              url: 'https://youtu.be/RZJ0MxWX9v4',
              icon: <Coffee size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'Walking to Nearby Cafes - Part 2',
              description: 'More cafes and restaurants in the area',
              thumbnail: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg',
              url: 'https://youtu.be/rKdzIvFFjGQ',
              icon: <Coffee size={24} color={theme.colors.white} />
            },
            {
              id: 3,
              title: 'Walking to Puerto Banús',
              description: 'How to walk to Puerto Banús from the apartment',
              thumbnail: 'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg',
              url: 'https://youtu.be/hAVfV32hWp8',
              icon: <MapPin size={24} color={theme.colors.white} />
            }
          ]
        };
      case '29051502': // Seaview Fontanilla
        return {
          houseGuides: [
            {
              id: 1,
              title: 'Apartment Tour',
              description: 'Complete tour of your Seaview apartment',
              thumbnail: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg',
              url: '#',
              icon: <Tv size={24} color={theme.colors.white} />
            }
          ],
          nearby: [
            {
              id: 1,
              title: 'Walking to Fontanilla Beach',
              description: 'Short walk to the beautiful Fontanilla Beach',
              thumbnail: 'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg',
              url: '#',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'Marbella Old Town Walk',
              description: 'How to walk to Marbella Old Town from the apartment',
              thumbnail: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg',
              url: '#',
              icon: <Coffee size={24} color={theme.colors.white} />
            }
          ]
        };
      case '29051503': // Aloha Pueblo
        return {
          houseGuides: [
            {
              id: 1,
              title: 'Townhouse Tour',
              description: 'Complete tour of your Aloha Pueblo townhouse',
              thumbnail: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg',
              url: '#',
              icon: <Tv size={24} color={theme.colors.white} />
            }
          ],
          nearby: [
            {
              id: 1,
              title: 'Walking to Golf Courses',
              description: 'How to reach nearby golf courses from the townhouse',
              thumbnail: 'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg',
              url: '#',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'Nueva Andalucía Center',
              description: 'Walking guide to Nueva Andalucía shopping and dining',
              thumbnail: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg',
              url: '#',
              icon: <Coffee size={24} color={theme.colors.white} />
            }
          ]
        };
      case '29051504': // Old Town
        return {
          houseGuides: [
            {
              id: 1,
              title: 'Old Town Apartment Tour',
              description: 'Complete tour of your historic Old Town apartment',
              thumbnail: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg',
              url: '#',
              icon: <Tv size={24} color={theme.colors.white} />
            }
          ],
          nearby: [
            {
              id: 1,
              title: 'Walking to Plaza de los Naranjos',
              description: 'Short walk to the famous Orange Square',
              thumbnail: 'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg',
              url: '#',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'Exploring Old Town Streets',
              description: 'Guide to the charming narrow streets and historic sites',
              thumbnail: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg',
              url: '#',
              icon: <Coffee size={24} color={theme.colors.white} />
            }
          ]
        };
      default:
        return {
          houseGuides: [
            {
              id: 1,
              title: 'Property Tour',
              description: 'Complete tour of your property',
              thumbnail: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg',
              url: '#',
              icon: <Tv size={24} color={theme.colors.white} />
            }
          ],
          nearby: [
            {
              id: 1,
              title: 'Nearby Attractions',
              description: 'Guide to nearby attractions',
              thumbnail: 'https://images.pexels.com/photos/1705254/pexels-photo-1705254.jpeg',
              url: '#',
              icon: <MapPin size={24} color={theme.colors.white} />
            }
          ]
        };
    }
  };

  const videos = getVideos();

  const handleWatchVideo = (url: string) => {
    if (url !== '#') {
      Linking.openURL(url);
    }
  };

  const renderVideoSection = (title: string, videos: any[], icon: React.ReactNode) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        {icon}
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {videos.map((video, index) => (
        <Animated.View 
          key={video.id}
          entering={FadeIn.delay(index * 100)}
        >
          <TouchableOpacity
            style={styles.videoCard}
            onPress={() => handleWatchVideo(video.url)}
            activeOpacity={0.9}
            disabled={video.url === '#'}
          >
            <Image 
              source={{ uri: video.thumbnail }}
              style={styles.thumbnail}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.videoOverlay}
            >
              <View style={styles.videoIcon}>
                {video.icon}
              </View>
              <View style={styles.videoInfo}>
                <Text style={styles.videoTitle}>{video.title}</Text>
                <Text style={styles.videoDescription}>{video.description}</Text>
              </View>
              <ExternalLink size={24} color={theme.colors.white} />
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      ))}
    </View>
  );

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="House Videos" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {videos.houseAccess && renderVideoSection('House Access', videos.houseAccess, <Key size={20} color={theme.colors.primary} />)}
        {videos.houseGuides && renderVideoSection('House Guides', videos.houseGuides, <Tv size={20} color={theme.colors.primary} />)}
        {videos.amenities && renderVideoSection('Amenities', videos.amenities, <Palmtree size={20} color={theme.colors.primary} />)}
        {videos.nearby && renderVideoSection('Nearby Places', videos.nearby, <MapPin size={20} color={theme.colors.primary} />)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.m,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
  },
  sectionTitle: {
    ...theme.typography.subheading,
    marginLeft: theme.spacing.s,
  },
  videoCard: {
    height: 200,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    marginBottom: theme.spacing.l,
    backgroundColor: theme.colors.card,
    ...theme.shadows.medium,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  videoOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing.m,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  videoIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.m,
  },
  videoInfo: {
    flex: 1, 
    marginRight: theme.spacing.m,
  },
  videoTitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.white,
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  videoDescription: {
    ...theme.typography.bodySmall,
    color: theme.colors.white,
    opacity: 0.8,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});