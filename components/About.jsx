import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

function About() {
   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='h-screen flex flex-col text-center sm:text-left max-w-7xl px-10 items-center justify-center mx-auto'
         >
            <h3 className="uppercase tracking-[20px] text-gray-300 text-2xl font-bold mb-10 sm:mb-20">
               About Me
            </h3>
            <div className="sm:px-6">
               <div className="space-y-3 text-gray-400 sm:space-y-5 sm:px-5">
                  <h3 className='text-xl sm:text-2xl font-semibold text-[#eec718] uppercase'>A journey through front-end development</h3>
                  <p className="px-3 sm:px-0">
                     Hi, I'm Miguel, and I had been developing websites since 2014 Back then, there was a need for making websites more
                     interactive, plus scalable, and WordPress just achieve that.
                  </p>
                  <p className="px-3 sm:px-0">
                     In that year, I started working as a WordPress Developer, for a local agency called Macroformas.
                     One of primary tasks were, to design web pages using HTML, CSS, and some JavaScript, and built
                     custom themes that were compatible with their CMS. At the same time, I got a job as a Web Developer
                     in a local marketing agency, named OMG National, which I learned how to manage and built eCommerce
                     stores.
                  </p>
                  <p className="px-3 sm:px-0">
                     Recently, I graduated from an intensive coding bootcamp, that teaches the skills to become a Full
                     Stack Developer. Over there, I learned the technologies that makes the backend, and how to connect
                     with the frontend. Right now, I am looking for my first job as a Software Enginner.
                  </p>
               </div>
            </div>
         </motion.div>
      </>
   )
}

export default About
