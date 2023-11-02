import { BadgeCheckIcon } from "@heroicons/react/solid";

import React from "react";
import { skills } from "../data";

export default function Conclusion() {
return (
<section id="conclusion">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <img
            className="object-cover object-center rounded h-12 w-12 mx-auto"
            alt="hero"
            src="./check.svg"
          />
          <h1 className="sm:text-4xl text-3xl font-bold title-font text-highlight-light mb-4">
            Conclusion
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        <div className="h-96">

        </div>
        
      </div>
        <div className="">
          <h1 className="mx-auto p-8 bg-gray-900 opacity-80"> 
            Made with React & Tailwind - Hosted by Netlify.
          </h1>
        </div>
    </section>
);
}