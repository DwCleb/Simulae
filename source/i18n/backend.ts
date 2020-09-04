import AsyncStorage from '@react-native-community/async-storage';

import config from '~/configs';
import { BackendModule } from 'i18next';

export const AsyncBackend: BackendModule = {
  type: 'backend',
  // eslint-disable-next-line
  init: () => {},
  // eslint-disable-next-line
  create: () => {},
  //@ts-ignore
  read: async function (language: string, namespace: string, callback: any) {
    let asyncStoreTranslations = null;
    const asyncStoreTranslationsRequest = await AsyncStorage.getItem(`stored_${language}_translation`);
    asyncStoreTranslations = asyncStoreTranslationsRequest && JSON.parse(asyncStoreTranslationsRequest);
    //FIXME: Might need a timeout or a loading, request can be "alive" for quite some time before it throws an error
    try {
      const translationRequest = await fetch(
        `${config.i18n.url}/${language}.json?${config.i18n[`token${language.toUpperCase()}`]}`,
        {
          method: 'get',
        }
      );

      console.log(translationRequest);
      if (translationRequest.ok) {
        const translations = await translationRequest.json();
        if (!asyncStoreTranslations || asyncStoreTranslations !== translations) {
          AsyncStorage.setItem(`stored_${language}_translation`, JSON.stringify(translations));
        }

        callback(null, translations);
      } else {
        callback(null, asyncStoreTranslations);
      }
    } catch {
      callback(null, asyncStoreTranslations);
    }
  },
};
