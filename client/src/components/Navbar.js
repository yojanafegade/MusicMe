import React from 'react'
import logo from '../images/MusicMeLogo.png'


const Navbar = ({ scrollToSection, loginRef, featuresRef, aboutRef }) => {
  return (
    <div>
        
          <nav class="border-gray-200 text-lg font-bold text-white">
              <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                  <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                      <img src={logo} class="w-52" alt="MusicMe Logo" />
                  </a>
                  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                      <button type="button" onClick={() => scrollToSection(loginRef)} class="text-white bg-purple-950 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg px-4 py-2 text-center dark:bg-purple-950  dark:hover:bg-indigo-600 dark:focus:ring-blue-800">Login</button>
                      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                          <span class="sr-only">Open main menu</span>
                          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                          </svg>
                      </button>
                  </div>
                  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 absolute right-60" id="navbar-cta">
                      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                          <li onClick={() => scrollToSection(featuresRef)}>
                              <a href="#" class="block py-2 px-3 md:p-0 text-white  rounded md:bg-transparent md:text-white md:dark:text-white font-bold" aria-current="page">Features</a>
                          </li>
                          <li onClick={() => scrollToSection(aboutRef)}>
                              <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold">About</a>
                          </li>
                          
                      </ul>
                  </div>
              </div>
          </nav>

    </div>
  )
}

export default Navbar
