"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ImageModal from "./components/ImageModal";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


/* ================= PROJECT DATA ================= */
const projects = [
  {
    title: "RAG-Based Chatbot",
    desc: "AI chatbot using Retrieval Augmented Generation (RAG) for intelligent and contextual responses.",
    link: "https://github.com/Shahala10/Rag-based-chatbot",
  },
  {
    title: "Pacman Game",
    desc: "Classic Pacman game with movement logic, scoring system, and interactions.",
    link: "https://github.com/Shahala10/pacman_game",
  },
  {
    title: "Password Manager",
    desc: "Secure password manager built using Python for safe credential handling.",
    link: "https://github.com/Shahala10/password_manager",
  },
  {
    title: "Quiz Game",
    desc: "Interactive quiz game with scoring and user input handling.",
    link: "https://github.com/Shahala10/quiz_game",
  },
  {
    title: "My First HTML Portfolio",
    desc: "Beginner portfolio created using HTML, CSS, and JavaScript.",
    link: "https://github.com/Shahala10/myportfolio",
  },
];

/* ================= EVENTS ================= */
const events = [
  {
    title: "Academic Dean – Teachers’ Day",
    desc: "Selected as Academic Dean for a day at Nilgiri College of Arts and Science.",
    year: "2024",
    image: "/events/academic dean.png",
  },
  {
    title: "Career Guidance Program",
    desc: "Participated in a career guidance and mentoring program.",
    year: "2025",
    image: "/events/CareerGuidance.png",
  },
  {
    title: "Drone Workshop",
    desc: "Hands-on workshop on drone technology.",
    year: "2024",
    image: "/events/Drone Workshop.png",
  },
  {
    title: "KISE – 5 Days Workshop",
    desc: "Five-day intensive skill development workshop.",
    year: "2024",
    image: "/events/Kise(5days workshop).png",
  },
];

/* ================= AWARDS ================= */
const awards = [
  {
    title: "Certificate of Achievement – SAWIT.AI",
    desc: "Recognized for successful completion of a Generative AI learnathon.",
    year: "2024",
  },
  {
    title: "Academic Excellence",
    desc: "Consistently performed as a topper in academics.",
    year: "2023 – 2024",
  },
];

/* ================= CERTIFICATES ================= */
const certificates = [
  {
    title: "ChatGPT Certification",
    org: "GUVI",
    image: "/certificates/ChatGPT_for_Everyone.png",
  },
  {
    title: "Python Programming",
    org: "Infosys",
    image: "/certificates/Python infosys.png",
  },
  {
    title: "Python Programming",
    org: "GUVI",
    image: "/certificates/Python(Guvi).png",
  },
  {
    title: "SAWiT AI Program",
    org: "SAWiT",
    image: "/certificates/SAWiT AI Program.png",
  },
  {
    title: "Canva Essentials",
    org: "Canva",
    image: "/certificates/Canva Essentials.png",
  },
  {
    title: "Graphic Design Essentials",
    org: "Canva",
    image: "/certificates/Graphic Design Essentials.png",
  },
  {
    title: "Soft Skills",
    org: "TCS",
    image: "/certificates/TCS Soft Skill.png",
  },
  {
    title: "UI/UX Design",
    org: "UI/UX",
    image: "/certificates/UIUX.png",
  },
];

/* ================= INTERNSHIP ================= */
const internships = [
  {
    role: "Technical Intern",
    company: "High Court",
    duration: "10 Days Internship · 2024",
    image: "/events/Internship at Highcourt.png",
    project: "Voice to Text Transcription System",
    desc: "Completed a 10-day internship in the Technical Department of the High Court. Worked on a Voice-to-Text Transcription System using APIs, gaining exposure to real-world technical workflows, system documentation, and professional environments.",
  },
];


/* ================= ANIMATION ================= */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

