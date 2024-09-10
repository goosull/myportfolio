"use client";

import { useState, useEffect } from "react";

export default function Navbar({ activeSection, setActiveSection }) {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    const experienceSection = document.getElementById("experience");
    const projectsSection = document.getElementById("projects");

    const scrollPosition = window.scrollY + window.innerHeight / 2;

    if (scrollPosition >= projectsSection.offsetTop) {
      setActiveSection("projects");
    } else if (scrollPosition >= experienceSection.offsetTop) {
      setActiveSection("experience");
    } else {
      setActiveSection("about");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "about" ? "active" : ""
            }`}
            href="#about"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
              About
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "experience" ? "active" : ""
            }`}
            href="#experience"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
              Experience
            </span>
          </a>
        </li>
        <li>
          <a
            className={`group flex items-center py-3 ${
              activeSection === "projects" ? "active" : ""
            }`}
            href="#projects"
          >
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
              Projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
