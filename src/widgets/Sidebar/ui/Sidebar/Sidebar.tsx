import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
	className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (

    <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button onClick={toggleCollapse}>toggle</Button>
      <div className={classNames(cls.switchers, {}, [className])}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>

  );
};
