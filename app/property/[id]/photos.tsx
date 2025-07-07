import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { X } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function PhotosScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const { width } = Dimensions.get('window');
  
  // Get photos based on property ID
  const getPhotos = () => {
    switch(id) {
      case '29051501': // Jardines Tropicales
        return [
          'https://a0.muscache.com/im/pictures/miso/Hosting-1316607383752040451/original/4009975e-0d1a-450c-9458-88acab09ef65.png?im_w=1440',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
          'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
          'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
          'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
        ];
      case '29051502': // Seaview Fontanilla
        return [
          'https://cf.bstatic.com/xdata/images/hotel/max1024x768/628787942.jpg?k=8debb78111131852bf35286c8e7e732682d6570737cf214f84c3803fce5d4806&o=',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
          'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
          'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
          'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
        ];
      case '29051503': // Aloha Pueblo
        return [
          'https://cf.bstatic.com/xdata/images/hotel/max1024x768/681135350.jpg?k=fc73c36cd1371fe8efdc2e947ec5aa836557ffe9210d4e33aadbb0e8f237d43a&o=&hp=1',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
          'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
          'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
          'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
        ];
      case '29051504': // Old Town
        return [
          'https://cf.bstatic.com/xdata/images/hotel/max1024x768/645431688.jpg?k=0d1af13e52daafe35fe9638dd024af7730169834024271f0cc2f0540393f7104&o=',
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
          'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
          'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
          'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
        ];
      default:
        return [
          'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
          'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
          'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
          'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
          'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
          'https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg',
        ];
    }
  };
  
  const photos = getPhotos();
  
  // Get property title based on ID
  const getPropertyTitle = () => {
    switch(id) {
      case '29051501':
        return 'Jardines Tropicales Puerto Banús';
      case '29051502':
        return 'Seaview Playa de Fontanilla';
      case '29051503':
        return 'Aloha Pueblo Townhouse';
      case '29051504':
        return 'Marbella Old Town';
      default:
        return 'Property';
    }
  };
  
  const photoSize = width > 768 ? (width - (theme.spacing.m * 4)) / 3 : (width - (theme.spacing.m * 3)) / 2;
  
  const handlePhotoPress = (photo: string) => {
    setSelectedPhoto(photo);
  };
  
  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };
  
  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Photo Gallery" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.description}>
          Explore our beautiful {getPropertyTitle()} through these photos. Tap on any image to view it in full size.
        </Text>
        
        <View style={styles.photoGrid}>
          {photos.map((photo, index) => (
            <Animated.View 
              key={index}
              entering={FadeIn.delay(index * 100)}
              style={[styles.photoContainer, { width: photoSize, height: photoSize }]}
            >
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => handlePhotoPress(photo)}
              >
                <Image 
                  source={{ uri: photo }}
                  style={styles.photo}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </ScrollView>
      
      {selectedPhoto && (
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleCloseModal}
          >
            <X size={24} color={theme.colors.white} />
          </TouchableOpacity>
          <Image 
            source={{ uri: selectedPhoto }}
            style={styles.modalImage}
            resizeMode="contain"
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.layout.isWeb ? theme.spacing.m : theme.spacing.l,
    ...(theme.layout.isWeb && {
      fontSize: 14,
    }),
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoContainer: {
    marginBottom: theme.layout.isWeb ? theme.spacing.s : theme.spacing.m,
    borderRadius: theme.layout.isWeb ? theme.borderRadius.s : theme.borderRadius.m,
    overflow: 'hidden',
    ...(theme.layout.isWeb ? {
      border: '1px solid #f0f0f0',
    } : theme.shadows.small),
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1001,
  },
  modalImage: {
    width: '90%',
    height: '80%',
  },
});