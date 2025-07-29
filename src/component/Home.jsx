import React from "react";
import profilePic from "/Users/roshan/Desktop/portfolio-website/src/assets/4cf67fa2-eec4-4621-8f88-dc538e55a1aa.jpeg"; // 👈 Replace with your actual image path
function Home() {
  return (
    <section
      id="home"
 className="min-h-screen bg-white text-gray-800 px-6 py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I’m Roshan Bhatt
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-md mx-auto md:mx-0">
            I’m an Electronics, Communication, and Information Engineer passionate about building modern, responsive web apps using React, Tailwind CSS, Django, and SQL to deliver efficient and seamless digital experiences.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Image */}
{/* Image */}
<div className="md:w-1/2 flex justify-center">
  <img
    src={profilePic}
    alt="Roshan Bhatt"
    className="w-72 h-72 md:w-80 md:h-80 object-cover object-top rounded-full shadow-xl border-4 border-blue-600"
  />
</div>

      </div>
    </section>
  );
}

export default Home;
