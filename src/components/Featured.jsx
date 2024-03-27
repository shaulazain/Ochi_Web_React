import React from 'react'
import { motion, useAnimation} from "framer-motion"

const Featured = () => {
  const cards = [useAnimation(), useAnimation()]
  const handelHover =(index)=>{
    cards [index].start({y: "0"})

  }

  const handelHoverEnd =(index)=>{
    cards [index].start({y: "100%"})

  }
 

 

  return (
    <div className='w-full py-20 bg-zinc-900 '>
        <div className='px-20 w-full tracking-tighter border-b-[1px] border-zinc-700 pb-20 '>
            <h1 className='text-7xl  '>Featured projects</h1> 
        </div>

    <div className='px-20'>

        <div className="cards w-full flex gap-10 mt-10  ">

            <motion.div  onHoverStart={()=>handelHover(0)} onHoverEnd={()=>handelHoverEnd(0)} className="cardcontainer  w-1/2 h-[75vh]  relative">
                <h1 className='text-8xl  absolute flex tracking-tighter right-0  overflow-hidden top-1/2 text-[#b4c96a] -translate-y-1/2 z-[9] translate-x-1/2'>
                     
                     {"FYDE".split('').map((item, index)=><motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease :[], delay: index*.05}} className='inline-block '>{item}</motion.span>)}
                     </h1>
               <div className=" card w-full h-full  rounded-xl overflow-hidden">
               <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" className='bg-cover bg-center w-full h-full' alt="" />


               </div>
            </motion.div>

            <motion.div  onHoverStart={()=>handelHover(1)} onHoverEnd={()=>handelHoverEnd(1)} className="cardcontainer relative w-1/2   h-[75vh]  ">

                     <div className=" card w-full h-full   rounded-xl overflow-hidden">
                     <h1 className='text-8xl flex overflow-hidden absolute tracking-tighter right-full top-1/2 text-[#b4c96a] -translate-y-1/2 z-[9] translate-x-1/2'>
                     
                     {"VISE".split('').map((item, index)=><motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease :[], delay: index*.05}} className='inline-block'>{item}</motion.span>)}
                     </h1>

                        <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" className='bg-cover bg-center w-full h-full' alt="" />

                      </div>

            </motion.div>

            

        </div>

    </div>


    </div>
  )
}

export default Featured