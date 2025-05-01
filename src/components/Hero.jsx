
import React, { useEffect, useState } from 'react';

import './hero.css';
import StarryBackground from './StaryBackground';
import SplineApp from './SplineApp';
import Moon from './Moon';

const Hero = () => {
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setReload(true);
        // Reset the animation after it completes (optional)
        const timer = setTimeout(() => {
            setReload(false);
        }, 2500); // Reset after animation duration
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className="min-h-screen flex items-center justify-center flex-col text-center text-white relative overflow-hidden pt-26 px-17 md:px-34 hero-section"
        >
        {/* <StarryBackground/> */}
      <SplineApp/>
     <div className='hero-overlay'></div>
            {/* <ParticlesBackground className={`particles ${reload ? 'animate' : ''}`} /> */}

            {/* Hero Content */}
            <div className={` hero-text ${reload ? 'fade-in' : ''}`}>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair mb-4">
                    I help founders turn ideas <br />
                    <span className="font-bold">into seamless </span>
                    <span className="text-4xl sm:text-5xl lg:text-8xl font-light font-['Cookie'] text-gradient-top">
                        digital experiences
                    </span>
                </h1>
            </div>

            <div className={`hero-contact ${reload ? 'fade-in' : ''} `}>
                <p className="text-2xl font-inter my-8 text-gradient-down flex items-center relative">
                    Hello, I'm Dave Hellnah
                   
                        <img
                            src="src/assets/young-handsome-man-posing-with-hat.jpg" // Replace with your image path
                            alt="profile"
                            className="w-16 h-10 rounded-full object-cover mx-2 transform transition duration-300 ease-in-out hover:scale-110 image-capsule"
                        />
                        {/* Hand emoji will only show when the image is hovered */}
                      
                            <img src="src/assets/wave.png" alt="" className='absolute h-10 hand-wave' />
                       
                    
                    a Full Stack Developer
                </p>
            </div>


            <div className={`flex gap-9 justify-center items-center hero-button ${reload ? 'fade-in' : ''}`}>
                <button className= "font-medium bg-transparent border-1 border-[#ffffff37] text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
                    Let's Connect
                </button>
                <p className="font-light text-[#bfbab9e7]">hello@davehellnah.com</p>
            </div>
            {/* <Moon/> */}
        </section>
    );
};

export default Hero;
