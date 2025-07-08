import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Video, MapPin, Key, TreePalm as Palmtree, Coffee, Tv, WashingMachine } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';

export default function VideosScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();

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
              thumbnail: 'https://hirdavatfirsati.com/marelli-pass-bnb-air-bnb-fonksiyonlu-sifreli-celik-kapi-kilidi-kapi-gobegi-g-11959.jpg',
              url: 'https://www.youtube.com/shorts/XNzqKrwDKf8',
              icon: <Key size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'Entering the Building',
              description: 'How to use the key card to enter the building',
              thumbnail: 'https://image.made-in-china.com/202f0j00uHibzKgWCLod/Smart-Hotel-Door-Lock-Remote-Management-Airbnb-Phone-Unlocking-Lock.webp',
              url: 'https://www.youtube.com/shorts/nWXkqDrRcyU',
              icon: <Key size={24} color={theme.colors.white} />
            }
          ],
          houseGuides: [
            {
              id: 1,
              title: 'How to Use Electronics',
              description: 'Guide for using TV, AC, and other electronic devices',
              thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyD9vfAlX2ovxnem8HeqNVDB7cFiJhFNp3w&s',
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
              thumbnail: 'https://cdn.recetasderechupete.com/wp-content/uploads/2023/11/Cafe-americano-portada.jpg',
              url: 'https://youtu.be/RZJ0MxWX9v4',
              icon: <Coffee size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'Walking to Nearby Cafes - Part 2',
              description: 'More cafes and restaurants in the area',
              thumbnail: 'https://cdn.recetasderechupete.com/wp-content/uploads/2023/11/Cafe-americano-portada.jpg',
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
              title: 'How Do Propellers Work?',
              description: 'Educational video explaining propeller mechanics',
              thumbnail: 'https://i.ytimg.com/vi/0l6igtzY0xQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/0l6igtzY0xQ?feature=share',
              icon: <Tv size={24} color={theme.colors.white} />
            },
            { 
              id: 2, 
              title: 'How Does a Coffee Machine Work?',
              description: 'Learn about the mechanics of coffee machines',
              thumbnail: 'https://i.ytimg.com/vi/XiKCGNhC9TY/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/XiKCGNhC9TY?feature=share',
              icon: <Coffee size={24} color={theme.colors.white} />
            }
          ],
          propertyGuides: [
            { 
              id: 1, 
              title: 'How do I get to the pool?',
              description: 'Guide to finding and accessing the swimming pool',
              thumbnail: 'https://i.ytimg.com/vi/mxsMDPfzOuQ/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/mxsMDPfzOuQ?feature=share',
              icon: <Palmtree size={24} color={theme.colors.white} />
            },
            { 
              id: 2, 
              title: 'How do I get to the beach? (Part 1)',
              description: 'Directions to the nearest beach from your apartment',
              thumbnail: 'https://i.ytimg.com/vi/u83ykP_syVM/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/u83ykP_syVM',
              icon: <MapPin size={24} color={theme.colors.white} />
            },
            { 
              id: 3, 
              title: 'How do I get to the beach? (Part 2)',
              description: 'Additional beach access information',
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
          propertyGuides: [
            {
              id: 1,
              title: 'How do I get to the pool?',
              description: 'Guide to finding and accessing the swimming pool',
              thumbnail: 'https://i.ytimg.com/vi/SSvp84GEJMA/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/SSvp84GEJMA?feature=share',
              icon: <Palmtree size={24} color={theme.colors.white} />
            },
            {
              id: 2,
              title: 'How can I get to the cafés, and where can I park?',
              description: 'Directions to nearby cafés and parking information',
              thumbnail: 'https://i.ytimg.com/vi/95EeUOmeKZs/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/95EeUOmeKZs?feature=share',
              icon: <Coffee size={24} color={theme.colors.white} />
            },
            {
              id: 3,
              title: 'How can I get to the cafés, and where can I park? (Option 2)',
              description: 'Alternative route to cafés and additional parking options',
              thumbnail: 'https://i.ytimg.com/vi/tSxrs7erM-o/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/tSxrs7erM-o',
              icon: <Coffee size={24} color={theme.colors.white} />
            }
          ]
        };
      case '29051504': // Old Town
        return {
          houseGuides: [
            { 
              id: 1, 
              title: 'How can I access the Old Town L&D Guest property?',
              description: 'Check-in and check-out times information',
              thumbnail: 'https://i.ytimg.com/vi/v0J9V--RcFw/maxresdefault.jpg',
              url: 'https://youtube.com/shorts/v0J9V--RcFw',
              icon: <Key size={24} color={theme.colors.white} />
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
      <PageHeader title={t('home.videos')} />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {videos.houseGuides && renderVideoSection(t('videos.houseGuides'), videos.houseGuides, <Tv size={20} color={theme.colors.primary} />)}
        {videos.houseAccess && renderVideoSection(t('videos.houseAccess'), videos.houseAccess, <Key size={20} color={theme.colors.primary} />)}
        {videos.amenities && renderVideoSection(t('home.amenities'), videos.amenities, <Palmtree size={20} color={theme.colors.primary} />)}
        {videos.propertyGuides && renderVideoSection(t('videos.propertyGuides'), videos.propertyGuides, <MapPin size={20} color={theme.colors.primary} />)}
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