/* ================= MAIN PAGE ================= */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main
      className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? "bg-black text-white" : "bg-gray-100 text-black"
        }`}
    >


      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Shahala Rahshima A</h1>

          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#internship">Internship</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#events">Events</a>
            <a href="#awards">Awards</a>
            <a href="#certificates">Certificates</a>

            <a
              href="/resume/Shahala.pdf"
              download
              className="border px-4 py-2 rounded hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            onClick={() => setDarkMode(!darkMode)}
            className="border px-3 py-2 rounded text-sm transition hover:bg-white hover:text-black"
          >
            ☰
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-4">
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
            <a href="#awards" onClick={() => setMenuOpen(false)}>Awards</a>
            <a href="#certificates" onClick={() => setMenuOpen(false)}>Certificates</a>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        className="h-screen flex items-center justify-center text-center px-6"
      >
        <div className="flex flex-col items-center">
          <img
            src="/profile/profile.jpeg"
            alt="Shahala Rahshima A"
            className="w-40 h-40 rounded-full object-cover border border-white/20 mb-6"
          />

          <p className="uppercase tracking-widest text-gray-400">
            Hello, I am
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Shahala Rahshima A
          </h1>

          <p className="mt-4 text-xl text-gray-400">
            Python Developer | AI/ML Enthusiast
          </p>

        </div>

      </motion.section>

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">About Me</h3>
        <p className="text-gray-300 leading-relaxed">
          I am a BSc Multimedia and Web Technology student with AI & Robotics
          specialization at Nilgiri College of Arts and Science.
          <br /><br />
          I am currently focused on building Python-based applications, AI/ML
          projects, and exploring robotics concepts. I have strong fundamentals
          in Python, enjoy self-learning, and adapt quickly to new technologies.
          <br /><br />
          Along with technical skills, I bring leadership experience and a
          growth-oriented mindset. I am a student and fresher, and I am also
          planning to start freelancing in the near future.
        </p>
      </motion.section>

      {/* ================= EDUCATION ================= */}
      <motion.section
        id="education"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Education Timeline
        </h3>

        <div className="relative border-l border-white/30 pl-10 space-y-12">
          <div className="relative">
            <span className="absolute -left-[22px] top-2 w-4 h-4 rounded-full bg-white" />
            <div className="border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg">
                BSc Multimedia & Web Technology (AI & Robotics)
              </h4>
              <p className="text-gray-400">
                Nilgiri College of Arts and Science
              </p>
            </div>
          </div>

          <div className="relative">
            <span className="absolute -left-[22px] top-2 w-4 h-4 rounded-full bg-white" />
            <div className="border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg">
                Mathematics & Biology
              </h4>
              <p className="text-gray-400">
                Government Model School, The Nilgiris
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================= INTERNSHIP ================= */}
      <motion.section
        id="internship"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          Internship Experience
        </h3>

        <div className="relative border-l border-white/30 pl-10 space-y-12">
          {internships.map((intern, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[22px] top-6 w-4 h-4 rounded-full bg-white" />

              <div className="grid md:grid-cols-2 gap-8 border border-white/10 rounded-xl p-6">
                {/* Image */}
                <img
                  src={intern.image}
                  alt="High Court Internship"
                  className="w-full h-56 object-cover rounded-lg"
                />

                {/* Content */}
                <div>
                  <h4 className="text-2xl font-semibold">
                    {intern.role}
                  </h4>
                  <p className="text-gray-400 mt-1">
                    {intern.company} · {intern.duration}
                  </p>

                  <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                    {intern.desc}
                  </p>

                  <div className="mt-4">
                    <span className="text-sm font-semibold">Project:</span>
                    <p className="text-gray-400 text-sm">
                      {intern.project}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>



      {/* ================= SKILLS ================= */}
      <motion.section
        id="skills"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-10">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Python",
            "Django",
            "HTML",
            "CSS",
            "Tailwind CSS",
            "TypeScript",
            "UI/UX",
            "Git",
            "RAG",
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="border border-white/10 rounded-xl p-6 text-center"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        id="projects"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-10">Projects</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-white/10 rounded-xl p-6"
            >
              <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
              <p className="text-gray-400 mb-4">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                className="underline text-sm"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= EVENTS ================= */}
      <motion.section
        id="events"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-10">
          Events Participated
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((e, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-white/10 rounded-xl p-6"
            >
              <h4 className="font-semibold">{e.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{e.desc}</p>
              <p className="text-gray-500 mt-3">{e.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= AWARDS ================= */}
      <motion.section
        id="awards"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-neutral-900 py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Awards & Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((a, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="border border-white/10 rounded-xl p-6"
              >
                <h4 className="font-semibold">{a.title}</h4>
                <p className="text-gray-400 text-sm mt-2">{a.desc}</p>
                <p className="text-gray-500 mt-3">{a.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================= CERTIFICATES ================= */}
      <motion.section
        id="certificates"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-10">Certificates</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((c, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }}
              className="border border-white/10 rounded-xl overflow-hidden">
              <img src={c.image} alt={c.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setSelectedImage(c.image)} />
              <div className="p-6">
                <h4 className="font-semibold">{c.title}</h4>
                <p className="text-gray-400 text-sm mt-2">{c.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}

      {/* ================= CONTACT ================= */}
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-neutral-900 py-16 text-center"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h3>
        <p className="text-gray-400">shahalashazz10@gmail.com</p>
        <p className="text-gray-400">shahalarahshima@gmail.com</p>
        <p className="text-gray-500 mt-2">India</p>
      </motion.section>


      <footer className="py-10 text-center border-t border-white/10">
        <p className="mb-4 text-sm">© 2025 Shahala Rahshima A</p>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/Shahala10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:shahalarahshima@gmail.com"
            className="hover:scale-110 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </footer>


    </main>
  );
}
