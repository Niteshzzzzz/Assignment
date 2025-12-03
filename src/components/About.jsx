import React from "react";

export default function About({ dark }) {
  return (
    <section id="about" className={`${dark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'} w-full py-24 px-6 md:px-12 transition-all`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us"
            className="rounded-3xl shadow-lg w-[90%] hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-extrabold">About Us</h2>
          <p className={`${dark ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}> 
            We are a team of passionate developers and designers committed to building stunning,
            responsive, and modern digital experiences. Our mission is to help businesses grow by
            delivering innovative web solutions.
          </p>
          <p className={`${dark ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed`}> 
            From concept to deployment, we ensure high-quality code, pixel-perfect design, and smooth
            user experiences. Join us on this journey and take your digital presence to the next level.
          </p>
        </div>
      </div>
    </section>
  );
}