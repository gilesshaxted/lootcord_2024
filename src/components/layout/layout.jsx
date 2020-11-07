// import global css
import '../../styles/main.scss'

// prismjs code styling
import 'prismjs/themes/prism.css'

import React from 'react'
import ThemeContext from '../../context/ThemeContext'

import useTheme from '../useTheme'
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './layout.module.scss'

function Layout({ children }) {
	const [theme, setTheme, transitionsEnabled] = useTheme()

	return (
		<div className={`${styles.contentFull} ${transitionsEnabled ? '' : 'noTransitions'}`}>
			<ThemeContext.Provider value={[theme, setTheme, transitionsEnabled]}>
				<Header />
				<section className={`section ${styles.contentBody}`}>
					<div className='container'>
						{children}
					</div>
				</section>
				<Footer />
			</ThemeContext.Provider>
		</div>
	)
}

export default Layout
