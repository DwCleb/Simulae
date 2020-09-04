import i18n, { LanguageDetectorAsyncModule } from 'i18next';

import { initReactI18next } from 'react-i18next';
import * as Localize from 'react-native-localize';

import AsyncStorage from '@react-native-community/async-storage';
import { KEY } from '~/services/storage';
import { AsyncBackend } from './backend';

const availableLanguage = Localize.findBestAvailableLanguage(['en', 'pt']);
const languageTag = availableLanguage ? availableLanguage.languageTag : 'en';

const languageDetector: LanguageDetectorAsyncModule = {
  // eslint-disable-next-line
  init: () => {},
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async (callback: (language: string) => void): Promise<void> => {
    const hasSavedLanguageTag = await AsyncStorage.getItem(KEY.LANGUAGE_TAG);
    const savedLanguageTag = hasSavedLanguageTag ? hasSavedLanguageTag : null;
    const selectLanguage = savedLanguageTag || languageTag;
    AsyncStorage.setItem(KEY.LANGUAGE_TAG, selectLanguage);
    callback(selectLanguage);
  },
  // eslint-disable-next-line
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .use(AsyncBackend)
  .init({
    //@ts-ignore
    fallbackLng: languageTag,
    preload: [true, true],
    nonExplicitSupportedLngs: true,
    whitelist: ['en', 'pt'],
    react: {
      useSuspense: false,
      wait: true,
    },
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    },
  });

export default i18n;
