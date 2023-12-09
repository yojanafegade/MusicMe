import React from 'react'

const Cards = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>

          <div className="head text-[#9C27B0] font-bold text-5xl text-center" >Features highlights</div>
          <div className='cards flex flex-row gap-16 w-[65%] h-96  mt-16 justify-center items-center flex-wrap '>
      
        <div className='card p-9 h-80 w-[20%] bg-blue-500 rounded-lg flex flex-col gap-7 text-center shadow2 grow' >
                  <div className='cardhead text-xl text-white font-bold text-center'> Artist's Spotlight: Your Time to Shine</div>
                  <div className='cardsubtext text-lg text-white font-medium '>Calling all artists: Break free, showcase your talent, and reach a global audience with MusicMe</div>

            </div>



        <div className='card p-9 h-80 w-[20%] bg-blue-500 rounded-lg flex flex-col gap-7 text-center shadow2 grow' >
                  <div className='cardhead text-xl text-white font-bold text-center'>  Listener's Paradise: Discover Hidden Gems</div>
                  <div className='cardsubtext text-lg text-white font-medium '>Discover endless talent on MusicMe – where every mood finds its perfect beat</div>

              </div>



        <div className='card p-9 h-80 w-[20%] bg-blue-500 rounded-lg flex flex-col gap-7 text-center shadow2 grow' >
                  <div className='cardhead text-xl text-white font-bold text-center'> Playlists for Every Palette</div>
                  <div className='cardsubtext text-lg text-white font-medium '>Curate your own  adventure with personalized playlists. Every playlist tells a story, yours is waiting to be written.</div>

              </div>

          </div>
    </div>
  )
}

export default Cards