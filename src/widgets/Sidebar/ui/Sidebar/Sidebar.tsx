import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (

    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={toggleCollapse}
        className={cls.collapsedBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.items}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.main}
          className={cls.item}
        >
          <HomeIcon className={cls.icon} />
          <span className={cls.link}>
            {!collapsed && t('main page')}
          </span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          className={cls.item}
          to={RoutePath.about}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.link}>
            {t('about')}
          </span>
        </AppLink>
      </div>

      <div className={classNames(cls.switchers, {}, [className])}>
        <ThemeSwitcher />
        <LangSwitcher
          short={collapsed}
        />
      </div>
    </div>

  );
};
