import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit (just alerts here)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (you can expand)
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    // For now, just alert the message
    alert(`Thank you, ${form.name}! Your message has been received.`);

    // Reset form
    setForm({ name: "", email: "", message: "" });

    // TODO: Add real submission logic here (backend, EmailJS, Formspree, etc)
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-white text-gray-800 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
      <p className="text-lg text-center mb-12 max-w-xl">
        Have a project or just want to say hi? Fill the form below and I’ll get back to you as soon as I can.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-6"
        noValidate
      >
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Social Links with brand colors and bigger icons */}
      <div className="mt-14 flex gap-12 text-4xl">
        <a
          href="mailto:rbhatt2060@gmail.com"
          className="flex items-center space-x-3 text-blue-600 hover:text-blue-800 transition-colors duration-300"
          aria-label="Email"
        >
          <FaEnvelope />
          <span className="text-lg font-medium select-text"></span>
        </a>

        <a
          href="https://github.com/Roshan2060"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-800 transition-colors duration-200"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/roshan-bhatt-92543b261/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-500 transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.facebook.com/roshan.bhatta.35728"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1877F2] hover:text-[#0F63D1] transition-colors duration-200"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/roshan.bhatta12/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E4405F] hover:text-[#C13584] transition-colors duration-200"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
