import React from 'react'

import { motion } from 'framer-motion'
import { recentWorks } from '../data/recentWorks'

import CardProject from '@/components/CardProject'

function MyProjects() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='section-area'
			id='my-portfolio'
		>
			<div className='page-content'>
				<div className='flex flex-col text-gray-300 my-auto'>
					<div className='m-auto max-w-5xl '>
						<h3 className='flex flex-col items-center uppercase tracking-[10px] text-2xl font-bold pt-24 pb-10 my-auto'>
							My<span className=' text-[#ffe925]'>Projects</span>
						</h3>
						<div className='flex flex-col lg:flex-row gap-7 px-6'>
							{recentWorks.map(project => {
								return <CardProject project={project} key={project.id} />
							})}
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default MyProjects
