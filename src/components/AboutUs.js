import React from "react";

export default function AboutUs() {
    return (
    <section id="AboutUs">   
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
            <div className=":w-full lg:pr-24 md:pr-16 flex flex-col  md:text-left mb-16 md:mb-0 items-center text-center">
                <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-0 mb-4 rounded-xl w-full text-center">
                    <h1 className="title-font text-5xl mb-4 font-bold text-highlight">
                        About Us
                    </h1>
                </div>
                <div className="grid grid-cols-2 my-5 space-x-8 gap-8">
                <div>
                    <img
                className="outline-main rounded-3xl w-1/3 overflow-hidden mx-auto mb-4"
                alt="Bryce"
                src="./Bryce.png"
                />
                <h2 className="dark:bg-gray-800 bg-gray-100 font-bold opacity-70 px-2 text-2xl py-2 mb-2 rounded-xl lg:w-1/2 w-full text-center mx-auto dark:text-white text-black">
                    Bryce Bogan
                </h2>  
                <h2 className="dark:bg-gray-800 bg-gray-100 opacity-70 py-4 lg:px-6 px-2 mb-4 rounded-xl lg:h-1/3 w-full text-left dark:text-white text-black">
                <strong>Major:</strong> Applied Statistics <br/>
                    <strong>Year:</strong> Sophomore <br/>
                    <strong> Contributions:</strong> Introductory filtering, visualizations in GPA by department, as well as a dashboard of GPA distributions over terms by course
                    </h2>   
                    </div>


                    <div>
                    <img
                className="outline-main rounded-3xl w-1/3 overflow-hidden mx-auto mb-4 aspect-square"
                alt="Andrew"
                src="./Andrew.png"
                />
                <h2 className="dark:bg-gray-800 bg-gray-100 font-bold opacity-70 px-2 text-2xl py-2 mb-2 rounded-xl lg:w-1/2 w-full text-center mx-auto dark:text-white text-black">
                    Andrew Thompson
                </h2>  
                <h2 className="dark:bg-gray-800 bg-gray-100 opacity-70 py-4 lg:px-6 px-2 mb-4 rounded-xl lg:h-1/3 w-full text-left dark:text-white text-black">
                <strong>Major:</strong> Computer Science and Data Science <br/>
                    <strong>Year:</strong> Junior <br/>
                    <strong> Contributions:</strong> Website creation and data visualizations covering the GPA differences between subjects
                    </h2>   
                    </div>

                    <div>
                    <img
                className="outline-main rounded-3xl w-1/3 overflow-hidden mx-auto mb-4 aspect-square"
                alt="Sam"
                src="./Sam.png"
                />
                <h2 className="dark:bg-gray-800 bg-gray-100 font-bold opacity-70 px-2 text-2xl py-2 mb-2 rounded-xl lg:w-1/2 w-full text-center mx-auto dark:text-white text-black">
                    Sam Lau
                </h2>  
                <h2 className="dark:bg-gray-800 bg-gray-100 opacity-70 py-4 lg:px-6 px-2 mb-4 rounded-xl lg:h-1/3 w-full text-left dark:text-white text-black">
                <strong>Major:</strong> Mathematics and Applied Statistics <br/>
                    <strong>Year:</strong> Senior <br/>
                    <strong> Contributions:</strong> Analysis and data visualization creation for the association between grade distribution and professors
                    </h2>   
                    </div>

                    <div>
                    <img
                className="outline-main rounded-3xl w-1/3 overflow-hidden mx-auto mb-4 aspect-square"
                alt="Weicheng"
                src="./Weicheng.png"
                />
                <h2 className="dark:bg-gray-800 bg-gray-100 font-bold opacity-70 px-2 text-2xl py-2 mb-2 rounded-xl lg:w-1/2 w-full text-center mx-auto dark:text-white text-black">
                    Weicheng Wang
                </h2>  
                <h2 className="dark:bg-gray-800 bg-gray-100 opacity-70 py-4 lg:px-6 px-2 mb-4 rounded-xl lg:h-1/3 w-full text-left dark:text-white text-black">
                <strong>Major:</strong> Computer Science and Data Science <br/>
                    <strong>Year:</strong> Senior <br/>
                    <strong> Contributions:</strong> Analysis and data visualization creation for the association between grade distribution and semesters
                    </h2>   
                    </div>

                </div>
                    
                    
            </div>
        </div>
    </section>
    );
}
