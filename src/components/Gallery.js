import React from "react"

export default function Gallery(prop) {
    return (
    <section id="Gallery">   
        <div className="container mx-auto flex lg:px-5 py-10 w-full items-center">
            <div className="mx-auto lg:w-full w-full flex flex-col mb-16 items-center text-center">
                <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-4 mb-6 rounded-xl w-full text-center">
                    <h1 className="title-font text-5xl font-bold text-highlight ">
                        Visualization Gallery
                    </h1>
                </div>
                <div className="dark:bg-gray-800 bg-gray-100 opacity-70 px-4 py-2 rounded-xl">
                <p className="text-2xl font-bold dark:text-white text-black">
                    Analysis of the GPA of Purdue Courses Over Time
                </p>
                <p className=" text-xl font-bold text-gray-400">
                    Click the arrow in the top right to select a course or type in the name directly
                </p>
                </div>
                
                <iframe width="1150" height="425" frameborder="0"
                    title="Course Dashboard"
                    className="mb-12 mt-4 rounded-xl outline-main"
                    src="https://onedrive.live.com/embed?resid=35F145B59F2BEC0E%21161312&authkey=%21ACvmc3Kr4OzJM2I&em=2&AllowTyping=True&ActiveCell='DropdownDashboard'!B2&Item='DropdownDashboard'!A2%3AB22&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True">
                </iframe>
                <div className = " grid grid-cols-2 w-full gap-4 px-4 lg:space-x-6">
                    <div >
                        <img className="outline-main rounded-3xl"
                            src={prop.mode ? "./visualizations/scatterplot_inverted.png" : "./visualizations/scatterplot.png"}
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src= {prop.mode ? "./visualizations/gpatime_inverted.png" : "./visualizations/gpatime.png"}
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualizations/highest_cour.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualizations/lowest_cour.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualizations/highest_sub.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualizations/lowest_sub.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src= {prop.mode ? "./visualizations/highest_vis2_inverted.png" : "./visualizations/highest_vis2.png"}
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src= {prop.mode ? "./visualizations/lowest_vis2_inverted.png" : "./visualizations/lowest_vis2.png"}
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src= {prop.mode ? "./visualizations/topcalc_inverted.png" : "./visualizations/topcalc.png"}
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src= {prop.mode ? "./visualizations/top4calc_inverted.png" : "./visualizations/top4calc.png"}
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualizations/planecalc2.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualizations/transideas.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualizations/planecalc1.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualizations/sciencewriting.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualizations/appliedcalc2.png"
                            alt="test"
                        />
                    </div>
                    <div >
                        <img className="outline-main rounded-3xl"
                            src="./visualizations/organicchem.png"
                            alt="test"
                        />
                    </div>
                </div>
                <img className="outline-main rounded-3xl lg:w-1/2 w-3/4 mt-8"
                            src="./visualizations/range.png"
                            alt="test"
                        />
                        
            </div>
        </div>
    </section>
    );
}