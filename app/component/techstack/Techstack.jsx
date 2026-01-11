'use client';

import { Card, ProgressBar, Row, Col } from "react-bootstrap";
import { FaReact, FaJs, FaGitAlt } from "react-icons/fa";
import { SiSass, SiBootstrap, SiGoogleanalytics } from "react-icons/si";
// import { MdDesignServices } from "react-icons/md";
import "./advancedTech.css";

const skills = [
  {
    title: "React.js",
    percent: 90,
    icon: <FaReact />,
    tags: ["Hooks", "Components", "Responsive UI"],
  },
  {
    title: "JavaScript",
    percent: 88,
    icon: <FaJs />,
    tags: ["ES6+", "DOM", "Logic Building"],
  },
  {
    title: "CSS",
    percent: 85,
    icon: <SiSass />,
    tags: ["Layouts", "Responsive Design", "UI Styling"],
  },
  {
    title: "Bootstrap",
    percent: 82,
    icon: <SiBootstrap />,
    tags: ["Grid", "Components", "Mobile First"],
  },
  {
    title: "Git & GitHub",
    percent: 80,
    icon: <FaGitAlt />,
    tags: ["Version Control", "Collaboration"],
  },
  {
    title: "Data & Analytics",
    percent: 75,
    icon: <SiGoogleanalytics />,
    tags: [
      "Excel",
      "Google Sheets",
      "Reporting",
      "Facebook Scraping",
    ],
  },
];

const TechStackBars = () => {
  return (
    <>
      <h5 className="mb-3">SKILLS</h5>

      <Row className="g-3">
        {skills.map((skill, index) => (
          <Col md={6} lg={4} key={index}>
            <Card className="shadow-sm border-0 h-100">
              <div className="card-body">
                <div className="skill-header">
                  <div className="skill-left">
                    <span className="skill-icon">{skill.icon}</span>
                    <strong>{skill.title}</strong>
                  </div>

                  <span className="skill-percent">
                    {skill.percent}%
                  </span>
                </div>
<div className="skill-bar-container">
                <ProgressBar
                  now={skill.percent}
                  className="skill-progress"
                />
</div>
                <div className="skill-tags">
                  {skill.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default TechStackBars;
