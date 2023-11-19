import React from "react"
//import { useState, useEffect } from "react";

export default function Gallery() {
    return (
    <section id="Gallery">   
        <div className="container mx-auto flex px-10 py-10 items-center">
            <div className="mx-auto lg:w-full w-full flex flex-col mb-16 items-center text-center">
                <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-4 mb-8 rounded-xl w-full text-center">
                    <h1 className="title-font text-5xl font-bold text-highlight ">
                        Visualization Gallery
                    </h1>
                
                </div>
                <div className = "mx-auto grid grid-flow-dense flex-wrap grid-cols-3 w-full gap-4 px-4">
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualization_example.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualization_example.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualization_example.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualization_example.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualization_example.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualization_example.png"
                            alt="test"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}