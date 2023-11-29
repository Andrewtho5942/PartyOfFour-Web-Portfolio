import React from "react";

export default function AboutUs() {
    return (
    <section id="AboutUs">   
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
            <div className="lg:w-full md:w-2/3 lg:pr-24 md:pr-16 flex flex-col  md:text-left mb-16 md:mb-0 items-center text-center">
                <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-0 mb-4 rounded-xl w-full text-center">
                    <h1 className="title-font text-5xl mb-4 font-bold text-highlight">
                        About Us
                    </h1>
                </div>
                <div className="grid grid-cols-2 my-5">
                    <div>
                    <img
                className="outline-main rounded-3xl w-1/2 overflow-hidden mx-auto mb-4"
                alt="Andrew"
                src="./Andrew.png"
                />
                <h2 className="dark:bg-gray-800 bg-gray-100 font-bold opacity-70 px-2 text-xl py-2 mb-2 rounded-xl w-1/2 text-center mx-auto dark:text-white text-black">
                    Andrew Thompson
                </h2>  
                <h2 className="dark:bg-gray-800 bg-gray-100 opacity-70 py-4 px-2 pb-0 mb-4 rounded-xl w-full text-center dark:text-white text-black">
                    In this project, my main contribution was the group’s website, 
                    which is used to host a project summary including a synthesis of 
                    our findings, all our visualizations, and information like the team’s 
                    contributions & background. Besides this, however, I also made some visualizations 
                    of my own that show some insights into topics that I found particularly interesting, 
                    as a student at Purdue. 
                    </h2>   
                    </div>
                    
                </div>
                    
            </div>
        </div>
    </section>
    );
}
