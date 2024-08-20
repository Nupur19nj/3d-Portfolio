import { useThree, useFrame } from "@react-three/fiber"
import {motion} from "framer-motion-3d"
import { atom, useAtom } from "jotai";
import { Image, Text } from "@react-three/drei";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
export const projects=[
  {
      title:"AI Image Generator",
      url: "https://github.com/Nupur19nj/AI_image_generator",
      Image: "Projects/ai.png",
      description: "Application that generates images using OpenAI api for given text."
  },
    {
        title:"CrossPay",
        url: "https://cross-border-payment.vercel.app/",
        Image: "Projects/cross.png",
        description: "Blockchain application for cross-border payments"
    },
    {
        title:"CareShare",
        url: "https://github.com/Nupur19nj/CareShare",
        Image: "Projects/Careshare.png",
        description: "Full stack charity application with blockchain integration for NGO's"
    },
    {
        title:"LMS",
        url: "https://github.com/Nupur19nj/Library-management_netbeans",
        Image: "Projects/lms.png",
        description: "Application that manages library online"
    },
    {
        title:"Youtube clone",
        url: "https://github.com/Nupur19nj/Youtube-clone",
        Image: "Projects/youtube.jpg",
        description: "Youtube's Clone that performs all fundamental operations"
    },
    
]

const Project = (props) => {
    const { project, highlighted } = props;
  
    const background = useRef();
    const bgOpacity = useMotionValue(0.4);
  
    useEffect(() => {
      animate(bgOpacity, highlighted ? 0.7 : 0.4);
    }, [highlighted]);
  
    useFrame(() => {
      background.current.material.opacity = bgOpacity.get();
    });
  
    return (
      <group {...props}>
        <mesh
          position-z={-0.001}
          onClick={() => window.open(project.url, "_blank")}
          ref={background}
        >
          <planeGeometry args={[3.8, 3]} />
          <meshBasicMaterial color="black" transparent opacity={0.4} />
        </mesh>
        <Image
          scale={[3.5, 1.8, 4]}
          url={project.Image}
          toneMapped={false}
          position-y={0.5}
        />
        <Text
          maxWidth={4}
          anchorX={"left"}
          anchorY={"top"}
          fontSize={0.3}
          position={[-1.8, -0.6, 0]}
        >
          {project.title.toUpperCase()}
        </Text>
        <Text
          maxWidth={3.7}
          anchorX="left"
          anchorY="top"
          fontSize={0.16}
          position={[-1.8, -1.05, 0]}
        >
          {project.description}
        </Text>
      </group>
    );
  };
  
  export const currentProjectAtom = atom(Math.floor(projects.length / 2));
  
  export const Projects = () => {
    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);
  
    return (
      <group position-y={-viewport.height * 2 }>
        {projects.map((project, index) => (
          <motion.group
            key={"project_" + index}
            position={[index * 2.5, 0, -3]}
            animate={{
              x: 0 + (index - currentProject) * 5,
              y: currentProject === index ? 0 : -2.5,
              z: currentProject === index ? - 1: -5,
              rotateX: currentProject === index ? 0 : -Math.PI / 3,
              rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
            }}
          >
            <Project project={project} highlighted={index === currentProject} />
          </motion.group>
        ))}
      </group>
    );
  };