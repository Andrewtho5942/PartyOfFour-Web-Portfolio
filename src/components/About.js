import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";
import { ArrowNarrowDownIcon, ChartBarIcon } from "@heroicons/react/solid";
import {useEffect, useState, useRef} from "react";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(()=> {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
}

export default function About(darkMode) {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);
    
  const ref5 = useRef();
  const isVisible5 = useIsVisible(ref5);

  const ref6 = useRef();
  const isVisible6 = useIsVisible(ref6);

return (
<section id="About">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:w-full md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-0 mb-4 rounded-xl w-full text-center">
            <h1 className="title-font text-5xl mb-4 font-bold text-highlight">
            An Analysis of Purdue's GPA
            </h1>
            <p className="ml-8 mb-8 text-1xl leading-relaxed dark:text-white text-black">
              Andrew Thompson (CS & AI, Junior)&nbsp;&nbsp; • &nbsp;&nbsp;Sam Lau (Math & Stats, Senior) <br /> 
              Bryce Bogan (Stats, Sophomore)&nbsp;&nbsp; • &nbsp;&nbsp;Weichang Wang (DS & CS, Senior)
            </p>
          </div>
        
          <div className="flex justify-center dark:bg-gray-800 bg-gray-100 opacity-70 p-4 rounded-xl dark:text-white text-black">
          &nbsp;&nbsp;&nbsp;&nbsp;Our goal is to analyze the distribution of Purdue's GPA across courses, subjects, academic terms, and professors to help Purdue 
            faculty and students better understand the difficulty and requirements of the many academic paths of the university. <br />
            &nbsp;&nbsp;&nbsp;&nbsp;This portfolio will show our group's many visualizations, insights, and our methods through the entire data visualization process.
          </div>
        </div>
        <div className=" overflow-hidden lg:w-7/12  md:w-1/2 w-5/6" >
          <img
            className="outline-main rounded-3xl bg-blend-soft-light"
            alt="visualization"
            src="./visualization_example.png"
          />
        </div>
      </div>

      <div id="Process" className="blur-lg dark:text-gray-200 text-black dark:bg-back-dark bg-back-light body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 lg:w-3/4 dark:bg-gray-900 bg-back-lightMid rounded-3xl">
        <div className="flex flex-col w-full mb-10">
          <ClipboardListIcon className=" mx-auto inline-block w-10 mb-4 text-highlight-dark fill-current" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-highlight">
            Our Data Visualization Process
          </h1>
          <p className="lg:w-full mx-auto leading-relaxed text-base">
             This section will go through the first few steps of the data visualization process 
             that we followed for this project.
          </p>
        </div>
        <div ref={ref1} className = {'transition-opacity ease-in duration-1000 ' + (isVisible1 ? 'opacity-100' : 'opacity-0')}> 
        <div className="flex justify-center">
          <img 
            className="w-12 h-8"
            src="/Acquire.png"
            alt=""
          />
          <h1 className="ml-2 text-2xl font-semibold text-highlight">
            Acquire
          </h1>
          
        </div>
        
          <p className="mx-auto lg:w-full">
            To acquire our dataset covering GPA distributions for a range of courses, subjects, terms, and professors, 
            we downloaded the data from a website called boilergrades.com, which was made available by a public records request.
          </p>
          
          <img className="lg:w-full mt-4 mx-auto outline-light rounded-lg" src= {darkMode ? "/acquire-inverted.png" : "/AcquireUninverted.png"} alt="Original acquired data"/> 
        </div>
        <ArrowNarrowDownIcon  className="text-highlight-dark mx-auto w-10 mt-2"/>
        <div ref={ref2} className = {'transition-opacity ease-in duration-1000 ' + (isVisible2 ? 'opacity-100' : 'opacity-0')}> 
        <div className="flex justify-center mt-6">
          <img 
            className="w-8 h-7"
            src="/Parse.png"
            alt=""
          /> 
          <h1 className="ml-2 text-2xl font-semibold text-highlight">
            Parse
          </h1>
          
        </div>
        <p className="mx-auto lg:w-full">
          To parse this dataset, we wrote out the datatype, format, and range of each variable. 
          In excel, the correct data format was selected for each column to make it more readable.
        </p>
        <img 
            className="lg:w-full mt-4 mx-auto outline-light rounded-lg"
            src="/ParseInverted.png"
            alt="Parsed data"
          /> 
          </div>
        <ArrowNarrowDownIcon  className="text-highlight-dark mx-auto w-10 mt-2"/>
        <div ref={ref3} className = {'transition-opacity ease-in duration-1000 ' + (isVisible3 ? 'opacity-100' : 'opacity-0')}> 
        <div className="flex justify-center mt-6">
          <img 
            className="w-6 h-8"
            src="/Filter.png"
            alt=""
          /> 
          <h1 className="ml-2 text-2xl font-semibold text-highlight">
            Filter
          </h1>
          
        </div>
        <p className="mx-auto lg:w-full">
          The data was then filtered to remove Pass/Fail courses that did not have a normal
          grade distribution, and any classes with a withdrawal rate greater than 80% were
          removed as well. Later in the process, the datasets for many visualizations also 
          filtered out any courses or subjects that have a small number of sections to get 
          only the larger observations that have more significance. 
        </p>
        </div>
        <ArrowNarrowDownIcon  className="text-highlight-dark mx-auto w-10 mt-2"/>
        <div ref={ref4} className = {'transition-opacity ease-in duration-1000 ' + (isVisible4 ? 'opacity-100' : 'opacity-0')}> 
        <div className="flex justify-center mt-6">
          <img 
            className="w-10 h-8"
            src="/Mine.png"
            alt=""
          /> 
          <h1 className="ml-2 text-2xl font-semibold text-highlight">
            Mine
          </h1>
          
        </div>
        <p className="mx-auto lg:w-full">
          Next, we mined the data by getting the sum of the population, and using this with
          the grade distribution to get an average GPA for each course. We then created multiple pivot
          tables to sum every section across each course and subject, as well as match up each professor
          with every class he or she teaches. These pivot tables were then used in the following stages of
          the visualization process.
        </p>
        <img 
            className="lg:w-1/2 mt-4 mx-auto outline-light rounded-lg"
            src="/mine-inverted.png"
            alt="Mined data"
          /> 
          </div>
      </div>
      </div>

      <div className = "h-40"> </div>
      <div id="Insights" className="blur-lg dark:text-gray-400 text-black dark:bg-back-dark bg-back-light body-font">
      <div className="container px-5 py-10 mx-auto text-center dark:bg-gray-900 bg-back-lightMid lg:px-40 lg:w-3/4 rounded-3xl">
        <div className="flex flex-col w-full mb-10">
          <ChartBarIcon className="mx-auto inline-block w-10 mb-4 text-highlight-dark fill-current" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-highlight">
            Visualizations & Insights
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed dark:text-white text-black">
            This section serves to showcase the various visualizations that our group has created to give insight into what the 
            relationship is between GPA and numerous factors at Purdue.
          </p>
        </div>
        <div ref={ref5} className = {'transition-opacity ease-in duration-1000 ' + (isVisible5 ? 'opacity-100' : 'opacity-0')}> 
        <div className="flex flex-wrap -m-4">
          <img 
            className="outline-main w-2/3 mx-auto rounded-2xl"
            src="/LowestCourses.png"
            alt="Lowest 10 courses by GPA"
          />
        </div>
        <div className="mt-8 lg:w-2/3 w-3/4 mx-auto mb-20">
          This bar chart shows how out of all courses at Purdue with more than 100 sections, 
          Math has 7 of the lowest 10. This includes Calculus 1 - 3, as well as linear algebra, differential equations,
          and Plane Analytic Geometry & Calculus 1 & 2, which had the two lowest average GPAs out of all observations by a relatively large margin.
        </div>
        </div>
        <div ref={ref6} className = {'transition-opacity ease-in duration-1000 ' + (isVisible6 ? 'opacity-100' : 'opacity-0')}> 
        <div className="flex flex-wrap w-full ml-10">
          <img 
            className="outline-main lg:w-5/12 w-3/4 rounded-2xl mx-2 my-2"
            src="/LowestSubjects.png"
            alt="Lowest 10 subjects by GPA"
          />
          <img 
            className="outline-main lg:w-5/12 w-3/4 rounded-2xl mx-2 my-2"
            src="/HighestSubjects.png"
            alt="Highest 10 subjects by GPA"
          />
        </div>
        <div className="mt-8 lg:w-2/3 mx-auto mb-10">
            These bar charts compare the top 10 subjects (with 200 or more sections) with the highest GPA and the bottom 10 subjects with the lowest GPA.
            Math is the subject with the lowest average GPA of 2.56, with a 0.24 gap between it and second place, Band. The two
             outliers with the highest GPA are Pharmacy and Nursing, which each have an average GPA of 3.69 and 3.72, respectively.
             These two subjects are also separated by a relatively large gap of 0.25 from third place, Aviation Technology.
        </div>
        </div>
      </div>
      </div>

      <div id="Conclusion" className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <img
            className="object-cover object-center rounded h-12 w-12 mx-auto"
            alt="hero"
            src="./check.svg"
          />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font text-highlight mb-4">
            Conclusion
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-white text-black">
            In conclusion, this project isn't actually done yet so this is just a placeholder for 
            the conclusion we will draw when the rest of this project is finished. Thanks for reading
            this though!
          </p>
        </div>
        <div className="h-64">

        </div>
        
      </div>
        <div className="">
          <h1 className="mx-auto p-8 dark:bg-gray-900 bg-gray-200 opacity-70 dark:text-white text-black"> 
            Made with React & Tailwind - Hosted by Netlify.
          </h1>
        </div>




    </section>
    
);
}