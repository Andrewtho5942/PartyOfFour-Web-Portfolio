import React from "react";

export default function Video() {

    return (
    <section id="Writeup">   
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
            <div className="w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mx-auto">
                <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-0 mb-4 rounded-xl w-full text-center">
                    <h1 className="title-font text-5xl mb-4 font-bold text-highlight">
                        Presentation Video
                    </h1>
                    
                </div>
                <div className="w-full mx-auto my-5">
                    <iframe 
                    title="yt-video"
                    className = "mx-auto w-full"
                    height="650" 
                    src="https://www.youtube.com/embed/vRdRXr_bXx8?si=QIlncqdn-SpPM1Mx" 
                    allow="fullscreen; web-share" 
                    >
                </iframe>
                </div> 
            </div>
        </div>
    </section>
    );
}