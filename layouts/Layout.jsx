import React from 'react'
import Navbar from '@/components/Navbar'
import AboutModal from '@/components/AboutModal'
import MobileMenu from '@/components/MobileMenu'
// import Content from './Content'

function Layout({ children }) {
	return (
		<>
			<AboutModal />
			<div className='container h-screen bg-[rgba(19,18,18,0.6)]'>
				<MobileMenu />
				<Navbar />
				<main className='wrapper-page fixed middle:w-full left-[50%] translate-x-[-50%]'>
					{children}
				</main>
			</div>
		</>
	)
}

export default Layout
