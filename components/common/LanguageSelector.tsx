import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { theme } from '@/constants/theme';
import { Globe } from 'lucide-react-native';

type Language = {
  code: string;
  name: string;
  nativeName: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
];

export function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => setModalVisible(true)}
      >
        <Globe size={20} color={theme.colors.primary} />
        <Text style={styles.languageButtonText}>{currentLanguage.nativeName}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('language.selectLanguage')}</Text>
            
            <ScrollView style={styles.languageList}>
              {languages.map((language) => (
                <TouchableOpacity
                  key={language.code}
                  style={[
                    styles.languageOption,
                    i18n.language === language.code && styles.selectedLanguage
                  ]}
                  onPress={() => changeLanguage(language.code)}
                >
                  <Text style={[
                    styles.languageName,
                    i18n.language === language.code && styles.selectedLanguageText
                  ]}>
                    {language.nativeName}
                  </Text>
                  <Text style={styles.languageNativeName}>
                    {language.name !== language.nativeName ? language.name : ''}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>{t('common.back')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primaryLight,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.s,
    borderRadius: theme.borderRadius.m,
    ...theme.shadows.small,
  },
  languageButtonText: {
    ...theme.typography.bodyMedium,
    color: theme.colors.primary,
    marginLeft: theme.spacing.s,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.l,
    ...theme.shadows.medium,
  },
  modalTitle: {
    ...theme.typography.subheading,
    textAlign: 'center',
    marginBottom: theme.spacing.l,
  },
  languageList: {
    maxHeight: 300,
  },
  languageOption: {
    paddingVertical: theme.spacing.m,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  selectedLanguage: {
    backgroundColor: theme.colors.primaryLight,
    borderRadius: theme.borderRadius.s,
    paddingHorizontal: theme.spacing.s,
  },
  languageName: {
    ...theme.typography.bodyMedium,
  },
  selectedLanguageText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  languageNativeName: {
    ...theme.typography.bodySmall,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  closeButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
    alignItems: 'center',
    marginTop: theme.spacing.l,
    ...theme.shadows.small,
  },
  closeButtonText: {
    ...theme.typography.button,
    color: theme.colors.white,
  },
});