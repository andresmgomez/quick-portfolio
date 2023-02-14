import { useState, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { NavigateContext } from '@/store/context/navigateContext'
import { navbarMenu } from '@/data/navbarMenu'
import { setActivePage } from '@/utils'

function MobileMenu() {
	const [toggleMenu, setToggleMenu] = useState(false)
	const { currentPage, changePage } = useContext(NavigateContext)

	const openMobileLink = mobileLink => {
		setToggleMenu(mobileLink)
		changePage(mobileLink)
	}

	return (
		<>
			<div className='navbar-mobile fixed top-0 left-0 right-0 h-[50px] bg-black z-[10] lg:hidden'>
				<div className='mobile-menu w-full h-full clear-both flex items-center justify-between pb-0 pt-[0px] px-[20px]'>
					<Link href='#home'>
						<Image
							className='max-w-[140px] max-h-[40px]'
							src='/assets/img/my-logo.png'
							alt='Mobile Logo'
							width={40}
							height={40}
						/>
					</Link>
				</div>
				<div className='toggle-icon'>
					<div
						className={`hamburger hamburger--slider ${toggleMenu ? 'is-active' : ''}`}
					>
						<div className='hamburger-box' onClick={() => setToggleMenu(!toggleMenu)}>
							<div className='hamburger-inner' />
						</div>
					</div>
				</div>
			</div>
			<div
				className={`mobile-nav fixed top-[50px] right-[-200px] h-[100vh] w-[200px] z-[15] bg-black transition-all duration-300 ${
					toggleMenu ? 'opened' : ''
				}`}
			>
				<div className='relative w-full h-full text-right px-[20px] pt-[50px] pb-[20px]'>
					<div className='w-full h-auto clear-both float-left'>
						<ul className='m-0 list-none'>
							{navbarMenu.map(navItem => (
								<li
									className={`mr-[70px] ${setActivePage(navItem.link, currentPage)}`}
									key={navItem.link}
								>
									<Link
										href={`#${navItem.link}`}
										className='text-white'
										onClick={() => openMobileLink(navItem.link)}
									>
										{navItem.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default MobileMenu
