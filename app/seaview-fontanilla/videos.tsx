import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeIn } from 'react-native-reanimated';
import { PageHeader } from '@/components/common/PageHeader';
import { Video, MapPin, Key, TreePalm as Palmtree, Coffee, Tv, ExternalLink } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '@/constants/theme';

export default function SeaviewVideosScreen() {
  const insets = useSafeAreaInsets();

  const videos = {
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
        {renderVideoSection('House Guides', videos.houseGuides, <Tv size={20} color={theme.colors.primary} />)}
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