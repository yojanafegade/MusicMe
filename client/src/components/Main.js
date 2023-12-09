import React from 'react'
import prop2 from '../images/prop2.png'
import logo from '../images/MusicMeLogo.png'
import songimg from '../images/songimg2.png'
import Navbar from './Navbar'
import Mainsectoin1 from './Mainsectoin1'
import prop3 from '../images/prop3.png'
import prop4 from '../images/prop4.png'
import Login from './Login'
import Cards from './Cards'
import dots from '../images/dots.png'
import plus from '../images/plus.png'
import zigzags from '../images/zigzags.png'
import circle from '../images/circle.png'
import cube from '../images/cube.png'
import { useRef } from 'react'


const Main = () => {



  //logic to scroll 
  const features = useRef(null);
  const about = useRef(null);
  const login = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };




  return (
   <div>


      

      <div className='main1 gradient'>
        <img src={prop2} alt="background image" />
        <div className='absolute top-0 w-full'>
        <Navbar 
          scrollToSection={scrollToSection}
          loginRef={login}
          featuresRef={features}
          aboutRef={about}
        />
          </div>
        <div><Mainsectoin1></Mainsectoin1></div>
          
        <div className='animators'>
          {/* <div class="absolute icons icon-dots">
            <img src={dots} alt="" />
          </div>
          <div class="absolute icons icon-cube">
            <img src={cube} alt="" />
          </div>
          <div class="absolute icons icon-plus">
            <img src={plus} alt="" />
          </div> */}
          <div class="absolute icons icon-zigzag">
            <img src={zigzags} alt="" />
          </div>
          {/* <div class="absolute icons icon-circle">
            <img src={circle} alt="" />
          </div> */}
        </div>


        <div className='maincounter w-full  h-56 absolute top-[768px] '>

          <div className='mx-auto h-48 w-10/12  flex flex-row justify-center gap-10 items-center '>
            <div className='h-full w-1/4  flex flex-col gap-2 justify-center items-center shadow cursor '>

                <div className='text-[#9C27B0] font-bold text-6xl'>Lifetime</div>
                <div className='text-3xl font-semibold text-gray-500'>Free</div>
              </div>

            <div className='h-full w-1/4  flex flex-col gap-2 justify-center items-center shadow cursor'>
              <div className='text-[#9C27B0] font-bold text-6xl'>1K+</div>
              <div className='text-3xl font-semibold text-gray-500'>Active Users</div>    
            </div>


            <div className='h-full w-1/4  flex flex-col gap-2 justify-center items-center shadow cursor'>
              <div className='text-[#9C27B0] font-bold text-6xl'>50+</div>
              <div className='text-3xl font-semibold text-gray-500'>Singers</div>
            </div>
    

          </div>
        </div> 
      </div>



      

  


      <div className='main3login realtive '>
        <img  className='opacity-10' src={songimg} alt="song illustartions absolute" />

        <div ref={login} className='absolute top-[995px] left-1/4 animatedimg'>  <Login></Login></div>
      

      </div>

     
     <div className='flex flex-col space-y-[500px]'>
        <div className='main3 w-full h-[800px] mt-0'>
          <img className='w-full h-full' src={prop3} alt="bgImage3" />
          <div ref={features} className='relative top-[-840px]'><Cards></Cards></div>
        </div>

        <div ref={about} className='main4 w-full h-[700px] mt-0 absolute mb-0 '>
          <img className='w-full h-full' src={prop4} alt="bgImage4" />
          <div className='flex3 flex flex-col  h-[70%] w-[75%]  absolute element p-5 pt-1 text-white justify-center items-center gap-7'>

            <div className='font-bold text-4xl mb-16'>About Us</div>
            <div className='font-medium text-lg text-center mb-8'>Unleash the power of music with MusicMe, where creativity knows no bounds. We're more than just a music player; we're a global stage for emerging artists, a haven for music enthusiasts, and a vibrant community that celebrates the universal language of melodies. Join us in shaping the future of music discovery and expression.</div>
            <div className='flex flex-row gap-3 '>
             <div><img className='h-24' src={logo} alt="MusicMelogo" /></div>
             <div className='pt-10 font-bold'>Made With ❤️ By Yojana</div> 
            </div>

          </div>
        </div>



     </div>

     
      


    

             
          
       
        
   </div>
       
  )
}

export default Main

