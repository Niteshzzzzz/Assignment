import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection({ dark = false }) {

    const projects = [
        {
            title: "NimboNexus – Empowering Your Business with Salesforce",
            description:
                "At NimboNexus, we specialize in Salesforce cloud solutions, training & certification, and consulting services to help your business thrive.",
            image: `/projects/image${dark ? '1' : '2'}.png`,
            tech: ["React", "Node.js", "MongoDB"],
            link: "https://www.nimbonexus.com/",
        },
        {
            title: "SanjeevEnterprises – Your Best-Construction Partner",
            description:
                "It offers reliable construction services with a focus on unmatched quality, ensuring projects are completed on time and within budget.",
            image: "/projects/image.png",
            tech: ["MERN", "Socket.io", "Mapbox"],
            link: "https://sanjeeventerprises.com/",
        },
        {
            title: "cometchat – Join the CometChat partner universe",
            description:
                "Create value for your clients, leveraging our world-class technology. Partner with us and grow your business!",
            image: "/projects/image3.png",
            tech: ["React", "Express", "Node.js", "MongoDB"],
            link: "https://comechat-assignment.vercel.app/",
        },
    ];

    const theme = {
        bg: dark ? "bg-gray-900" : "bg-gray-50",
        text: dark ? "text-gray-100" : "text-gray-800",
        subtext: dark ? "text-gray-300" : "text-gray-600",
        card: dark ? "bg-gray-800" : "bg-white",
        cardText: dark ? "text-gray-200" : "text-gray-900",
        badgeBg: dark ? "bg-blue-900" : "bg-blue-100",
        badgeText: dark ? "text-blue-300" : "text-blue-700",
    };

    return (
        <section className={`${theme.bg} py-20 transition-all`} id="projects">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-4xl font-bold text-center mb-14 ${theme.text}`}
                >
                    Delivered <span className="text-blue-600">Projects</span>
                </motion.h2>

                {/* Project Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`${theme.card} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/10`}
                        >
                            {/* Image */}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className={`text-xl font-semibold mb-2 ${theme.cardText}`}>
                                    {project.title}
                                </h3>
                                <p className={`${theme.subtext} mb-4 text-sm`}>
                                    {project.description}
                                </p>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 text-xs rounded-full ${theme.badgeBg} ${theme.badgeText}`}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Button */}
                                <a
                                    target="_blank" rel="noopener noreferrer"
                                    href={project.link}
                                    className="flex items-center text-blue-500 font-medium hover:gap-2 transition-all duration-300"
                                >
                                    View Project <ArrowRight size={18} className="ml-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
