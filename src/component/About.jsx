import React from "react";

const techs = [
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white text-gray-800 px-6 py-24 flex flex-col items-center max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold mb-10 text-blue-600 text-center">
        About Me
      </h2>

      <div className="text-lg leading-relaxed text-center max-w-4xl mb-12">
        <p className="mb-6">
          I am an Electronics, Communication, and Information Engineer passionate about crafting modern, responsive web applications. Skilled in React, Django, SQL, and Python, I blend solid engineering fundamentals with creative problem-solving to deliver efficient and intuitive digital experiences.
        </p>
        <p>
          My technical background enhances my analytical mindset, and I’m continuously exploring new technologies while refining my skills through hands-on projects and collaboration.
        </p>
      </div>

      <h3 className="text-3xl font-semibold mb-8 text-gray-900 text-center ">
        Technologies I Work With
      </h3>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 w-full justify-items-center">
        {techs.map(({ name, icon }) => (
          <li
            key={name}
            title={name}
            className="flex flex-col items-center cursor-default transform transition-transform hover:scale-110"
          >
            <div className="w-20 h-20 bg-blue-50 rounded-full shadow-md flex items-center justify-center mb-3">
              <img src={icon} alt={`${name} icon`} className="w-12 h-12" />
            </div>
            <span className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors">
              {name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;
