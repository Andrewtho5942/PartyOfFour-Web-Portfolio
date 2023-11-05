import { ChartBarIcon } from "@heroicons/react/solid";
import React from "react";

export default function Insights() {
return (
<section id="insights" className="blur-lg text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 w-3/4">
        <div className="flex flex-col w-full mb-10">
          <ChartBarIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-highlight">
            Visualizations & Insights
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
            This section serves to showcase the various visualizations that our group has created to give insight into what the 
            relationship is between GPA and numerous factors at Purdue.
          </p>
        </div>
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
      
    </section>
);
}