import React from "react";

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