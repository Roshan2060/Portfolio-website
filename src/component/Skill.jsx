import React from "react";

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend",
    items: ["Django", "Python"],
  },
  {
    title: "Database",
    items: ["SQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

function Skill() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white text-gray-800 px-8 py-24 flex flex-col justify-center items-center max-w-6xl mx-auto"
    >
      <h2 className="text-5xl font-bold mb-12 text-blue-600 text-center">
        My Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-gray-50 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
          >
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              {skill.title}
            </h3>
            <ul className="space-y-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="text-lg text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
