import React, {useState} from 'react';
import {classNames} from "shared/lib/classNames";
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";

interface SidebarProps {
	className?: string
}

export const Sidebar = ({className}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false)

	const toggleCollapse = () => {
		setCollapsed(prev => !prev)
	}

	return (

				<div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
					<button onClick={toggleCollapse}>toggle</button>
					<div className={classNames(cls.switchers, {}, [className])}>
						<ThemeSwitcher/>
						<LangSwitcher/>
					</div>
				</div>

	);
};

