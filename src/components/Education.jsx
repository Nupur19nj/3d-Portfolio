import React from 'react';
import { motion } from 'framer-motion';

export const Education = () => {
  return (
    <motion.section
      className="h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center items-start"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      <h2 className="text-5xl font-bold mb-12">Education & Experience</h2>
      
      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 bg-green-500 h-full left-1/2 transform -translate-x-1/2"></div>
        
        <div className="timeline-item mb-8 flex justify-between items-center w-full transform rotate-2">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">1</h1>
          </div>
          <div className="order-1 bg-gray-800 text-white rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="text-2xl font-semibold">Bachelor's Degree in Computer Science</h3>
            <p className="text-lg">University of Science and Technology</p>
            <p className="text-base">2016 - 2020</p>
          </div>
        </div>
        
        <div className="timeline-item mb-8 flex justify-between items-center w-full flex-row-reverse transform -rotate-2">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-gray-800 text-white rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="text-2xl font-semibold">Software Engineer Intern</h3>
            <p className="text-lg">XYZ Tech Company</p>
            <p className="text-base">Summer 2019</p>
          </div>
        </div>
        
        <div className="timeline-item mb-8 flex justify-between items-center w-full transform rotate-2">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-green-500 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">3</h1>
          </div>
          <div className="order-1 bg-gray-800 text-white rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="text-2xl font-semibold">Full Stack Developer</h3>
            <p className="text-lg">ABC Startup</p>
            <p className="text-base">2020 - Present</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
