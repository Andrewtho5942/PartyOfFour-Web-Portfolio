import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({darkMode, changeTheme}) {

   // Button that enables/disables darkmode across pages.
   const ChangeThemeButton = () => {
       return (
           <button type="button" 
           className = "dark:hover:bg-gray-800 hover:bg-gray-300 rounded-full p-4" 
           onClick={changeTheme}>
               {darkMode === false
                   ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="black" className="w-8 h-8">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                   </svg>
                   : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-8 h-8">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                 </svg>
                 }
           </button>
       )
   }
    return (
        <header className="dark:bg-black bg-white backdrop-filter dark:backdrop-blur-md backdrop-blur-md dark:bg-opacity-40  bg-opacity-40 md:sticky top-0 z-10 ">
          
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <p className="title-font font-medium mb-4 md:mb-0">
              
              <Link to="/" className="ml-3 text-xl font-semibold text-highlight hover:text-highlight-dark">
                CGT270 - Party of Four 
              </Link>
              
            </p>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 dark:text-white text-black md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <Link to="/" className="mr-5 hover:text-highlight">
                Home
              </Link>
              <Link to="/Writeup" className="mr-5 md:border-l md:py-1 md:border-gray-700 md:pl-4  hover:text-highlight">
                Write-up
              </Link>
              <Link to="/Video" className="mr-5 md:border-l md:py-1 md:border-gray-700 md:pl-4  hover:text-highlight">
                Video
              </Link>
              <Link to="/Gallery" className="mr-5 md:border-l md:py-1 md:border-gray-700 md:pl-4  hover:text-highlight">
                Visualization Gallery
              </Link>
              <Link to="/AboutUs" className="mr-5 md:border-l md:py-1 md:border-gray-700 md:pl-4  hover:text-highlight">
                About Us
              </Link>
            </nav>

            <ChangeThemeButton className="text-3xl" />
            <p
              className="inline-flex items-center dark:text-white text-black dark:bg-gray-700 bg-gray-300 opacity-70 border-0 py-1 px-3 focus:outline-none rounded-3xl text-base mt-4 ml-10 md:mt-0">
              <ChevronLeftIcon className="w-4 h-4 mr-1 mt-1" />
              Made By Andrew Thompson
              <ChevronRightIcon className="w-4 h-4 ml-1 mt-1" />
            </p>
          </div>
        </header>
    );
  
}

/*



     
*/