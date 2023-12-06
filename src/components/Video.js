import React from "react";

export default function Video() {

    return (
    <section id="Writeup">   
        <div className="container mx-auto py-10 flex-col">
                <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-2 mb-4 rounded-xl lg:w-11/12 mx-auto w-full text-center">
                    <h1 className="title-font text-5xl mb-4 font-bold text-highlight">
                        Presentation Video
                    </h1>     
                </div>

                <div className="w-full mx-auto mt-5 mb-24">
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
    </section>
    );
}