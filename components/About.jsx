import { useContext } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { NavigateContext } from '@/store/context/navigateContext'

function About() {
	const { openPopupPage } = useContext(NavigateContext)

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='section-area'
			id='about-me'
		>
			<div className='page-content'>
				<div className='about-me w-full flex mt-7'>
					<div className='left w-[40%]'>
						<div className='image relative'>
							<Image
								className='h-[420px] w-[310px] rounded-[10px]'
								src='/assets/img/my-portrait.jpg'
								alt=''
								width={310}
								height={430}
							/>
						</div>
					</div>
					<div className='right w-[60%] pl-[100px]'>
						<div className='short w-full border-dashed border-[rgba(255,255,255,.15)] border-b mt-2'>
							<h3 className='name uppercase text-[40px] font-bold'>
								About <span className=' text-[#ffe925]'>Me</span>
							</h3>
						</div>
						<div className='float-left mb-[36px] w-[410px]'>
							<div className='space-y-3 text-gray-400'>
								<p>
									Hello, I'm Miguel and I have been developing websites, since 2014. From
									blogging and personal websites, to online stores hosted in WordPress, I
									started to design static pages, and then converted into custom themes.
								</p>
								<p>
									Also, I have some experience designing web templates, and customizing
									it to release landing pages, for small business. Mostly, I have worked
									with start ups that are looking to reach an audience in Latin America.
								</p>
							</div>
						</div>
						<div className='primary-btn'>
							<a href='#'>Read More</a>
							{/* <a href='#' onClick={() => openPopupPage()}>
								Read More
							</a> */}
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default About
