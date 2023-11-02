import { ClipboardListIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";


export default function Process() {
return (
<section id="process" className="blur-lg text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ClipboardListIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font font-semibold mb-4 text-highlight">
            Our Data Visualization Process
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
             This section will go through each step of the data visualization process 
             that we followed for this project.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          
        </div>
      </div>
    </section>
);
}