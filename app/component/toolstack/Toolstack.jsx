'use client';

import { Card } from "react-bootstrap";

const tools = [
  "VS Code",
  "Figma",
  "Postman",
  "Git & GitHub",
];

const ToolsCard = () => {
  return (
    <Card className="shadow-sm border-0 mb-4">
      <div className="card-body">
        <h5>Tools</h5>

        <div className="project-tags mt-3">
          {tools.map((tool, index) => (
            <span key={index}>{tool}</span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ToolsCard;
