import React from "react";

export default function Gallery() {

    return (
    <section id="Gallery">   
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:w-full md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-0 mb-4 rounded-xl w-full text-center">
                    <h1 className="title-font text-5xl mb-4 font-bold text-highlight">
                        Gallery
                    </h1>
                    
                </div>
                <div className="lg:w-1/2 mx-auto my-5">
                    <img
                className="outline-main rounded-3xl bg-blend-soft-light"
                alt="visualization"
                src="./visualization_example.png"
                />
                </div>
                
                    <h2 className="dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-0 mb-4 rounded-xl w-full text-center dark:text-white text-black">
                        placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
                        placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
                        placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
                        placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
                        placeholder placeholder placeholder placeholder placeholder placeholder placeholder placeholder 
                    </h2>   
            </div>
        </div>
    </section>
    );
}