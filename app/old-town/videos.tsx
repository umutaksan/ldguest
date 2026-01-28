import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Video, MapPin, Key, TreePalm as Palmtree, Coffee, Tv, WashingMachine } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function OldTownVideosScreen() {
  const insets = useSafeAreaInsets();

  const videos = {
    houseAccess: [
      {
        id: 1,
        title: 'How can I access the Old Town L&D Guest property?',
        description: 'Check-in and check-out times information',
        thumbnail: 'https://i.ytimg.com/vi/v0J9V--RcFw/maxresdefault.jpg',
        url: 'https://youtube.com/shorts/v0J9V--RcFw',
        icon: <Key size={24} color={theme.colors.white} />
      }
    ],
    houseGuides: [
      {
        id: 1,
        title: 'How can I access the Old Town L&D Guest property?',
        description: 'Check-in and check-out times information',
        thumbnail: 'https://i.ytimg.com/vi/v0J9V--RcFw/maxresdefault.jpg',
        url: 'https://youtube.com/shorts/v0J9V--RcFw',
        icon: <WashingMachine size={24} color={theme.colors.white} />
      },
      {
        id: 2,
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
        title: 'Where is the washing machine?',
        description: 'Location of the washing machine in your apartment',
        thumbnail: 'https://i.ytimg.com/vi/QMOfnHMO-Z4/hqdefault.jpg',
        url: 'https://youtube.com/shorts/QMOfnHMO-Z4',
        icon: <WashingMachine size={24} color={theme.colors.white} />
      },
      {
        id: 2,
        title: 'From L&D Guest to Plaza de los Naranjos',
        description: 'Guide to reaching the famous Orange Square',
        thumbnail: 'https://i.ytimg.com/vi/ImuFuD6O2jY/maxresdefault.jpg',
        url: 'https://youtube.com/shorts/ImuFuD6O2jY',
        icon: <MapPin size={24} color={theme.colors.white} />
      },
      {
        id: 3,
        title: 'From L&D Guest to Playa de la Venus',
        description: 'Your Marbella Beach Guide',
        thumbnail: 'https://i.ytimg.com/vi/dSdARXpjDIw/maxresdefault.jpg',
        url: 'https://youtube.com/shorts/dSdARXpjDIw',
        icon: <MapPin size={24} color={theme.colors.white} />
      },
      {
        id: 4,
        title: 'From L&D Guest to Playa de la Venus',
        description: 'Your Marbella Beach Guide',
        thumbnail: 'https://i.ytimg.com/vi/dSdARXpjDIw/maxresdefault.jpg',
        url: 'https://youtube.com/shorts/dSdARXpjDIw',
        icon: <MapPin size={24} color={theme.colors.white} />
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
          key={`${video.id}-${index}`}
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
        {renderVideoSection('House Access & Information', videos.houseAccess, <Key size={20} color={theme.colors.primary} />)}
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