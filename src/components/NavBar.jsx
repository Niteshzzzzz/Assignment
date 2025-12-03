// Your React + Tailwind section code will appear here.

import { useState } from "react";

export default function NavBar({dark, setDark}) {
    const [open, setOpen] = useState(false);


    return (
        <nav className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} w-full shadow-lg fixed top-0 left-0 z-50 transition-all`} >
            <div className="max-w-8xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
                {/* Brand */}
                <h1 className="text-3xl tracking-wide cursor-pointer hover:text-blue-500 transition-all">
                   Nova<span className="font-extrabold text-blue-500">Craft</span>
                </h1>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-10 text-lg font-medium">
                    <a href="#home" className="hover:text-blue-500 transition">Home</a>
                    <a href="#about" className="hover:text-blue-500 transition">About</a>
                    <a href="#services" className="hover:text-blue-500 transition">Services</a>
                    <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
                </div>

                {/* Right Controls */}
                <div className="flex items-center space-x-6">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDark(!dark)}
                        className="py-2 px-3 rounded-full border border-gray-300 dark:border-gray-700 hover:scale-110 transition"
                    >
                        {dark ? "🌙" : "☀️"}
                    </button>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden flex flex-col space-y-1" onClick={() => setOpen(!open)}>
                        <span className={`w-6 h-0.5 ${dark ? "bg-white" : "bg-black"}`}></span>
                        <span className={`w-6 h-0.5 ${dark ? "bg-white" : "bg-black"}`}></span>
                        <span className={`w-6 h-0.5 ${dark ? "bg-white" : "bg-black"}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                open && (
                    <div className={`${dark ? "bg-gray-900 text-white" : "bg-white text-black"} md:hidden px-6 pb-4 space-y-4 text-lg shadow-inner transition-all`}>
                        <a href="#home" className="block hover:text-blue-500 transition">Home</a>
                        <a href="#about" className="block hover:text-blue-500 transition">About</a>
                        <a href="#services" className="block hover:text-blue-500 transition">Services</a>
                        <a href="#contact" className="block hover:text-blue-500 transition">Contact</a>
                    </div>
                )
            }
        </nav >
    );
}
