
// import React from 'react';

// function Navbar() {
//   return (
  

  
//       <div className='flex justify-between items-center mx-auto w-full fixed bg-opacity-50 backdrop-blur-lg px-[10rem] py-7'>
//         {/* Left side: Profile and Website name */} 
//         <div className="flex items-center cursor-pointer">
//           <span className="text-white font-extrabold text-2xl">HELLNAH</span>
//           <span className="text-[#fca311] font-extrabold text-xl pt-1">.DEV</span>
//         </div>

//         {/* Middle: Navigation links */}
//         <nav className="space-x-15 font-light">
//           <a href="#" className="text-[#e5e5e5]  hover:text-[#fca311] cursor-pointer" >About Me</a>
//           <a href="#" className="text-gray-200 hover:text-[#fca311]">Projects</a>
//           <a href="#" className="text-gray-200 hover:text-[#fca311]">Experience</a>
//           <a href="#" className="text-gray-200 hover:text-[#fca311]">Skills</a>
//           <a href="#" className="text-gray-200 hover:text-[#fca311]">Contacts</a>
//         </nav>
//       </div>
 
//   );
// }

// export default Navbar;

// src/components/Navbar.jsx
// Navbar.js
// Navbar.js
import './navbar.css'
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setReload(true);
    const timer = setTimeout(() => {
      setReload(false);
    }, 2500); // Reset animation after 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full text-white p-6 z-50 backdrop-blur-xs bg-opacity-1 px-20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div  className={` bg-cover ${reload ? 'fade-in' : ''}`}>
          <img src="src/assets/logo.png" alt="logo " className='w-35 h-10 object-cover relative right-12' />  
        </div>
        
        {/* Navbar Links */}
        <div
          className={`font-light hidden md:flex space-x-6 rounded-full bg-[#a19c9c52] bg-opacity-30 backdrop-blur-[200px] border-[1px] border-[#dcdcdc2a] ${
            reload ? 'fade-in' : ''
          }`}
        >
          <a
            href="#home"
            className="text-[#bfbab9e7]  hover:text-[#d7d2d1] transition px-4 py-2 rounded-full"
          >
            Home
          </a>
          <a
            href="#work"
            className="text-[#bfbab9e7] hover:text-[#d7d2d1] transition px-4 py-2 rounded-full"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-[#bfbab9e7] hover:text-[#d7d2d1] transition px-4 py-2 rounded-full"
          >
            About
          </a>
          <a
            href="#blog"
            className="text-[#bfbab9e7] hover:text-[#d7d2d1] transition px-4 py-2 rounded-full"
          >
            Blog
          </a>
          <a
            href="#more"
            className="text-[#bfbab9e7] hover:text-[#d7d2d1] transition px-4 py-2 rounded-full"
          >
            More
          </a>
        </div>
        
        {/* Book a Call Button */}
        <div className={`hidden md:block ${reload ? 'fade-in' : ''}`}>
          <a
            href="#book"
            className="font-light px-6 py-2 border border-[#ffffff3e] text-white rounded-full hover:text-[#999] transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
