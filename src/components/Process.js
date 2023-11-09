import { ClipboardListIcon } from "@heroicons/react/solid";
import { ArrowNarrowDownIcon } from "@heroicons/react/solid";
import React from "react";
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

export default function Process() {
  const ref1 = useRef();
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const ref4 = useRef();
  const isVisible4 = useIsVisible(ref4);

return (
<section id="process" className="blur-lg text-gray-200 bg-back body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 lg:w-3/4 bg-gray-900 rounded-3xl">
        <div className="flex flex-col w-full mb-10">
          <ClipboardListIcon className="mx-auto inline-block w-10 mb-4  text-white fill-current" />
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
          <img 
            className="lg:w-full mt-4 mx-auto outline-light rounded-lg"
            src="/acquire-inverted.png"
            alt="Original acquired data"
          /> 
        </div>
        <ArrowNarrowDownIcon  className="mx-auto w-10 mt-2"/>
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
        <ArrowNarrowDownIcon  className="mx-auto w-10 mt-2"/>
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
          only the larger observations that we care about. 
        </p>
        </div>
        <ArrowNarrowDownIcon  className="mx-auto w-10 mt-2"/>
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
            className="lg:w-3/4 mt-4 mx-auto outline-light rounded-lg"
            src="/mine-inverted.png"
            alt="Mined data"
          /> 
          </div>
      </div>
    </section>
);
}