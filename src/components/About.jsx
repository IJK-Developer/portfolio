// import React from 'react';

// const About = () => {
//   return (
    
//     <section className="min-h-screen flex items-center justify-between px-8 py-50 about-section">


//       {/* Left side content */}
//       <div className="w-full md:w-1/2 text-left pl-10">
//         <h2 className="text-5xl sm:text-7xl font-bold text-white mb-4">about.</h2>
//         <p className="text-lg sm:text-xl text-gray-300 mb-6">
//           I'm a Web Developer based in sunny Sydney, Australia.
//         </p>
//         <p className="text-lg sm:text-xl sm:font-light text-gray-400">
//         Since 2005, I've been passionate about turning complex code into seamless, user-friendly, and responsive websites.
// When I'm not coding, you can find me exploring new technologies, optimizing performance, or experimenting with new web development frameworks.
//         </p>
//       </div>

//       {/* Right side image */}
//       <div className="w-full md:w-1/2 flex justify-center md:justify-end pr-10">
//         <img
//           src="src/assets/young-handsome-man-posing-with-hat.jpg" // Replace with the correct image URL
//           alt="Profile"
//           className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-gray-700"
//         />
//       </div>
//     </section>
//   );
// };

// export default About;
import React, { useEffect, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect when the About section is in view
  const handleScroll = () => {
    const aboutSection = document.getElementById("about-section");
    const rect = aboutSection.getBoundingClientRect();
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

  return (
    <section
      id="about-section"
      className={`min-h-screen flex flex-col md:flex-row items-center justify-between text-white py-40 px-20 bg-black relative overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Left side content */}
      <div className="text-center md:text-left max-w-3xl md:w-3xl">
         <h6 className='text-[#bfbab9e7] font-medium'>Know About Me</h6>
        <h2 className="text-5xl sm:text-5xl lg:text-6xl font-medium mb-4 text-white glow-text">
          Full-Stack Developer and a little bit of{" "}
          <span className="text-gradient text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 font-['Cookie'] text-8xl text-glow-gradient px-0.5 py-0.5 font-medium">
         everything
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-[#bfbab9e7] mb-6 font-light">
          I'm Dave Hellnah, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I’m always eager to learn more.
        </p>
        <p className="text-base sm:text-lg text-[#bfbab9e7] mb-6 font-light">
          When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
        </p>
        <div className="flex justify-center md:justify-start gap-6">
          <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
          <a href="https://github.com" className="text-gray-300 hover:text-white">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://twitter.com" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
        <div className="mt-4">
          <a
            href="#"
            className="text-white font-medium text-xl py-2 px-6 rounded-full border-1 border-[#ffffff3e] hover:bg-white hover:text-black transition duration-300"
          >
            More about me
          </a>
        </div>
      </div>

      {/* Right side image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
        <img
          src="src/assets/young-handsome-man-posing-with-hat.jpg" // Replace with your profile image
          alt="Profile"
          className="md:max-w-xs rounded-full border-4 border-gray-800 shadow-xl object-cover"
        />
      </div>
    </section>
  );
};

export default AboutSection;

