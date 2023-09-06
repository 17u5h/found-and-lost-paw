import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./lib/className/classNames";



const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>theme switcher</button>
			<Link to='/'>главная</Link>
			<Link to='/about'>о сайте</Link>

			<Suspense fallback={<div>loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageLazy/>}/>
					<Route path={'/'} element={<MainPageLazy/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;