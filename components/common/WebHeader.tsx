import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { theme } from '@/constants/theme';
import { Chrome as Home, Compass, BookOpen, Info, Phone } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';

export function WebHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation();

  const navItems = [
    { name: t('common.home'), path: '/', icon: Home },
    { name: t('common.explore'), path: '/explore', icon: Compass },
    { name: t('common.guide'), path: '/guide', icon: BookOpen },
    { name: t('common.info'), path: '/info', icon: Info },
    { name: t('common.contact'), path: '/contact', icon: Phone },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => router.push('/')} style={styles.logo}>
          <Text style={styles.logoText}>L&D Guest</Text>
          <Text style={styles.logoSubtext}>Marbella</Text>
        </TouchableOpacity>

        <View style={styles.nav}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <TouchableOpacity
                key={item.path}
                onPress={() => router.push(item.path as any)}
                style={[styles.navItem, active && styles.navItemActive]}
              >
                <Icon
                  size={20}
                  color={active ? theme.colors.primary : theme.colors.textSecondary}
                />
                <Text style={[styles.navText, active && styles.navTextActive]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.actions}>
          <LanguageSelector />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    ...theme.shadows.small,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1280,
    marginHorizontal: 'auto',
    paddingHorizontal: theme.spacing.l,
    paddingVertical: theme.spacing.m,
    width: '100%',
  },
  logo: {
    flexDirection: 'column',
  },
  logoText: {
    ...theme.typography.subheading,
    color: theme.colors.primary,
    fontSize: 20,
    lineHeight: 24,
  },
  logoSubtext: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    fontSize: 11,
    marginTop: -2,
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.s,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    borderRadius: theme.borderRadius.m,
    transition: 'all 0.2s ease',
  },
  navItemActive: {
    backgroundColor: theme.colors.primaryLight + '20',
  },
  navText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.textSecondary,
    fontSize: 15,
  },
  navTextActive: {
    color: theme.colors.primary,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.m,
  },
});
