import React, { useState, Fragment, useEffect } from 'react';
import { Linking } from 'react-native';
import { ExpandedHeader, SectionButton } from '~/components';
import { Container } from './styles';
import { useTranslation } from 'react-i18next';
import { setLanguageTag, setCurrencyTag, getCurrencyTag } from '~/services/storage';

import Language from './Language';
import About from './About';

export default function Settings(): JSX.Element {
  const { t, i18n } = useTranslation();

  const [activePage, setActivePage] = useState('');

  const [currency, setCurrency] = useState('');

  useEffect(() => {
    const getCurrency = async () => {
      const value = await getCurrencyTag();
      if (value !== null) {
        // We have data!!
        setCurrency(value);
      }
    };
    getCurrency();
  }, []);

  const setLanguageTagByState = (languageValue: string): void => {
    setLanguageTag(languageValue);
    i18n.changeLanguage(languageValue);
  };

  const setCurrencyTagByState = (currencyValue: string): void => {
    setCurrency(currencyValue);
    setCurrencyTag(currencyValue);
  };

  function setActive(page: string): void {
    setActivePage(page);
  }

  function renderActivePage(): JSX.Element {
    switch (activePage) {
      case 'Language':
        return <Language onSelect={setLanguageTagByState} selected={i18n.language} />;
      case 'About':
        return <About />;

      default:
        return <Fragment />;
    }
  }

  // console.log(i18n);

  return (
    <Container>
      <ExpandedHeader
        title={t('settings')}
        subtitle={
          activePage !== ''
            ? t(
                activePage.toLowerCase().split(' ').length > 1
                  ? (
                      activePage.toLowerCase().split(' ')[0] +
                      activePage.toLowerCase().split(' ')[1].charAt(0).toUpperCase() +
                      activePage.toLowerCase().split(' ')[1].slice(1)
                    )?.replace(/ /g, '')
                  : activePage.toLowerCase()?.replace(/ /g, '')
              )
            : false
        }
        activeBack={activePage !== ''}
        actionBack={(): void => setActivePage('')}
      />
      {activePage === '' ? (
        <Fragment>
          <SectionButton
            title={t('language')}
            value={i18n.language.toUpperCase()}
            onPress={(): void => setActive('Language')}
          />

          <SectionButton
            title={t('privacyPolicy')}
            onPress={(): Promise<void> => Linking.openURL('https://reactnative.dev/docs/linking')}
          />
          <SectionButton
            title={t('termsOfUse')}
            onPress={(): Promise<void> => Linking.openURL('https://reactnative.dev/docs/linking')}
          />
          <SectionButton title={t('about')} onPress={(): void => setActive('About')} />
        </Fragment>
      ) : (
        renderActivePage()
      )}
    </Container>
  );
}
