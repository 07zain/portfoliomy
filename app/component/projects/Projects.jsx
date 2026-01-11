'use client';

import { Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const projectData = [
  {
    title: "Orlank Web Application",
    desc: "Built a responsive and scalable web application for Orlank Technology using React.js and modern web technologies.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
    ],
  },
  {
    title: "Destiny IT Services – Web Application",
    desc: "Built a responsive and interactive web application for Destiny IT Services with smooth animations and dynamic content.",
    tech: ["Next.js", "React Bootstrap", ],
  },
  {
    title: "Destiny IT Services – HRMS Portal",
    desc: "Secure HRMS portal allowing employees and admins to manage HR tasks efficiently with role-based login.",
    tech: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      
    ],
  },
 
  {
    title: "ReachInbox",
    desc: "Responsive inbox app built with React.js, TypeScript, Tailwind CSS, and Vite with API integration.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
     
    ],
  },
  {
    title: "QAAS – Quality Assessment & Analysis Software",
    desc: "Software for assessing and analyzing product/service quality with detailed reports and metrics.",
    tech: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
    
    ],
  },
  {
    title: "Office / College Automation CMS",
    desc: "Designed and developed intuitive UI for CMS with responsive and accessible layouts.",
    tech: [
      "React.js",
      "Tailwind CSS",
     
    ],
  },
];

const Projects = () => {
  return (
    <>
      <h5 className="mb-3">PROJECTS</h5>

      <Row className="g-3 mb-4">
        {projectData.map((project, index) => (
          <Col md={6} lg={4} key={index}>
            <ProjectCard
              title={project.title}
              desc={project.desc}
              tech={project.tech}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Projects;
