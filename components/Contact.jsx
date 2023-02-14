import React from 'react'

import { motion } from 'framer-motion'
import { Linkedin, EnvelopeAtFill, PhoneFill } from 'react-bootstrap-icons'

function Contact() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='section-area'
			id='contact'
		>
			<div className='page-content'>
				<div className='contact-page w-full h-auto clear-both float-left pt-10'>
					<div className='left-title'>
						<h3>
							Let's Talk <span className='text-[#ffe925]'>About</span>
						</h3>
					</div>
					<div className='wrapper w-full h-auto clear-both float-left flex pt-[60px]'>
						<div className='left w-1/2 pr-[50px]'>
							<ul className='m-0 list-none'>
								<li className='mb-[20px] w-full float-left'>
									<div className='list_inner w-full h-auto clear-both float-left relative bg-[#504f4f] rounded-[10px] p-[10px]'>
										<Linkedin
											size={50}
											className='text-[#ffe925] text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]'
										/>
										<span className='text-white inline-block pl-[48px]'>
											@andmiguedev
										</span>
									</div>
								</li>
								<li className='mb-[20px] w-full float-left'>
									<div className='list_inner w-full h-auto clear-both float-left relative bg-[#504f4f] rounded-[10px] p-[10px]'>
										<EnvelopeAtFill
											size={50}
											className='text-[#ffe925] text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]'
										/>
										<span className='inline-block pl-[48px]'>
											<a
												href='mailto:andmiguedev@outlook.com'
												className='text-white transition-all duration-300 hover:text-pink-color'
											>
												andmiguedev@outlook.com
											</a>
										</span>
									</div>
								</li>
								<li className='mb-[20px] w-full float-left'>
									<div className='list_inner w-full h-auto clear-both float-left relative bg-[#504f4f] rounded-[10px] p-[10px]'>
										<PhoneFill
											size={50}
											className='text-[#ffe925] text-[16px] absolute left-[20px] top-1/2 mt-[1px] translate-y-[-50%]'
										/>
										<span className='text-white inline-block pl-[48px]'>
											(954) 512-3728
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div className='right w-1/2 pl-[50px]'>
							<div className='fields w-full h-auto clear-both float-left'>
								<form
									action='/'
									method='post'
									className='contact_form'
									id='contact_form'
								>
									<div data-success='Thank you for sending this message, You will get a response within a few minutes.' />
									<div className='first w-full float-left mb-[20px]'>
										<ul className='ml-[-20px] list-none'>
											<li className='m-0 w-1/2 pl-[20px] float-left'>
												<div className='list_inner w-full h-auto clear-both float-left bg-[#504f4f] rounded-[10px]'>
													<input
														className='w-full h-[45px] bg-transparent border-none text-main-color p-[20px] focus:outline-none'
														id='firstName'
														type='text'
														placeholder='First Name'
														autoComplete='off'
													/>
												</div>
											</li>
											<li className='m-0 w-1/2 pl-[20px] float-left'>
												<div className='list_inner w-full h-auto clear-both float-left bg-[#504f4f] rounded-[10px]'>
													<input
														className='w-full h-[45px] bg-transparent border-none text-main-color p-[20px] focus:outline-none'
														id='LastName'
														type='text'
														placeholder='Last Name'
														autoComplete='off'
													/>
												</div>
											</li>
										</ul>
									</div>
									<div className='first w-full float-left mb-[20px]'>
										<ul className='ml-[-20px] list-none'>
											<li className='m-0 w-full pl-[20px] float-left'>
												<div className='list_inner w-full h-auto clear-both float-left bg-[#504f4f] rounded-[10px]'>
													<input
														className='w-full h-[45px] bg-transparent border-none text-main-color p-[20px] focus:outline-none'
														id='email'
														type='text'
														placeholder='Email Address'
														autoComplete='off'
													/>
												</div>
											</li>
										</ul>
									</div>
									<div className='last w-full float-left bg-[#504f4f] rounded-[10px] mb-[20px]'>
										<textarea
											className='w-full h-[108px] bg-transparent border-none text-main-color resize-none p-[20px] focus:outline-none'
											id='message'
											placeholder='Quick Message'
										/>
									</div>
									<div className='primary-btn'>
										<a id='send_message' href='#'>
											Send Message
										</a>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Contact
