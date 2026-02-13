export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Left: Logo Triangle */}
      <div className="absolute top-6 left-6 pointer-events-auto">
        <button
          onClick={() => scrollToSection("home")}
          className="border-4 border-black px-5 py-3 font-bold text-sm cursor-pointer hover:bg-gray-100 transition bg-white shadow-brutalist"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          ▢ BESHOY.exe
        </button>
      </div>

      {/* Center: Nav Links Triangle */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 pointer-events-auto">
        <div className="bg-white border-4 border-black shadow-brutalist flex gap-6 px-8 py-3 font-bold text-xs tracking-wider">
          <button
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            /ABOUT
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            /SKILLS
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            /LOGS
          </button>
          <button
            onClick={() => scrollToSection("works")}
            className="cursor-pointer hover:text-yellow-400 transition"
          >
            /WORK
          </button>
        </div>
      </div>

      {/* Right: Hire Me Button Triangle */}
      <div className="absolute top-6 right-6 pointer-events-auto">
        <button
          onClick={() => scrollToSection("contact")}
          className="bg-yellow-300 border-4 border-black px-6 py-3 font-bold text-sm shadow-brutalist hover:bg-yellow-200 transition"
        >
          HIRE ME
        </button>
      </div>
    </nav>
  );
}
