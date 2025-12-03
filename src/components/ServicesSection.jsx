import React from "react";
import { Code, Layers, Zap, Globe, Shield, Smartphone } from "lucide-react";

export default function ServicesSection({dark, setDark}) {
//   const [] = useState(false)
  const services = [
    {
      icon: <Code size={40} />,
      title: "Clean Code",
      desc: "Write maintainable, scalable, and high‑performance code for modern applications.",
    },
    {
      icon: <Layers size={40} />,
      title: "Modern UI/UX",
      desc: "Design visually stunning and user‑friendly interfaces that attract your audience.",
    },
    {
      icon: <Zap size={40} />,
      title: "Fast Performance",
      desc: "Optimized systems ensuring blazing‑fast load times and smooth interactions.",
    },
    {
      icon: <Globe size={40} />,
      title: "Full‑Stack Development",
      desc: "End‑to‑end web solutions from frontend to backend with seamless integration.",
    },
    {
      icon: <Shield size={40} />,
      title: "Secure Systems",
      desc: "Implement top‑tier security standards to protect data and prevent vulnerabilities.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Responsive Design",
      desc: "Fully responsive layouts that look great on every device and screen size.",
    },
  ];

  return (
    <section id="services" className={`${dark ? "bg-gray-900 text-white" : "bg-white text-gray-900"} w-full py-24 px-6 md:px-12 transition-all`}>
      {/* Theme Toggle */}


      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold mb-4">Our Services</h2>
        <p className={`${dark ? "text-gray-300" : "text-gray-600"} text-lg max-w-2xl mx-auto`}>
          Powerful, modern, and clean features designed to enhance your digital experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${dark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"} p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border`}
          >
            <div className="mb-6 text-blue-500">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
            <p className={`${dark ? "text-gray-300" : "text-gray-600"} text-base leading-relaxed`}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
