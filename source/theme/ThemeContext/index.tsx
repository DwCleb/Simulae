import React, { createContext, useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Colors, ThemeType } from '~/theme';

interface Props {
  children: React.ReactNode;
}

export interface ThemeContextType {
  theme: ThemeType;
}

const INITIAL_THEME_CONTEXT: ThemeContextType = {
  theme: Colors.theme,
};

const ThemeContext = createContext<ThemeContextType>(INITIAL_THEME_CONTEXT);

export const useTheme = (): ThemeContextType => useContext<ThemeContextType>(ThemeContext);

const ManageThemeProvider = ({ children }: Props): JSX.Element => {
  const { theme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <StatusBar barStyle={theme.barStyle} backgroundColor={theme.background.light.primary} />
          {children}
        </React.Fragment>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeManager = ({ children }: Props): JSX.Element => <ManageThemeProvider>{children}</ManageThemeProvider>;

export default ThemeManager;
