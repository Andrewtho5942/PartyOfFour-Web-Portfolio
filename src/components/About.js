import React from "react";

export default function About() {

    
return (
<section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className= "bg-gray-700 opacity-80 p-4 pb-0 mb-4 rounded-xl w-full text-center">
            <h1 className="title-font text-5xl mb-4 font-bold text-help">
            An Analysis of Purdue's GPA
            </h1>
            <p className="ml-8 mb-8 text-1xl leading-relaxed text-white">
              Andrew Thompson (CS & AI, Junior)&nbsp;&nbsp; • &nbsp;&nbsp;Sam Lau (Math & Stats, Senior) <br /> 
              Bryce Bogan (Stats, Sophomore)&nbsp;&nbsp; • &nbsp;&nbsp;Weichang Wang (DS & CS, Senior)
            </p>
          </div>
        
          <div className="flex justify-center bg-gray-700  p-4 rounded-xl text-white">
          &nbsp;&nbsp;&nbsp;&nbsp;Our group's goal is to analyze the distribution of Purdue's GPA across courses, subjects, academic terms, and professors to help Purdue 
            faculty and students better understand the difficulty and requirements of the many academic paths of the university. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;This portfolio will show our group's many visualizations, insights, and our methods through the entire data visualization process.
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden lg:w-81  md:w-1/2 w-5/6 " >
          <img
            className="object-cover object-center rounded"
            alt="visualization"
            src="./visualization_example.png"
          />
        </div>
      </div>
    </section>
);
}