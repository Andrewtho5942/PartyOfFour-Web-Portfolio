import React from "react";

export default function Video() {

    return (
    <section id="Writeup">   
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:w-full md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-0 mb-4 rounded-xl w-full text-center">
                    <h1 className="title-font text-5xl mb-4 font-bold text-highlight">
                        Video
                    </h1>
                    
                </div>
                <div className="lg:w-full mx-auto my-5">
                <iframe 
                className = "mx-auto w-full"
                height="650" 
                src="https://www.youtube.com/embed/o-YBDTqX_ZU?si=YwE1QCtmpmw9c7Qy" 
                frameborder="0" 
                allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                >
                </iframe>
                </div> 
            </div>
        </div>
    </section>
    );
}