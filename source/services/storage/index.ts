import AsyncStorage from '@react-native-community/async-storage';
// user storage const
export const KEY = {
  AUTHENTICATION: '@DEVBROS:isLogged',
  TOKEN: '@DEVBROS:token',
  LANGUAGE_TAG: '@DEVBROS:languageTag',
  CURRENCY_TAG: '@DEVBROS:currencyTag',
};

// Setters
export const setLogged = (auth: boolean): object => AsyncStorage.setItem(KEY.AUTHENTICATION, JSON.stringify(`${auth}`));

export const setToken = (token: string): object => AsyncStorage.setItem(KEY.TOKEN, JSON.stringify(`${token}`));

export const setLanguageTag = async (languageTag: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(KEY.LANGUAGE_TAG, languageTag);
  } catch (error) {
    // Error saving data
    console.warn(`Error save ${KEY.LANGUAGE_TAG} in storage`);
  }
};

export const setCurrencyTag = async (currencyTag: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(KEY.CURRENCY_TAG, currencyTag);
  } catch (error) {
    // Error saving data
    console.warn(`Error save ${KEY.CURRENCY_TAG} in storage`);
  }
};

// Getters
export const isLogged = async (): Promise<boolean> => {
  const isAuthenticated = await AsyncStorage.getItem(KEY.AUTHENTICATION);
  return isAuthenticated !== undefined;
};

export const getToken = async (): Promise<string | null> => await AsyncStorage.getItem(KEY.TOKEN);

export const getLanguageTag = async (): Promise<string | null | undefined | void | boolean> => {
  try {
    const value = await AsyncStorage.getItem(KEY.LANGUAGE_TAG);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // Error retrieving data
    return false;
  }
};
export const getCurrencyTag = async (): Promise<string | null | undefined | void | boolean> => {
  try {
    const value = await AsyncStorage.getItem(KEY.CURRENCY_TAG);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    // Error retrieving data
    return false;
  }
};

// Clear localStorage
export const logoutApp = (): void => {
  AsyncStorage.clear();
};
