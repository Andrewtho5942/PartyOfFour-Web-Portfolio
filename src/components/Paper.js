import React from "react";

export default function Paper() {
    return (
    <section id="Paper">   
        <div className="container mx-auto flex px-10 py-10 flex-col">
            <div className="w-full flex flex-col mb-16 text-center lg:w-3/4 mx-auto">
                <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-0 mb-4 rounded-xl w-full text-center">
                    <h1 className="title-font text-5xl mb-4 font-bold text-highlight">
                        Final Group Report Paper
                    </h1>
                </div>
                
                <iframe 
                title = "CGT270 - Final Report Paper"
                src="https://drive.google.com/file/d/1GDshfAGJQEzo0yqq7hfJPMNHHFqWM2qg/preview#view=fith" 
                width="100%" height="800"/>
            </div>
        </div>
    </section>
    );
}
