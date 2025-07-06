import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Video, MapPin, Key, TreePalm as Palmtree, Coffee, Tv } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function VideosScreen() {
  const insets = useSafeAreaInsets();

  const videos = {
    houseAccess: [
      {
        id: 1,
        title: 'Getting the Key Card',
        description: 'Instructions for getting the key card from the key box',
        thumbnail: 'https://images.pexels.com/photos/4065906/pexels-photo-4065906.jpeg',
        url: 'https://www.youtube.com/shorts/XNzqKrwDKf8',
        icon: <Key size={24} color={theme.colors.white} />
      },
      {
        id: 2,
        title: 'Entering the Building',
        description: 'How to use the key card to enter the building',
        thumbnail: 'https://images.pexels.com/photos/3951355/pexels-photo-3951355.jpeg',
        url: 'https://www.youtube.com/shorts/nWXkqDrRcyU',
        icon: <Key size={24} color={theme.colors.white} />
      }
    ],
    houseGuides: [
      {
        id: 1,
        title: 'How to Use Electronics',
        description: 'Guide for using TV, AC, and other electronic devices',
        thumbnail: 'https://images.pexels.com/photos/3938465/pexels-photo-3938465.jpeg',
        url: 'https://youtu.be/HuYUrGQOR1E',
        icon: <Tv size={24} color={theme.colors.white} />
      }
    ],
    amenities: [
      {
        id: 1,
        title: 'How to Access the Pool',
        description: 'Instructions for finding and using the swimming pool',
        thumbnail: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
        url: 'https://youtu.be/IUErsgo7qd4',
        icon: <Palmtree size={24} color={theme.colors.white} />
      }
    ],
    nearby: [
      {
        id: 1,
        title: 'Walking to Nearby Cafes - Part 1',
        description: 'Guide to finding nearby cafes and restaurants',
        thumbnail: 'https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg',
        url: 'https://youtu.be/RZJ0MxWX9v4',
        icon: <Coffee size={24} color={theme.colors.white} />
      },
      {
        id: 2,
        title: 'Walking to Nearby Cafes - Part 2',
        description: 'More cafes and restaurants in the area',
        thumbnail: 'https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg',
        url: 'https://youtu.be/rKdzIvFFjGQ',
        icon: <Coffee size={24} color={theme.colors.white} />
      },
      {
        id: 3,
        title: 'Walking to Puerto Banús',
        description: 'How to walk to Puerto Banús from the apartment',
        thumbnail: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
        url: 'https://youtu.be/hAVfV32hWp8',
        icon: <MapPin size={24} color={theme.colors.white} />
      }
    ]
  };

  const handleWatchVideo = (url: string) => {
    Linking.openURL(url);
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
              <Video size={24} color={theme.colors.white} />
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
        {renderVideoSection('House Access', videos.houseAccess, <Key size={20} color={theme.colors.primary} />)}
        {renderVideoSection('House Guides', videos.houseGuides, <Tv size={20} color={theme.colors.primary} />)}
        {renderVideoSection('Amenities', videos.amenities, <Palmtree size={20} color={theme.colors.primary} />)}
        {renderVideoSection('Nearby Places', videos.nearby, <MapPin size={20} color={theme.colors.primary} />)}
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
    marginBottom: theme.spacing.m,
    backgroundColor: theme.colors.card,
    ...theme.shadows.medium,
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
    marginBottom: theme.spacing.xs,
  },
  videoDescription: {
    ...theme.typography.bodySmall,
    color: theme.colors.white,
    opacity: 0.8,
  },
});