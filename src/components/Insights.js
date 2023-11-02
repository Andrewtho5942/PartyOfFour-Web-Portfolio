import { ChartBarIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";


export default function Insights() {
return (
<section id="insights" className="blur-lg text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ChartBarIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-highlight">
            Visualizations & Insights
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This section serves to showcase the various visualizations that our group has created to give insight into what the 
            relationship is between GPA and numerous factors at Purdue.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          
        </div>
      </div>
    </section>
);
}