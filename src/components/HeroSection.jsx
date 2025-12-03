import React from "react";

export default function HeroSection({ dark }) {

    return (
        <section id="home" className={`${dark ? "bg-gray-900 text-white" : "bg-gradient-to-b from-white to-blue-50 text-gray-900"} w-full min-h-screen flex items-center py-20 md:py-32 px-6 md:px-12 transition-all`}>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Build Stunning Websites With
                        <span className="text-blue-500"> Modern UI</span>
                    </h1>

                    <p className={`text-lg md:text-xl ${dark ? "text-gray-300" : "text-gray-600"} max-w-xl mx-auto md:mx-0`}>
                        Create fast, responsive, and beautiful digital experiences using clean design and powerful
                        development tools.
                    </p>

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-2xl shadow-lg text-lg font-medium hover:bg-blue-700 hover:shadow-xl transition-all hover:scale-105">
                        Get Started →
                    </button>
                </div>

                {/* Illustration */}
                <div className="flex-1 flex justify-center relative">
                    {/* <img
                        src="public/website-example-justinmind.png"
                        alt="Hero Illustration"
                        className="w-72 md:w-96 drop-shadow-xl hover:scale-105 transition-all"
                    /> */}
                    <div className="flex-1 flex justify-center ">
                        <img
                            src="public/website-example-justinmind.png"
                            alt="Hero Illustration 1"
                            className="w-56 md:w-72 drop-shadow-xl rounded-xl absolute left-0 top-[-130px] hover:scale-105 transition-all z-30 shadow-md shadow-blue-500"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1595234336271-178875797b4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Hero Illustration 2"
                            className="w-56 md:w-72 drop-shadow-xl rounded-xl absolute left-14 top-[-90px] hover:scale-105 transition-all z-20 hover:z-30 shadow-2xl shadow-blue-500"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1538503529202-7a0e79cbb6f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Hero Illustration 3"
                            className="w-56 md:w-72 drop-shadow-xl rounded-xl absolute left-26 top-[-30px] hover:scale-105 transition-all z-10 hover:z-30 shadow-2xl shadow-blue-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
