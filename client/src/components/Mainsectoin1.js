import React from 'react'
import img1 from '../images/entry_image1.png'

const Mainsectoin1 = () => {
  return (
    <div>
        <div className='mainflex flex flex-row gap-2 h-96 absolute top-28 w-full '>
            <div className='textflex w-1/2 h-full  ml-14 mt-7'>
               
               <div className='musictext text-8xl text-white font-bold pl-24 '>MusicMe</div>
                  <div className='subtext text-4xl text-white font-bold pl-24 mt-2'>Where Every Note Finds a Home!</div>
                  <div className='subsubtext text-2xl text-white font-medium pl-24 mt-16'>Whether you're a seasoned artist or a rising star on Instagram and YouTube, MusicMe opens its arms to your unique sounds. This isn't just a music player; it's your stage to share, connect, and be heard.</div>

            </div>
              <div className='imageflex w-1/2 h-full ml-2'><img className='w-full' src={img1} alt="" /></div>
        </div>
    </div>
  )
}

export default Mainsectoin1