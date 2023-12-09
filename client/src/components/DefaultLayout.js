import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function DefaultLayout({children}) {
 const {user} = useSelector(state => state.user)
 const navigate = useNavigate()
  return (
     <div className="main mainlogin">
          <div className="header flex justify-between p-5  items-center bg-[#401552]">
             <h1 className='text-3xl ml-7 font-bold cursor-pointer' onClick={()=>{
                    navigate('/')
             }}><b className='text-violet-400'>Music</b> <b className='text-violet-200'>Me</b></h1>
             <div className='flex items-center gap-2'>
                <h1 className='text-xl text-white'>{user?.name.toUpperCase()}</h1>
                <i className="ri-logout-circle-r-line text-white text-xl cursor-pointer" onClick={()=>{
                    localStorage.removeItem('token')
                    window.location.reload()
                }}></i>
             </div>
         </div>
         <div className="content m-10">
             {children}
         </div>
     </div>
  )
}

export default DefaultLayout