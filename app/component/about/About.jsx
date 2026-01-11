'use client';

import { Card } from "react-bootstrap";

const About = () => {
  return (
    <>
      <h5>ABOUT ME</h5>
      <Card className="shadow-sm border-0 mb-4">
        <div className="card-body">
          
          <p className="text-muted small mt-2">
         I’m a Frontend Developer who enjoys building clean, responsive, and
user-friendly web interfaces. I have worked on real-world projects
including ERP systems, HRMS portals, CMS platforms, and interactive
web applications using React.js, JavaScript, and modern UI tools.

I focus on writing clean code, improving user experience, and turning
requirements into practical solutions. I’m always curious to learn,
improve, and build things that feel simple and intuitive to use.

          </p>
        </div>
      </Card>
    </>
  );
};

export default About;
