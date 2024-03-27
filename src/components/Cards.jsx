import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-10 gap-5 '>
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className="card relative rounded-xl w-full h-full flex items-center justify-center bg-[#004D43]">
               <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" className='w-32' alt="" />
               <button className='absolute left-10 bottom-10 text-[#b4c96a] border border-green-400 px-4 py-1 rounded-full'>&copy;2019-2022</button>
            </div>
        </div>

        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
            <div className="card relative rounded-xl w-1/2 h-full flex justify-center items-center bg-[#212121]"> 
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute left-10 bottom-10  border px-4 py-1 rounded-full'>Rating 5.0 on Clutch</button>
            </div>
            <div className="card relative w-1/2 rounded-xl h-full flex justify-center items-center bg-[#212121]">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" className='w-28' alt="" />
                <button className='absolute left-10 bottom-10  border px-4 py-1 rounded-full'>Business Bootcamp Alumni</button>
                 </div>

        </div>
    </div>
  )
}

export default Cards