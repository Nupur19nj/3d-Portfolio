import React from 'react'
import {motion} from "framer-motion"
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import isro from "./Timeline/isro.png"
import gdsc from "./Timeline/gdsc.png"
import iiitv from "./Timeline/iiitv.png"
import link from "./Timeline/link.png"
import git from "./Timeline/git.png"
import leet from "./Timeline/leet.png"
import res from "./Timeline/resume.png"
import css from "./Timeline/css.gif"
import figma from "./Timeline/figma.png"
import github from "./Timeline/github.png"
import html from "./Timeline/html.gif"
import java from "./Timeline/java.png"
import node from "./Timeline/node.png"
import postgre from "./Timeline/postgre.png"
import python from "./Timeline/python.png"
import reactjs from "./Timeline/reactjs.gif"
import sql from "./Timeline/sql.png"
import solidity from "./Timeline/solidity.png"
import tail from "./Timeline/tail.png"

import { useState } from 'react';
import emailjs from 'emailjs-com';
const Section =(props)=>{
    const {children}=props;
    return (
    <motion.section className='h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center items-start'
     initial={{
        opacity:0,
        y:50,
     }}
     whileInView={{
        opacity:1,
        y:0,
        transition:{
            duration:1,
            delay:0.6,
        }
     }}
    >
       {children} 
    </motion.section>)
}
export const Interface = (props) => {
  const {setSection} = props
  return (
   <>
   <div className='flex flex-col items-center w-screen'>
    <AboutSection setSection={setSection} />
    <SkillsSection/>
    <ProjectsSection/>
    <EducationExperienceSection/>
   <ContactSection/>
   </div>
   </>
  )
}

const AboutSection = ({ setSection }) => {
  return (
    <Section>
      <h1 className='text-6xl font-extrabold leading-snug font-black'>
        Hi! I'm
        <br />
        <span className='bg-white px-1 italic'>Nupur Jain</span>
      </h1>
      <motion.p
        className='text-lg text-gray-600 mt-4'
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 1.6,
          },
        }}
      >
        <p className='text-semibold'>
          Passionate programmer and full-stack developer, <br />adept at turning ideas into polished digital solutions. <br />With a knack for coding excellence and a hunger for <br />innovation, I'm driven to tackle challenges head-on <br /> and craft seamless user experiences.<br /> Eager to collaborate on exciting projects and contribute<br /> to impactful tech ventures.
          <br />
        </p>
        <div className="flex items-center mt-4">
          {/* GitHub */}
          <a href="https://github.com/Nupur19nj" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src={git} alt="github" className="w-8 h-8" />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/nupur-jain-097958224/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src={link} alt="Linkedin" className="w-8 h-8" />
          </a>
          {/* LeetCode */}
          <a href="https://leetcode.com/u/Nupur_19/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src={leet} alt="LeetCode" className="w-8 h-8" />
          </a>
          <a href="https://leetcode.com/u/Nupur_19/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src={res} alt="LeetCode" className="w-8 h-8" />
          </a>
        </div>
        <motion.button
          onClick={() => setSection(4)}
          className='bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-8'
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 2.5,
            },
          }}
        >
          Contact Me
        </motion.button>
      </motion.p>
    </Section>
  );
};


const Skills=[
{
    title:"Skills/cpp.png",
},
{
  title:"Skills/js.gif",
},
{
  title:css,
},
{
  title:"Skills/md.png",
},
{
  title:sql,
},
{
  title:python,
},
{
  title:java,
},
{
  title:postgre,
},
{
  title:reactjs,
},
{
  title:node,
},
{
  title:"Skills/ex.png",
},
{
  title:html,
},
{
  title:github,
},
{
  title:solidity,
},
{
  title:tail,
},
{
  title:figma,
},
]

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"}>
        <h2 className="text-5xl font-bold text-white">Skills</h2>
        <div
          className="mt-8 grid grid-rows-4 grid-flow-col gap-4"
        >
          {Skills.map((skills, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1 + index * 0.2,
                },
              }}
            >
              <motion.img
                src={skills.title}
                alt={`Skill ${index}`}
                className="w-16 h-16"
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 1 + index * 0.2,
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  y: -10,
                  transition: {
                    duration: 0.3,
                  },
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const EducationExperienceSection = () => {
  return (
    <motion.section
      className="h-screen w-full p-8 mx-auto flex flex-col justify-center items-center"
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
      
      <div className="relative flex flex-col items-center w-full">
        {/* <div className="absolute w-1 bg-blue-800 h-full left-1/2 transform -translate-x-1/2"></div> */}
        
        <div className="timeline-item mb-8 flex justify-between items-center w-full px-40">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-white shadow-xl w-20 h-20 rounded-full">
            <img src={isro} alt="" />
          </div>
          <div className="order-1 bg-yellow-500 text-white rounded-lg shadow-xl w-4/12 px-6 py-4 mr-40">
            <h3 className="text-2xl font-semibold">Software Developer</h3>
            <p className="text-lg">ISRO Safe Ship Navigation</p>
            <p className="text-base">2023 - present</p>
          </div>
        </div>
        
        <div className="timeline-item mb-8 flex justify-between items-center w-full px-40 flex-row-reverse">
  <div className="order-1 w-5/12"></div>
  <div className="z-20 flex items-center order-1 bg-white shadow-xl w-20 h-20 rounded-full" style={{ marginLeft: '60px' }}>
  <img src={gdsc} alt="" />
  </div>
  <div className="order-1 bg-pink-500 text-white rounded-lg shadow-xl w-4/12 px-6 py-4 ml-60">
    <h3 className="text-2xl font-semibold">Women-in-Tech Co-Lead</h3>
    <p className="text-lg">GDSC IIITV</p>
    <p className="text-base">2023-present</p>
  </div>
</div>

        
        <div className="timeline-item mb-8 flex justify-between items-center w-full px-40">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-white shadow-xl w-20 h-20 rounded-full">
          <img src={iiitv} alt="" />
          </div>
          <div className="order-1 bg-blue-500 text-white rounded-lg shadow-xl w-4/12 px-6 py-4 mr-40">
            <h3 className="text-2xl font-semibold">Bachelor's Degree in Information Technology</h3>
            <p className="text-lg">Indian Institute of Information Technology Vadodara</p>
            <p className="text-base">2021 - Present</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};





const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const senderName = formData.get('from_name');
    const senderEmail = formData.get('from_email');
  
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_USER_ID,
      {
        from_name: senderName,
        from_email: senderEmail
      }
    )
    .then((result) => {
      console.log(result.text);
      setSubmitted(true);
      // Clear the form
      e.target.reset();
    }, (error) => {
      console.error(error.text);
      // Add error handling logic here
    });
  };
  

  return (
    <Section>
      <h2 className="text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4" role="alert">
            <p className="font-bold">Success!</p>
            <p>Your message has been sent successfully.</p>
          </div>
        )}
        <form onSubmit={sendEmail}>
          <label htmlFor="name" className="font-medium text-gray-900 block mb-1">Name</label>
          <input
            type="text"
            name="from_name"
            id="from_name"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label htmlFor="email" className="font-medium text-gray-900 block mb-1 mt-8">Email</label>
          <input
            type="email"
            name="from_email"
            id="from_email"
            className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <label htmlFor="message" className="font-medium text-gray-900 block mb-1 mt-8">Message</label>
          <textarea
            name="message"
            id="message"
            className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
          />
          <button type="submit" className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16">
            Submit
          </button>
        </form>
      </div>
    </Section>
  );
};
