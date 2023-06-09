import { useTranslation } from 'react-i18next';
import { useState, useLayoutEffect } from 'react';
import { LanguageSwitchEl, LanguageOption } from './LanguageSwitch.styled';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const changeLanguageT = language => {
    i18n.changeLanguage(language);
  };

  const [checked, setChecked] = useState(true);
  const [lang, setLang] = useState(window.localStorage.getItem('i18nextLng'));

  useLayoutEffect(() => {
    const selectedLang = window.localStorage.getItem('i18nextLng');

    if (selectedLang) {
      setLang(selectedLang);
    }
  }, [lang]);

  const changeOption = ln => {
    setLang(ln);
    setChecked(!checked);
  };

  return (
    <LanguageSwitchEl>
      <LanguageOption
        checked={lang === 'en' ? 'checked' : ''}
        aria-label="EN"
        label="EN"
        type="radio"
        name="language"
        value="en"
        onChange={() => {
          changeLanguageT('en');
          changeOption();
        }}
      ></LanguageOption>
      <LanguageOption
        checked={lang === 'uk' ? 'checked' : ''}
        aria-label="UA"
        label="UA"
        type="radio"
        name="language"
        value="uk"
        onChange={() => {
          changeLanguageT('uk');
          changeOption();
        }}
      ></LanguageOption>
    </LanguageSwitchEl>
  );
};

export default LanguageSwitch;
