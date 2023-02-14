import Link from 'next/link'

import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

import AnimateText from '@/components/AnimateText'

function Hero() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='section-area'
			id='home'
		>
			<div className='page-content'>
				<div className='animated-hero text-center pt-20'>
					<div className='hero-content'>
						<motion.h4
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1 }}
							className='uppercase text-center font-bold text-1xl tracking-[0.3rem] text-gray-300 positions'
						>
							<AnimateText />
						</motion.h4>
						<h1 className=' text-white text-[60px] font-bold uppercase mb-[20px]'>
							Miguel <span className=' text-[#ffe925]'>Gomez</span>
						</h1>
						<h3 className='px-4 text-[16px] text-gray-400 font-thin'>
							My goal is to build applications that are appealing, easy to use, and can
							scale.
						</h3>
						<div className='hidden md:inline-block cta-buttons py-5'>
							<Link className='bold-btn' href=''>
								Download CV
							</Link>
							<Link className='outline-btn' href='#my-projects'>
								<SocialIcon
									url='https://github.com/andresmgomez'
									fgColor='#eec718'
									bgColor='transparent'
								/>
								Recent Works
							</Link>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Hero
