import React from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
	className?: string
}

export const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(cls.navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink className={cls.mainLink} to='/'>главная</AppLink>
				<AppLink to='/about'>о сайте</AppLink>
			</div>
		</div>
	);
};



