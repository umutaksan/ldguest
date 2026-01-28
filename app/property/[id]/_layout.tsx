import React from 'react';
import { Stack } from 'expo-router';

export default function PropertyLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="explore" />
      <Stack.Screen name="guide" />
      <Stack.Screen name="info" />
      <Stack.Screen name="contact" />
      <Stack.Screen name="amenities" />
      <Stack.Screen name="photos" />
      <Stack.Screen name="location" />
      <Stack.Screen name="entry" />
      <Stack.Screen name="wifi" />
      <Stack.Screen name="videos" />
      <Stack.Screen name="rules" />
      <Stack.Screen name="dining" />
      <Stack.Screen name="attractions" />
      <Stack.Screen name="luggage" />
      <Stack.Screen name="car-rental" />
      <Stack.Screen name="parking" />
    </Stack>
  );
}