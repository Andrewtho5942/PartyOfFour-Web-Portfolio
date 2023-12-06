import React from "react";

export default function Paper() {
    return (
    <section id="Paper">   
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
            <div className="lg:w-full md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div className= "dark:bg-gray-800 bg-gray-100 opacity-70 p-4 pb-0 mb-4 rounded-xl w-full text-center">
                    <h1 className="title-font text-5xl mb-4 font-bold text-highlight">
                        Final Group Report Paper
                    </h1>
                </div>
                
                <iframe 
                title="Final Group Report Paper"
                src="https://docs.google.com/document/d/e/2PACX-1vS3uqq-4t1A67GZ9wN2rxoigehGO4lKGU7tGULNtXa3s2zPhfhICyPOuGpKFIv2SLXTZzE6_tqk3s1I/pub?embedded=true"
                width="830"
                className="mx-auto h-screen"
                 frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>  
            </div>
        </div>
    </section>
    );
}
