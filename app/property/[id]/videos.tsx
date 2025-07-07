import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Video, MapPin, Key, TreePalm as Palmtree, Coffee, Tv } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function VideosScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();

  // Get videos based on property ID
  const getVideos = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return {
          educational: [
            {
              id: 1,
              title: 'How Do Propellers Work?',
              description: 'Learn about the physics behind propellers',
              thumbnail: 'https://i.ytimg.com/vi/0l6igtzY0xQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/0l6igtzY0xQ?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How Does a Coffee Machine Work?',
              description: 'Discover the inner workings of coffee machines',
              thumbnail: 'https://i.ytimg.com/vi/XiKCGNhC9TY/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/XiKCGNhC9TY?feature=share',
              icon: <Coffee size={24} color={theme.colors.white} />
            }
          ],
          propertyGuides: [
            {
              id: 1,
              title: 'How do I get to the pool?',
              description: 'Instructions for finding and accessing the swimming pool',
              thumbnail: 'https://i.ytimg.com/vi/mxsMDPfzOuQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/mxsMDPfzOuQ?feature=share',
              icon: <Palmtree size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How do I get to the beach? (Part 1)',
              description: 'Guide to finding the nearest beach access',
              thumbnail: 'https://i.ytimg.com/vi/u83ykP_syVM/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/u83ykP_syVM',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 3,
              title: 'How do I get to the beach? (Part 2)',
              description: 'Additional information about beach access',
              thumbnail: 'https://i.ytimg.com/vi/lMyemV_CiU4/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/lMyemV_CiU4?feature=share',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 4,
              title: 'How to Open and Close the Sunshade?',
              description: 'Instructions for operating the sunshade',
              thumbnail: 'https://i.ytimg.com/vi/us5KRyyCWMA/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/us5KRyyCWMA?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
            }
          ]
        };
      case '29051502': // Seaview Fontanilla
        return {
          educational: [
            {
              id: 1,
              title: 'How Do Propellers Work?',
              description: 'Learn about the physics behind propellers',
              thumbnail: 'https://i.ytimg.com/vi/0l6igtzY0xQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/0l6igtzY0xQ?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How Does a Coffee Machine Work?',
              description: 'Discover the inner workings of coffee machines',
              thumbnail: 'https://i.ytimg.com/vi/XiKCGNhC9TY/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/XiKCGNhC9TY?feature=share',
              icon: <Coffee size={24} color={theme.colors.white} />
            }
          ],
          propertyGuides: [
            {
              id: 1,
              title: 'How do I get to the pool?',
              description: 'Instructions for finding and accessing the swimming pool',
              thumbnail: 'https://i.ytimg.com/vi/mxsMDPfzOuQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/mxsMDPfzOuQ?feature=share',
              icon: <Palmtree size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How do I get to the beach? (Part 1)',
              description: 'Guide to finding the nearest beach access',
              thumbnail: 'https://i.ytimg.com/vi/u83ykP_syVM/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/u83ykP_syVM',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 3,
              title: 'How do I get to the beach? (Part 2)',
              description: 'Additional information about beach access',
              thumbnail: 'https://i.ytimg.com/vi/lMyemV_CiU4/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/lMyemV_CiU4?feature=share',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 4,
              title: 'How to Open and Close the Sunshade?',
              description: 'Instructions for operating the sunshade',
              thumbnail: 'https://i.ytimg.com/vi/us5KRyyCWMA/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/us5KRyyCWMA?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
            }
          ]
        };
      case '29051503': // Aloha Pueblo
        return {
          educational: [
            {
              id: 1,
              title: 'How Do Propellers Work?',
              description: 'Learn about the physics behind propellers',
              thumbnail: 'https://i.ytimg.com/vi/0l6igtzY0xQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/0l6igtzY0xQ?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How Does a Coffee Machine Work?',
              description: 'Discover the inner workings of coffee machines',
              thumbnail: 'https://i.ytimg.com/vi/XiKCGNhC9TY/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/XiKCGNhC9TY?feature=share',
              icon: <Coffee size={24} color={theme.colors.white} />
            }
          ],
          propertyGuides: [
            {
              id: 1,
              title: 'How do I get to the pool?',
              description: 'Instructions for finding and accessing the swimming pool',
              thumbnail: 'https://i.ytimg.com/vi/mxsMDPfzOuQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/mxsMDPfzOuQ?feature=share',
              icon: <Palmtree size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How do I get to the beach? (Part 1)',
              description: 'Guide to finding the nearest beach access',
              thumbnail: 'https://i.ytimg.com/vi/u83ykP_syVM/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/u83ykP_syVM',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 3,
              title: 'How do I get to the beach? (Part 2)',
              description: 'Additional information about beach access',
              thumbnail: 'https://i.ytimg.com/vi/lMyemV_CiU4/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/lMyemV_CiU4?feature=share',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 4,
              title: 'How to Open and Close the Sunshade?',
              description: 'Instructions for operating the sunshade',
              thumbnail: 'https://i.ytimg.com/vi/us5KRyyCWMA/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/us5KRyyCWMA?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
            }
          ]
        };
      case '29051504': // Old Town
        return {
          educational: [
            {
              id: 1,
              title: 'How Do Propellers Work?',
              description: 'Learn about the physics behind propellers',
              thumbnail: 'https://i.ytimg.com/vi/0l6igtzY0xQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/0l6igtzY0xQ?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How Does a Coffee Machine Work?',
              description: 'Discover the inner workings of coffee machines',
              thumbnail: 'https://i.ytimg.com/vi/XiKCGNhC9TY/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/XiKCGNhC9TY?feature=share',
              icon: <Coffee size={24} color={theme.colors.white} />
            }
          ],
          propertyGuides: [
            {
              id: 1,
              title: 'How do I get to the pool?',
              description: 'Instructions for finding and accessing the swimming pool',
              thumbnail: 'https://i.ytimg.com/vi/mxsMDPfzOuQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/mxsMDPfzOuQ?feature=share',
              icon: <Palmtree size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How do I get to the beach? (Part 1)',
              description: 'Guide to finding the nearest beach access',
              thumbnail: 'https://i.ytimg.com/vi/u83ykP_syVM/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/u83ykP_syVM',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 3,
              title: 'How do I get to the beach? (Part 2)',
              description: 'Additional information about beach access',
              thumbnail: 'https://i.ytimg.com/vi/lMyemV_CiU4/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/lMyemV_CiU4?feature=share',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 4,
              title: 'How to Open and Close the Sunshade?',
              description: 'Instructions for operating the sunshade',
              thumbnail: 'https://i.ytimg.com/vi/us5KRyyCWMA/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/us5KRyyCWMA?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
            }
          ]
        };
      default:
        return {
          educational: [
            {
              id: 1,
              title: 'How Do Propellers Work?',
              description: 'Learn about the physics behind propellers',
              thumbnail: 'https://i.ytimg.com/vi/0l6igtzY0xQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/0l6igtzY0xQ?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How Does a Coffee Machine Work?',
              description: 'Discover the inner workings of coffee machines',
              thumbnail: 'https://i.ytimg.com/vi/XiKCGNhC9TY/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/XiKCGNhC9TY?feature=share',
              icon: <Coffee size={24} color={theme.colors.white} />
            }
          ],
          propertyGuides: [
            {
              id: 1,
              title: 'How do I get to the pool?',
              description: 'Instructions for finding and accessing the swimming pool',
              thumbnail: 'https://i.ytimg.com/vi/mxsMDPfzOuQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/mxsMDPfzOuQ?feature=share',
              icon: <Palmtree size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How do I get to the beach? (Part 1)',
              description: 'Guide to finding the nearest beach access',
              thumbnail: 'https://i.ytimg.com/vi/u83ykP_syVM/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/u83ykP_syVM',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 3,
              title: 'How do I get to the beach? (Part 2)',
              description: 'Additional information about beach access',
              thumbnail: 'https://i.ytimg.com/vi/lMyemV_CiU4/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/lMyemV_CiU4?feature=share',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            {
              id: 4,
              title: 'How to Open and Close the Sunshade?',
              description: 'Instructions for operating the sunshade',
              thumbnail: 'https://i.ytimg.com/vi/us5KRyyCWMA/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/us5KRyyCWMA?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
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
        {videos.educational && renderVideoSection('Educational Videos', videos.educational, <Tv size={20} color={theme.colors.primary} />)}
        {videos.propertyGuides && renderVideoSection('Property Guides', videos.propertyGuides, <Palmtree size={20} color={theme.colors.primary} />)}
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