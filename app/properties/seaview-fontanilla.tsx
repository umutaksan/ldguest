import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { ExternalLink } from 'lucide-react-native';
import { theme } from '@/constants/theme';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SeaviewFontanillaScreen() {
  const handleOldGuide = () => {
    Linking.openURL('https://www.guidemarbella.com/cibeles');
  };

  return (
    <View style={styles.container}>
      <Animated.View 
        entering={FadeIn.duration(500)}
        style={styles.noticeContainer}
      >
        <Text style={styles.noticeTitle}>🚧 Under Construction</Text>
        <Text style={styles.noticeText}>
          Our new guide system is currently under development. Please use our previous guide for now:
        </Text>
        <TouchableOpacity 
          style={styles.oldGuideButton}
          onPress={handleOldGuide}
        >
          <Text style={styles.oldGuideButtonText}>Open Previous Guide</Text>
          <ExternalLink size={16} color={theme.colors.white} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    padding: theme.spacing.m,
  },
  noticeContainer: {
    padding: theme.spacing.m,
    backgroundColor: theme.colors.warning + '10',
    borderRadius: theme.borderRadius.m,
    borderWidth: 1,
    borderColor: theme.colors.warning + '30',
  },
  noticeTitle: {
    ...theme.typography.subheading,
    color: theme.colors.warning,
    marginBottom: theme.spacing.s,
    textAlign: 'center',
  },
  noticeText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    marginBottom: theme.spacing.m,
  },
  oldGuideButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.warning,
    padding: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    gap: theme.spacing.s,
  },
  oldGuideButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
  },
});