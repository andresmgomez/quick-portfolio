import React from 'react'
import Link from 'next/link'

function CardProject({ project }) {
	return (
		<article>
			<div className='hidden md:block w-full h-1/2 mx-auto'>
				<img
					className='object-cover rounded-md'
					src={project.image}
					alt={project.title}
				/>
			</div>
			<div className='flex flex-col justify-evenly'>
				<div className='flex flex-col-reverse gap-3 lg:flex-row lg:justify-between lg:items-center lg:max-w-md'>
					<Link href={project.url}>
						<h3 className='font-heading text-2xl'>{project.title}</h3>
					</Link>
				</div>
				<p className='py-3 text-md font-semibold text-[#ffe925]'>{project.type}</p>
				<p className='py-5 lg:max-w-md lg:my-4'>{project.description}</p>
				<p className='pb-8'>
					<span className=' text-[#ffe925]'>Stack: </span> {project.stack}
				</p>
			</div>
		</article>
	)
}

export default CardProject
