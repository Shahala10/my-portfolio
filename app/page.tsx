"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
    title: "SAWIT.AI LEARNATHON",
    desc: "Participated in a national-level learnathon focused on Generative AI.",
    year: "2024",
  },
  {
    title: "AI & Python Workshop",
    desc: "Hands-on workshop on Python programming and AI fundamentals.",
    year: "2024",
  },
  {
    title: "Teachers’ Day – Academic Dean Role",
    desc: "Selected as Academic Dean for a day at Nilgiri College of Arts and Science.",
    year: "2024",
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
    title: "Professional Diploma in AI & Robotics",
    org: "Certified Program",
  },
  {
    title: "UI/UX Design Certification",
    org: "Tutedude",
  },
  {
    title: "Python Programming Certification",
    org: "Kaisan Institute of Skill & Excellence",
  },
];

/* ================= ANIMATION ================= */
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ================= MAIN PAGE ================= */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen font-sans">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Shahala Rahshima A</h1>

          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#about">About</a>
            <a href="#education">Education</a>
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
        <div>
          <p className="uppercase tracking-widest text-gray-400">Hello, I am</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4">
            Shahala Rahshima A
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Python Developer | AI/ML Enthusiast
          </p>
          <p className="mt-6 max-w-2xl text-gray-300">
            Multimedia and Web Technology student and a fresher, actively working
            on projects to strengthen my skills. Passionate about Python and
            Django development, with a strong interest in AI and Machine Learning.
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
        className="bg-neutral-900 py-24"
      >
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">Education</h3>
          <div className="space-y-6">
            <div className="border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold text-lg">
                BSc Multimedia & Web Technology (AI & Robotics)
              </h4>
              <p className="text-gray-400">Nilgiri College of Arts and Science</p>
            </div>
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
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-white/10 rounded-xl p-6"
            >
              <h4 className="font-semibold">{c.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{c.org}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

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

      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 Shahala Rahshima A
      </footer>
    </main>
  );
}
