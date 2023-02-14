import { useContext } from 'react'
import Image from 'next/image'

import { navbarMenu } from '../data/navbarMenu'
import { NavigateContext } from '@/store/context/navigateContext'
import { setActivePage } from '@/utils'

function Navbar() {
	const { currentPage, changePage } = useContext(NavigateContext)

	return (
		<header className='navbar-header fixed w-[900px] translate-x-[-50%] left-[50%]'>
			<div className='navbar-top w-full h-auto float-left pt-[40px] flex items-center justify-between'>
				<div className='logo'>
					<a href='#' onClick={() => changePage('home')}>
						<Image
							className='max-w-[100px]'
							src='/assets/img/my-logo.png'
							alt='Coding Logo'
							width={40}
							height={40}
						/>
					</a>
				</div>
				<div className='nav-menu'>
					<ul className='m-0 list-none'>
						{navbarMenu.map(navItem => (
							<li
								className={`mr-[30px] inline-block ${setActivePage(
									navItem.link,
									currentPage,
								)}`}
								key={navItem.link}
							>
								<a
									className='text-white font-medium transition-all duration-300'
									href={`#${navItem.link}`}
									onClick={() => changePage(navItem.link)}
								>
									{navItem.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	)
}

export default Navbar
