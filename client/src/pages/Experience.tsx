import Navigation from "@/components/Navigation";

export default function Experience() {
  const experiences = [
    {
      title: "Freelance Full-Stack Developer",
      company: "Self Employed",
      period: "Nov 2023 – Present",
      tasks: [
        "Building responsive web apps (HTML, CSS, JS)",
        "Developing with React, Next.js, Node.js",
        "Creating custom client solutions"
      ],
      color: "bg-blue-500"
    },
    {
      title: "Data Entry Contract",
      company: "Injala India",
      period: "Aug 2023 – Nov 2023",
      tasks: [],
      color: "bg-green-500"
    },
    {
      title: "Project Manager",
      company: "Company Name",
      period: "Dec 2024 – Aug 2025",
      tasks: [],
      color: "bg-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <Navigation />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-6xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
          EXPERIENCE
          <span className="text-red-500">_LOG</span>
        </h2>

        {/* Timeline */}
        <div className="mt-16 space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Timeline Dot */}
              <div className={`absolute -left-6 top-6 w-4 h-4 ${exp.color} border-2 border-black`}></div>

              {/* Experience Card */}
              <div className="border-4 border-black bg-white p-8 ml-8 shadow-brutalist">
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk' }}>
                  {exp.title}
                </h3>

                <p className="text-sm font-bold text-gray-600 mb-1">{exp.company}</p>
                <p className="text-sm font-bold text-gray-600 mb-6">{exp.period}</p>

                {exp.tasks.length > 0 && (
                  <ul className="space-y-2">
                    {exp.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex gap-3 text-sm">
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
      </section>
    </div>
  );
}
