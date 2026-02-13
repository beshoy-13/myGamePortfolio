import Navigation from "@/components/Navigation";

export default function Works() {
  const projects = [
    {
      title: "STOCKEASY",
      description: "An online stock market platform with stock analysis, chatbot and admin panel.",
      tags: ["Python", "Streamlit", "Redis", "WebSockets", "MySQL", "Finance API"]
    },
    {
      title: "RESUMEIQ",
      description: "AI Resume Analyzer & Builder which helps users check resume and build new resume.",
      tags: ["Streamlit", "MySQL", "Gemini API"]
    }
  ];

  return (
    <div className="min-h-screen bg-yellow-300 pt-24">
      <Navigation />

      <section className="max-w-6xl mx-auto px-6 py-20">
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

              <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                {project.title}
              </h3>

              <p className="text-base mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="border-2 border-black px-3 py-1 text-sm font-bold bg-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
