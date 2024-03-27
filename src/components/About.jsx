import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#b4c96a] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-[3.5vw] leading-[4vw] tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech business that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
        </h1>
        <div className='w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#99a85c]'>
            <div className='w-1/2'>
                <h1 className='text-7xl '>Our Approch:</h1>
                <button className='bg-zinc-900  uppercase flex gap-10 items-center px-10 py-6 rounded-full mt-10 text-white'>Read More 
                 <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh] rounded-3xl bg-[#96a75b]'>
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" className='bg-cover bg-center '  alt="" />
            </div>

        </div>
    </div>
  )
}

export default About