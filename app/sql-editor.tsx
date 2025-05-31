import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { supabase } from '@/lib/supabase';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SQLEditorScreen() {
  const insets = useSafeAreaInsets();
  const [properties, setProperties] = useState<any[]>([]);
  const [bookings, setBookings] = useState<any[]>([]);
  const [guests, setGuests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch properties
      const { data: propertiesData, error: propertiesError } = await supabase
        .from('properties')
        .select('*');

      if (propertiesError) throw propertiesError;
      setProperties(propertiesData);

      // Fetch bookings
      const { data: bookingsData, error: bookingsError } = await supabase
        .from('bookings')
        .select('*');

      if (bookingsError) throw bookingsError;
      setBookings(bookingsData);

      // Fetch guests
      const { data: guestsData, error: guestsError } = await supabase
        .from('guests')
        .select('*');

      if (guestsError) throw guestsError;
      setGuests(guestsData);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const renderTable = (title: string, data: any[]) => (
    <View style={styles.tableContainer}>
      <Text style={styles.tableTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.length > 0 && (
          <View>
            <View style={styles.headerRow}>
              {Object.keys(data[0]).map((key) => (
                <Text key={key} style={styles.headerCell}>{key}</Text>
              ))}
            </View>
            {data.map((item, index) => (
              <View key={index} style={styles.dataRow}>
                {Object.values(item).map((value: any, valueIndex) => (
                  <Text key={valueIndex} style={styles.dataCell}>
                    {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="Database Tables" />

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {loading ? (
          <Text style={styles.loadingText}>Loading data...</Text>
        ) : error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : (
          <Animated.View entering={FadeIn.duration(500)}>
            {renderTable('Properties', properties)}
            {renderTable('Bookings', bookings)}
            {renderTable('Guests', guests)}
          </Animated.View>
        )}
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
  loadingText: {
    ...theme.typography.body,
    textAlign: 'center',
    color: theme.colors.textSecondary,
  },
  errorText: {
    ...theme.typography.body,
    textAlign: 'center',
    color: theme.colors.error,
  },
  tableContainer: {
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    ...theme.shadows.small,
  },
  tableTitle: {
    ...theme.typography.subheading,
    marginBottom: theme.spacing.m,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    paddingBottom: theme.spacing.s,
    marginBottom: theme.spacing.s,
  },
  headerCell: {
    ...theme.typography.bodyMedium,
    width: 150,
    marginRight: theme.spacing.m,
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: theme.spacing.s,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  dataCell: {
    ...theme.typography.body,
    width: 150,
    marginRight: theme.spacing.m,
    color: theme.colors.textSecondary,
  },
});