import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect when the Projects section is in view
  const handleScroll = () => {
    const projectsSection = document.getElementById("projects-section");
    const rect = projectsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: 'My Portfolio Design',
      description: 'Web Design | UI Design | Visual Identity',
      imageUrl: 'path-to-your-image.jpg',
      tags: ['Web Design', 'UI Design', 'Visual Identity'],
    },
    {
      title: 'Preflight (YC19) SaaS',
      description: 'SaaS Platform | Design System | UX/UI Design',
      imageUrl: 'path-to-your-image.jpg',
      tags: ['SaaS Platform', 'Design System', 'UX/UI Design'],
    },
    {
      title: 'Preflight (YC19) SaaS',
      description: 'SaaS Platform | Design System | UX/UI Design',
      imageUrl: 'path-to-your-image.jpg',
      tags: ['SaaS Platform', 'Design System', 'UX/UI Design'],
    },
    // Add more projects here
  ];

  return (
    <section
      id="projects-section"
      className={`py-12 bg-black text-white px-6 md:px-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center glow-text py-8">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-700 ${isVisible ? `translate-y-0 opacity-100` : `translate-y-10 opacity-0`} hover:scale-105`}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-56 object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
              <h3 className="text-xl font-bold glow-text">{project.title}</h3>
              <p className="text-sm text-[#bfbab9e7] mb-4">{project.description}</p>
              <div className="flex gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text py-1 px-2 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#"
          className="text-xl font-semibold text-white border-2 border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
