import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";

export default function Navbar() {

    return (
        <header className="backdrop-filter backdrop-blur-md bg-opacity-60 bg-black md:sticky top-0 z-10 ">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="title-font font-medium mb-4 md:mb-0">
              
              <a href="#about" className="ml-3 text-xl font-semibold text-highlight">
                CGT270 - Party of Four
              </a>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 text-white md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
              <a href="#process" className="mr-5 hover:text-white">
                Process
              </a>
              <a href="#insights" className="mr-5 hover:text-white">
                Insights
              </a>
              <a href="#conclusion" className="mr-5 hover:text-white">
                Conclusion
              </a>
            </nav>
            <a
              className="inline-flex items-center text-white bg-gray-700 opacity-70 border-0 py-1 px-3 focus:outline-none rounded-3xl text-base mt-4 md:mt-0">
              <ChevronLeftIcon className="w-4 h-4 mr-1 mt-1" />
              Made By Andrew Thompson
              <ChevronRightIcon className="w-4 h-4 ml-1 mt-1" />
            </a>
          </div>
        </header>
    );
}