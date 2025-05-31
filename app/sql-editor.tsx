import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, ScrollView, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@/constants/theme';
import { PageHeader } from '@/components/common/PageHeader';
import { Play, Database, CircleAlert as AlertCircle, Code } from 'lucide-react-native';
import { supabase } from '@/lib/supabase';
import Animated, { FadeIn } from 'react-native-reanimated';

// Only import Monaco Editor on web platform
const MonacoEditor = Platform.select({
  web: () => require('@monaco-editor/react').default,
  default: () => null,
})();

const exampleQueries = [
  {
    name: 'Select All Properties',
    query: 'SELECT * FROM properties LIMIT 10;'
  },
  {
    name: 'Count Properties by Location',
    query: 'SELECT location, COUNT(*) as count FROM properties GROUP BY location ORDER BY count DESC;'
  },
  {
    name: 'Recent Bookings',
    query: 'SELECT * FROM bookings ORDER BY created_at DESC LIMIT 5;'
  }
];

export default function SQLEditorScreen() {
  const insets = useSafeAreaInsets();
  const [query, setQuery] = useState('SELECT * FROM properties LIMIT 10;');
  const [results, setResults] = useState<any[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const executeQuery = async () => {
    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const { data, error: queryError } = await supabase.rpc('execute_sql', {
        query_text: query
      });

      if (queryError) {
        throw queryError;
      }

      setResults(data);
    } catch (err: any) {
      setError(err.message || 'An error occurred while executing the query');
    } finally {
      setIsLoading(false);
    }
  };

  const renderResults = () => {
    if (!results || results.length === 0) {
      return (
        <View style={styles.noResults}>
          <Text style={styles.noResultsText}>No results found</Text>
        </View>
      );
    }

    const columns = Object.keys(results[0]);

    return (
      <ScrollView horizontal style={styles.tableScrollView}>
        <View style={styles.resultsContainer}>
          <View style={styles.tableHeader}>
            {columns.map((column) => (
              <Text key={column} style={styles.headerCell}>
                {column}
              </Text>
            ))}
          </View>
          <ScrollView style={styles.tableBody}>
            {results.map((row, index) => (
              <View key={index} style={styles.tableRow}>
                {columns.map((column) => (
                  <Text key={column} style={styles.cell}>
                    {row[column]?.toString() || 'null'}
                  </Text>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      <PageHeader title="SQL Editor" />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View entering={FadeIn.duration(500)}>
          <View style={styles.examplesContainer}>
            <View style={styles.examplesHeader}>
              <Code size={20} color={theme.colors.primary} />
              <Text style={styles.examplesTitle}>Example Queries</Text>
            </View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.examplesList}
            >
              {exampleQueries.map((example, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.exampleButton}
                  onPress={() => setQuery(example.query)}
                >
                  <Text style={styles.exampleButtonText}>{example.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.editorContainer}>
            {Platform.OS === 'web' && MonacoEditor ? (
              <MonacoEditor
                height="200px"
                defaultLanguage="sql"
                theme="vs-dark"
                value={query}
                onChange={(value) => setQuery(value || '')}
                options={{
                  minimap: { enabled: false },
                  scrollBeyondLastLine: false,
                  fontSize: 14,
                  lineNumbers: 'on',
                }}
              />
            ) : (
              <TextInput
                style={styles.textEditor}
                value={query}
                onChangeText={setQuery}
                multiline
                placeholder="Enter your SQL query here..."
                placeholderTextColor={theme.colors.textTertiary}
              />
            )}

            <TouchableOpacity
              style={[
                styles.executeButton,
                isLoading && styles.executeButtonDisabled
              ]}
              onPress={executeQuery}
              disabled={isLoading}
            >
              <Play size={20} color={theme.colors.white} />
              <Text style={styles.executeButtonText}>
                {isLoading ? 'Executing...' : 'Execute Query'}
              </Text>
            </TouchableOpacity>
          </View>

          {error && (
            <View style={styles.errorContainer}>
              <AlertCircle size={20} color={theme.colors.error} />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {results && (
            <View style={styles.resultsWrapper}>
              <View style={styles.resultsHeader}>
                <Database size={20} color={theme.colors.primary} />
                <Text style={styles.resultsTitle}>Query Results</Text>
                <Text style={styles.resultsCount}>
                  {results.length} row{results.length !== 1 ? 's' : ''}
                </Text>
              </View>
              {renderResults()}
            </View>
          )}
        </Animated.View>
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
    flex: 1,
    padding: theme.spacing.m,
  },
  examplesContainer: {
    marginBottom: theme.spacing.m,
  },
  examplesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.s,
  },
  examplesTitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
    marginLeft: theme.spacing.s,
  },
  examplesList: {
    flexDirection: 'row',
  },
  exampleButton: {
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    borderRadius: theme.borderRadius.m,
    marginRight: theme.spacing.s,
  },
  exampleButtonText: {
    ...theme.typography.bodySmall,
    color: theme.colors.primary,
  },
  editorContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  textEditor: {
    height: 200,
    padding: theme.spacing.m,
    color: theme.colors.text,
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 14,
    textAlignVertical: 'top',
  },
  executeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.m,
  },
  executeButtonDisabled: {
    opacity: 0.7,
  },
  executeButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
    marginLeft: theme.spacing.s,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.error + '10',
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    marginTop: theme.spacing.m,
  },
  errorText: {
    ...theme.typography.body,
    color: theme.colors.error,
    marginLeft: theme.spacing.s,
    flex: 1,
  },
  resultsWrapper: {
    marginTop: theme.spacing.m,
  },
  resultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.m,
  },
  resultsTitle: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
    marginLeft: theme.spacing.s,
  },
  resultsCount: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.s,
  },
  tableScrollView: {
    flexGrow: 0,
  },
  resultsContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    overflow: 'hidden',
    ...theme.shadows.small,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: theme.colors.primaryLight,
    padding: theme.spacing.s,
  },
  headerCell: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
    minWidth: 150,
    padding: theme.spacing.s,
  },
  tableBody: {
    maxHeight: 300,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  cell: {
    ...theme.typography.body,
    minWidth: 150,
    padding: theme.spacing.s,
  },
  noResults: {
    padding: theme.spacing.m,
    alignItems: 'center',
  },
  noResultsText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
  },
});