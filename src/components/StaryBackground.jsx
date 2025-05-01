import Particles from '@tsparticles/react';
import React from 'react';

import { loadFull } from 'tsparticles';


const StarryBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    preset: 'stars', // Use the stars preset
    particles: {
      number: {
        value: 1000, // Number of particles
        density: {
          enable: true,
          value_area: 600,
        },
      },
      color: {
        value: '#ffffff', // White color for stars
      },
      shape: {
        type: 'circle', // Circle particles
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: false,
        },
      },
      size: {
        value: { min: 1, max: 50 },
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 0.1,
          sync: false
        },
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        outMode: 'out',
        bounce: false,
      },
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      className="absolute top-0 left-0 w-full h-full "
    />
  );
};

export default StarryBackground;
