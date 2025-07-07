import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { X } from 'lucide-react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SeaviewPhotosScreen() {
  const insets = useSafeAreaInsets();
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const { width } = Dimensions.get('window');
  
  const photos = [
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/628787942.jpg?k=8debb78111131852bf35286c8e7e732682d6570737cf214f84c3803fce5d4806&o=',
    'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
    'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
    'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
  ];
  
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
          Explore our beautiful Seaview Playa de Fontanilla apartment through these photos. Tap on any image to view it in full size.
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
    padding: theme.spacing.m,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.l,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoContainer: {
    marginBottom: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    ...theme.shadows.small,
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