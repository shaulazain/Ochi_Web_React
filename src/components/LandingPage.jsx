import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from 'framer-motion'


const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-speed='-.3' className=' w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20 '>
            {["we created", " eye opening", " presentations"].map((item, index)=>{
                return (<div className='masker '>
                    <div className='w-fit flex items-center '>
                        {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className='w-[7.5vw] h-[5vw] rounded-md relative bg-green-500 -bottom-[.4vw]'>
                        </motion.div>)}
                <h1 className=' flex items-center uppercase  text-[7.5vw]   leading-[7vw] h-full tracking-tighter font-semibold '> {item}</h1>
                    </div>

            </div>)
            })}

           </div>

        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20  font-semibold '>
            {['For public and private companies', "From the first pitch to IPO"].map((item, index)=> <p className='font-semibold text-md tracking-tighter leading-none'>{item}</p>)}

               <div className='start flex items-center gap-5'>
                  <div className='px-5 py-2 border-[1px] border-zinc-500 rounded-full text-sm uppercase font-semibold  '>Start the project</div>
                  <div className='w-10 h-10 flex items-center justify-center rounded-full  border-[2px] border-zinc-500'>
                    <span className='rotate-[40deg]'> 
                    <FaArrowUpLong />

                    </span>
                    </div>
              </div>
        </div>

        
    </div>
  )
}

export default LandingPage