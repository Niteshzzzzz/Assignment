import { motion } from "framer-motion";
import { Linkedin, Globe, Github } from "lucide-react";

const team = [
  {
    name: "Nitesh Kumar",
    role: "Full Stack Developer, React Native Developer",
    image: "/team/team1.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/nitesh-kumar-904393259/",
      portfolio: "https://nitesh-kumar-portfolio-1661.netlify.app/",
      github: "https://github.com/Niteshzzzzz",
    },
  },
  {
    name: "Nand Kumar Sahu",
    role: "UI/UX Designer",
    image: "/team/team2.jpg",
    socials: {
      linkedin: "#",
      portfolio: "#",
      github: "#",
    },
  },
  {
    name: "Sanjeev Ranjan",
    role: "Backend Engineer",
    image: "/team/team3.jpg",
    socials: {
      linkedin: "#",
      portfolio: "#",
      github: "#",
    },
  },
];

export default function TeamSection({ dark = false }) {
  const theme = {
    bg: dark ? "bg-gray-900" : "bg-gray-50",
    text: dark ? "text-gray-100" : "text-gray-800",
    subtext: dark ? "text-gray-300" : "text-gray-600",
    card: dark ? "bg-gray-800" : "bg-white",
    cardText: dark ? "text-gray-200" : "text-gray-900",
  };

  return (
    <section className={`${theme.bg} py-20 transition-all`} id="team">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl font-bold text-center mb-14 ${theme.text}`}
        >
          Meet Our <span className="text-blue-600">Team</span>
        </motion.h2>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${theme.card} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-white/10`}
            >
              {/* Image */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className={`text-xl font-semibold ${theme.cardText}`}>
                {member.name}
              </h3>

              {/* Role */}
              <p className={`text-sm mb-4 ${theme.subtext}`}>{member.role}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={member.socials.linkedin}
                  className="hover:text-blue-500 transition"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={member.socials.portfolio}
                  className="hover:text-blue-400 transition"
                >
                  <Globe size={22} />
                </a>
                <a
                  href={member.socials.github}
                  className="hover:text-gray-400 transition"
                >
                  <Github size={22} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
