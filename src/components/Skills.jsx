import React from "react";

const Skills = () => {
  const techStack = [
    { name: "HTML", icon: "https://img.icons8.com/ios/50/ffffff/html-5.png" },
    { name: "CSS", icon: "https://img.icons8.com/ios/50/ffffff/css3.png" },
    { name: "JavaScript", icon: "https://img.icons8.com/ios/50/ffffff/javascript.png" },
    { name: "TypeScript", icon: "https://img.icons8.com/ios/50/ffffff/typescript.png" },
    { name: "ReactJS", icon: "https://img.icons8.com/ios/50/ffffff/react-native.png" },
    { name: "NextJS", icon: "https://img.icons8.com/ios/50/ffffff/nextjs.png" },
    { name: "TailwindCSS", icon: "https://img.icons8.com/ios/50/ffffff/tailwindcss.png" },
    { name: "NodeJS", icon: "https://img.icons8.com/ios/50/ffffff/nodejs.png" },
    { name: "MongoDB", icon: "https://img.icons8.com/ios/50/ffffff/mongodb.png" },
    { name: "GitHub", icon: "https://img.icons8.com/ios/50/ffffff/github.png" },
    { name: "Vercel", icon: "https://img.icons8.com/ios/50/ffffff/vercel.png" },
    { name: "Postman", icon: "https://img.icons8.com/ios/50/ffffff/postman.png" },
    { name: "Java", icon: "https://img.icons8.com/ios/50/ffffff/java.png" },
  ];

  return (
    <section className="bg-black py-16 px-6 text-white mt-30">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">My Tech Stack</h2>
        <p className="text-xl">I constantly try to improve</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {techStack.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center text-center">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 mb-2"
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
