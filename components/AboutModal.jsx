import { NavigateContext } from '@/store/context/navigateContext'

import { useContext } from 'react'
import Image from 'next/image'
import Modal from './common/Modal'

function AboutModal() {
	const { popupPage, openPopupPage } = useContext(NavigateContext)

	return (
		<Modal openModal={popupPage} closeModal={openPopupPage}>
			<div className='about_popup_details w-full h-full clear-both float-left relative'>
				<div className='left fixed w-[40%] left-0 top-0 bottom-0 border-dashed border-[rgba(255,255,255,.1)] border-r z-[5]'>
					<div className='left_inner w-full h-auto clear-both float-left relative px-[40px] py-[50px]'>
						<div className='author w-full float-left mb-[35px] text-center overflow-hidden'>
							<div className='avatar_image relative mt-0 mx-auto mb-[25px] max-w-[50%]'>
								<Image
									className='relative min-w-full'
									src='/assets/img/my-portrait.jpg'
									alt=''
									width={100}
									height={100}
								/>
							</div>
							<div className='short w-full float-left'>
								<h3 className='name text-[22px] uppercase mb-[7px]'>
									Miguel <span className='text-[#ffe925]'>Gomez</span>
								</h3>
							</div>
						</div>
						<div className='list w-full float-left mb-[35px]'>
							<ul className='m-0 list-none'>
								<li className='w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]'>
									<div className='list_inner m-0 w-full float-left relative'>
										<i className='icon-user text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]' />
										<span className='pl-[37px]'>Miguel Gomez</span>
									</div>
								</li>
								<li className='w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]'>
									<div className='list_inner m-0 w-full float-left relative'>
										<i className='icon-calendar text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]' />
										<span className='pl-[37px]'>10.09.1990</span>
									</div>
								</li>
								<li className='w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]'>
									<div className='list_inner m-0 w-full float-left relative'>
										<i className='icon-location text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]' />
										<span className='pl-[37px]'>
											<a
												href='#'
												className='href_location no-underline text-white-color transition-all duration-300 hover:text-pink-color'
											>
												Avon str. 22, NYC, USA
											</a>
										</span>
									</div>
								</li>
								<li className='w-full float-left border-dashed border-[rgba(255,255,255,.15)] border-b pb-[7px] mb-[7px]'>
									<div className='list_inner m-0 w-full float-left relative'>
										<i className='icon-phone text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]' />
										<span className='pl-[37px]'>
											<a
												className='no-underline text-white-color transition-all duration-300 hover:text-pink-color'
												href='#'
											>
												+77 022 155 02 02
											</a>
										</span>
									</div>
								</li>
								<li className='w-full float-left'>
									<div className='list_inner m-0 w-full float-left relative'>
										<i className='icon-mail-1 text-pink-color text-[16px] absolute left-0 top-1/2 translate-y-[-50%]' />
										<span className='pl-[37px]'>
											<a
												className='no-underline text-white-color transition-all duration-300 hover:text-pink-color'
												href='mailto:example@gmail.com'
											>
												example@gmail.com
											</a>
										</span>
									</div>
								</li>
							</ul>
						</div>
						<div className='edrea_tm_button full'>
							<a href='assets/img/about/1.jpg' download=''>
								Download CV
							</a>
						</div>
					</div>
				</div>
				<div className='right w-full absolute pl-[40%] top-0 right-0 bottom-0'>
					<div className='right_inner w-full h-auto clear-both float-left relative px-[40px] py-[50px]'>
						<div className='biography w-full float-left mb-[55px]'>
							<div className='about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]'>
								<h3 className='text-[18px] font-semibold'>
									<span className='text-white-color'>
										More <span className='text-[#ffe925]'>About</span>
									</span>
								</h3>
							</div>
							<div className='text mt-[29px] float-left'>
								<p>
									Hello everybody! My name is <span>David Parker.</span> I am a graphic
									designer, and I'm very passionate and dedicated to my work. With 20
									years experience as a professional a graphic designer, I have acquired
									the skills and knowledge.
								</p>
							</div>
						</div>
						<div className='service w-full float-left mb-[55px]'>
							<div className='about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]'>
								<h3 className='text-[18px] font-semibold'>
									<span className='text-white-color'>
										Quality <span className='text-pink-color'>Services</span>
									</span>
								</h3>
							</div>
							<div className='list w-full h-auto clear-both float-left mt-[20px]'>
								<ul className='m-0 list-none'>
									<li className='mb-[8px] w-full float-left relative pl-[25px]'>
										<i className='icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]' />
										Website Development
									</li>
									<li className='mb-[8px] w-full float-left relative pl-[25px]'>
										<i className='icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]' />
										Digital Experience
									</li>
									<li className='mb-[8px] w-full float-left relative pl-[25px]'>
										<i className='icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]' />
										Content Marketing
									</li>
									<li className='mb-[8px] w-full float-left relative pl-[25px]'>
										<i className='icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]' />
										Social Media Marketing
									</li>
									<li className='w-full float-left relative pl-[25px]'>
										<i className='icon-right-dir absolute left-[-7px] top-1/2 translate-y-[-50%] text-pink-color text-[16px] mt-[1px]' />
										Shared Web Hosting
									</li>
								</ul>
							</div>
						</div>
						<div className='prog_skill w-full float-left mb-[62px]'>
							<div className='about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]'>
								<h3 className='text-[18px] font-semibold'>
									<span className='text-white-color'>
										Programming <span className='text-pink-color'>Skills</span>
									</span>
								</h3>
							</div>
							<div className='oki_progress'>
								<div className='progress_inner' data-value={95}>
									<span>
										<span className='label'>WordPress</span>
										<span className='number'>95%</span>
									</span>
									<div className='background'>
										<div className='bar open'>
											<div className='bar_in' style={{ width: '95%' }} />
										</div>
									</div>
								</div>
								<div className='progress_inner' data-value={80}>
									<span>
										<span className='label'>JavaScript</span>
										<span className='number'>80%</span>
									</span>
									<div className='background'>
										<div className='bar open'>
											<div className='bar_in' style={{ width: '80%' }} />
										</div>
									</div>
								</div>
								<div className='progress_inner' data-value={90}>
									<span>
										<span className='label'>Angular</span>
										<span className='number'>90%</span>
									</span>
									<div className='background'>
										<div className='bar open'>
											<div className='bar_in' style={{ width: '90%' }} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='lang_skill w-full float-left mb-[34px]'>
							<div className='about_title w-full float-left relative overflow-hidden border-dashed border-[rgba(255,255,255,.15)] border-b pb-[15px]'>
								<h3 className='text-[18px] font-semibold'>
									<span className='text-white-color'>
										Language <span className='text-pink-color'>Skills</span>
									</span>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}

export default AboutModal
