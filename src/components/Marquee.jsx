import React from 'react'
import {motion} from 'framer-motion'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-speed=".05" data-scroll-section className='w-full  py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] '>
        <div className='border-t-2  border-b-2 border-zinc-300 flex text whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat:Infinity,ease:"linear", duration:10} } className='text-[20vw] leading-none font-semibold uppercase pr-10 '>We Are Ochi</motion.h1>
            <motion.h1  initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat:Infinity,ease:"linear", duration:10} }  className='text-[20vw] leading-none font-semibold uppercase'>We Are Ochi</motion.h1>
        </div>

    </div>
  )
}

export default Marquee