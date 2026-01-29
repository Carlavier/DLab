import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageTest() {
  const { t, i18n } = useTranslation();

  const testLanguageSwitch = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'vi' ? 'en' : 'vi';
    console.log('Current language:', currentLang, 'Switching to:', newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div style={{ position: 'fixed', top: '100px', right: '20px', background: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', zIndex: 9999 }}>
      <h4>Language Test</h4>
      <p>Current: {i18n.language}</p>
      <p>Nav About: {t('nav.about')}</p>
      <p>Hero Title: {t('hero.title1')}</p>
      <button onClick={testLanguageSwitch} style={{ padding: '5px 10px', marginTop: '5px' }}>
        Switch Language
      </button>
    </div>
  );
}