import Navigation from "@/components/Navigation";

export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Python",
    "Node.js",
    "Tailwind",
    "MySQL",
    "HTML5",
    "Git",
    "GraphQL",
    "GitHub",
    "Java",
    "Django",
    "PHP",
    "Laravel",
    "Three.js",
    "C++"
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Navigation />

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-7xl font-bold mb-16" style={{ fontFamily: 'Space Grotesk' }}>
          TECH_STACK
        </h2>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`border-3 border-white px-6 py-8 font-bold text-center cursor-pointer transition hover:shadow-lg ${
                skill === "PHP" ? "bg-pink-400 text-black border-pink-400" : "bg-black hover:bg-gray-900"
              }`}
              style={{
                boxShadow: skill === "PHP" ? "4px 4px 0px rgba(255, 111, 145, 0.5)" : "4px 4px 0px rgba(255, 255, 255, 0.2)"
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
