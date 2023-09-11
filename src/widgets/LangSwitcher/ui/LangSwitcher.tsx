import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={toggleLanguage}
      theme={ThemeButton.CLEAR}
    >
      {t('toggle language')}
    </Button>
  );
};
