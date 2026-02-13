import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", details: "" });
  };

  const skills = [
    "React",
    "Python",
    "Bootstrap",
    "C++",
    "Git",
    "CSS",
    "JavaScript",
    "HTML5",
    "Docker",
    "Lua",
    "UI/UX",
    "Vite"
  ];

  const projects = [
    {
      title: "BIBLIOS",
      description: "Full-featured digital bookstore supporting physical books, e-books, and audiobooks. Includes persistent user profiles, wishlists, and carts stored in the database.",
      tags: ["React", "Vite", "Firebase", "Firestore", "Context API"]
    },
    {
      title: "KALMNI",
      description: "Cross-platform chat system with multithreaded server architecture. Supports concurrent clients, real-time broadcasting, and structured connection handling.",
      tags: ["C++", "Boost.Asio", "ImGui", "TCP/IP", "Multithreading"]
    },
    {
      title: "VOICE-CONTROLLED ARDUINO CAR",
      description: "Bluetooth-controlled robotic car operated via voice commands. Implemented motor control logic and wireless communication from scratch.",
      tags: ["Arduino", "C++", "HC-05", "L298N", "Embedded Systems"]
    },
    {
      title: "AUDIO PLAYER APPLICATION",
      description: "Desktop audio player with waveform display, speed control, playlist management, and markers.",
      tags: ["C++", "JUCE", "OOP", "Audio Processing"]
    },
    {
      title: "MATRIX-BASED PHOTO EDITOR",
      description: "Image processing application using matrix operations to apply filters and transformations at pixel level.",
      tags: ["C++", "Linear Algebra", "Image Processing"]
    }
  ];

  const experiences = [
    {
      title: "Freelance Frontend Developer",
      company: "Freelance",
      period: "2024 – Present",
      tasks: [
        "Developed responsive web applications for clients",
        "Skills: React, JavaScript, Tailwind, API Integration"
      ],
      color: "bg-blue-500"
    },
    {
      title: "Frontend Developer Intern",
      company: "Elevvopaths",
      period: "2024",
      tasks: [
        "Built responsive UI components and pages",
        "Skills: React, JavaScript, CSS"
      ],
      color: "bg-green-500"
    },
    {
      title: "Frontend Developer Intern",
      company: "Apexcify",
      period: "2024",
      tasks: [
        "Developed modern frontend interfaces",
        "Skills: React, TypeScript, Tailwind"
      ],
      color: "bg-yellow-500"
    },
    {
      title: "React Intern",
      company: "DEPI",
      period: "2024 – 2025",
      tasks: [
        "Completed hands-on React training and projects",
        "Skills: React, Redux, Hooks"
      ],
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="pt-24 pb-20 px-6 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Decorative shapes */}
        <div className="absolute top-40 left-10 w-32 h-32 bg-blue-600 opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pink-400 opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 mb-8 border-2 border-green-500 px-4 py-2 bg-white">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-bold text-sm tracking-wider">SYSTEM STATUS: ONLINE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Space Grotesk' }}>
            FRONTEND
          </h1>
          <h1 
            className="text-7xl md:text-8xl font-bold mb-8 leading-tight"
            style={{
              fontFamily: 'Space Grotesk',
              WebkitTextStroke: '2px #111111',
              WebkitTextFillColor: 'transparent'
            } as React.CSSProperties}
          >
            DEVELOPER
          </h1>

          {/* Yellow Highlight Box */}
          <div className="highlight-yellow inline-block mb-8 max-w-2xl">
            <p className="text-lg font-bold">I build digital products that refuse to be boring.</p>
          </div>

          {/* Tech Stack */}
          <p className="text-lg font-bold mb-12 tracking-wide">
            React • C++ • Bootstrap • Linux
          </p>

          {/* Buttons */}
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="bg-black text-white border-3 border-black px-8 py-3 font-bold shadow-brutalist hover:bg-gray-800 transition">
              VIEW DATABASE
            </button>
            <button className="bg-white text-black border-3 border-black px-8 py-3 font-bold shadow-brutalist hover:bg-gray-100 transition">
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="bg-white pt-20 pb-20">
        {/* Custom Marquee Ticker - Full Width */}
        <div className="bg-blue-600 text-white py-4 overflow-hidden border-b-4 border-black mb-16">
          <div className="flex" style={{
            animation: 'marquee 30s linear infinite',
            width: 'fit-content'
          }}>
            <span className="font-bold text-lg whitespace-nowrap">OPEN FOR WORK /// FRONTEND DEVELOPMENT /// UI/UX DESIGN /// REACT EXPERT /// </span>
            <span className="font-bold text-lg whitespace-nowrap">OPEN FOR WORK /// FRONTEND DEVELOPMENT /// UI/UX DESIGN /// REACT EXPERT /// </span>
            <span className="font-bold text-lg whitespace-nowrap">OPEN FOR WORK /// FRONTEND DEVELOPMENT /// UI/UX DESIGN /// REACT EXPERT /// </span>
          </div>
          <style>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-33.333%);
              }
            }
          `}</style>
        </div>

        {/* Content with padding */}
        <div className="px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left: Profile Image */}
              <div className="border-4 border-black bg-gray-200 aspect-square overflow-hidden shadow-brutalist">
                <img
                  src="/images/pfp.jpg"
                  alt="Beshoy Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right: Content */}
              <div>
                <h2 className="text-6xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk' }}>
                  WHO AM I?
                </h2>

                <p className="text-lg mb-8 leading-relaxed font-medium">
                  I am Beshoy Fomail. A frontend developer who crafts beautiful, responsive web experiences. I believe in clean code and creative design.
                </p>

                {/* Bullet Points */}
                <ul className="space-y-4 mb-12 text-base font-medium">
                  <li className="flex gap-3">
                    <span className="font-bold">▪</span>
                    <span>Specialized in Frontend Development & UI/UX</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">▪</span>
                    <span>Expert in React, Bootstrap, and responsive design</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold">▪</span>
                    <span>2+ years of building pixel-perfect web applications</span>
                  </li>
                </ul>

                {/* Status Badges */}
                <div className="flex gap-4 flex-wrap">
                  <div className="border-3 border-black px-4 py-2 font-bold text-sm">
                    [ LOCATION: REMOTE ]
                  </div>
                  <div className="border-3 border-black px-4 py-2 font-bold text-sm bg-green-300">
                    [ STATUS: AVAILABLE ]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl font-bold mb-16" style={{ fontFamily: 'Space Grotesk' }}>
            TECH_STACK
          </h2>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`border-3 border-white px-6 py-8 font-bold text-center cursor-pointer transition hover:shadow-lg ${
                  skill === "React" ? "bg-blue-500 text-white border-blue-500" : "bg-black hover:bg-gray-900"
                }`}
                style={{
                  boxShadow: skill === "React" ? "4px 4px 0px rgba(41, 98, 255, 0.5)" : "4px 4px 0px rgba(255, 255, 255, 0.2)"
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WORKS SECTION ===== */}
      <section id="works" className="bg-yellow-300 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-7xl font-bold mb-16" style={{ fontFamily: 'Space Grotesk' }}>
            SELECTED WORKS
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white border-4 border-black p-8 relative shadow-brutalist hover:shadow-lg transition"
              >
                {/* Green Arrow Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 flex items-center justify-center font-bold text-white">
                  →
                </div>

                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                  {project.title}
                </h3>

                <p className="text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="border-2 border-black px-3 py-1 text-xs font-bold bg-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section id="experience" className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            EXPERIENCE
            <span className="text-red-500">_LOG</span>
          </h2>

          {/* Timeline */}
          <div className="mt-16 space-y-8 relative">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative fade-in-up" style={{ animationDelay: `${idx * 0.2}s` }}>
                {/* Timeline Dot with hover effect */}
                <div 
                  className={`absolute -left-6 top-6 w-5 h-5 ${exp.color} border-3 border-black cursor-pointer transition-all duration-300 hover:scale-125`}
                  style={{ marginLeft: '-2px' }}
                ></div>

                {/* Experience Card with hover effect */}
                <div className="border-4 border-black bg-white p-8 ml-8 shadow-brutalist transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 group">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Space Grotesk' }}>
                    {exp.title}
                  </h3>

                  <p className="text-sm font-bold text-gray-600 mb-1 group-hover:text-gray-800 transition-colors">{exp.company}</p>
                  <p className="text-sm font-bold text-gray-600 mb-6 group-hover:text-gray-800 transition-colors">{exp.period}</p>

                  {exp.tasks.length > 0 && (
                    <ul className="space-y-2">
                      {exp.tasks.map((task, taskIdx) => (
                        <li key={taskIdx} className="flex gap-3 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: `${taskIdx * 0.1}s` }}>
                          <span className="font-bold">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LET'S TALK SECTION ===== */}
      <section id="contact" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Large bordered container */}
          <div className="border-6 border-black bg-white p-12 shadow-brutalist fade-in-up">
            {/* Header with yellow accent */}
            <div className="flex items-center gap-4 mb-12 flex-wrap">
              <h2 className="text-5xl font-bold" style={{ fontFamily: 'Space Grotesk' }}>
                LET'S
              </h2>
              <div className="bg-yellow-300 border-3 border-black px-4 py-2 font-bold text-sm shadow-brutalist">
                START A PROJECT
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12">
              {/* Left: Description and Contact */}
              <div className="md:w-1/3">
                <h3 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk' }}>
                  TALK
                  <br />
                  CODE.
                </h3>

                <p className="text-sm leading-relaxed mb-8 text-gray-700">
                  I am currently available for freelance work and open to full-time opportunities.
                </p>

                {/* Contact Info with Icons */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-200">
                    <div className="w-10 h-10 bg-black flex items-center justify-center border-2 border-black flex-shrink-0">
                      <span className="text-white text-lg">✉</span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">beshoy.f.labib@outlook.com</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right: Form */}
              <form onSubmit={handleSubmit} className="md:w-2/3 space-y-4">
                {/* Name/Company */}
                <div>
                  <label className="font-bold text-xs mb-2 block tracking-wider">IDENTITY</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="NAME / COMPANY"
                    className="w-full border-3 border-black px-4 py-3 font-medium text-sm focus:outline-none focus:bg-yellow-100 transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-bold text-xs mb-2 block tracking-wider">COORDINATES</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL ADDRESS"
                    className="w-full border-3 border-black px-4 py-3 font-medium text-sm focus:outline-none focus:bg-yellow-100 transition"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-bold text-xs mb-2 block tracking-wider">TRANSMISSION</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="PROJECT DETAILS..."
                    rows={5}
                    className="w-full border-3 border-black px-4 py-3 font-medium text-sm focus:outline-none focus:bg-yellow-100 transition"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white border-3 border-blue-600 px-6 py-4 font-bold text-sm shadow-brutalist hover:bg-blue-700 hover:scale-105 transition-all duration-200"
                >
                  TRANSMIT DATA
                </button>
              </form>
            </div>
          </div>

          {/* Green accent line */}
          <div className="h-2 bg-green-500 mt-0"></div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Left: Brand with Instagram Icon */}
            <div>
              <div className="w-16 h-16 border-3 border-white rounded-full overflow-hidden mb-6 hover:scale-110 transition-transform duration-300">
                <img src="/images/footerpfp.jpg" alt="Instagram" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                BESHOY.
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Designing for the future with the aesthetics of the past. No cookies, no trackers, just code.
              </p>
            </div>

            {/* Spacer */}
            <div></div>

            {/* Center: Sitemap */}
            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider">SITEMAP</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <button
                    onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition cursor-pointer hover:translate-x-1 duration-200"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition cursor-pointer hover:translate-x-1 duration-200"
                  >
                    Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition cursor-pointer hover:translate-x-1 duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-white transition cursor-pointer hover:translate-x-1 duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Right: Social */}
            <div>
              <h4 className="font-bold mb-4 text-sm tracking-wider">SOCIALS</h4>
              <div className="flex gap-4 text-lg">
                <a href="#" className="hover:scale-125 transition-transform duration-200 hover:text-blue-400">💻</a>
                <a href="#" className="hover:scale-125 transition-transform duration-200 hover:text-pink-400">📷</a>
                <a href="#" className="hover:scale-125 transition-transform duration-200 hover:text-blue-300">🔗</a>
                <a href="#" className="hover:scale-125 transition-transform duration-200 hover:text-blue-500">in</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
