import { Card } from "react-bootstrap";

const ProjectCard = ({ title, desc, tech }) => {
  return (
    <Card className="shadow-sm border-0 h-100">
      <div className="card-body">
        <h6>{title}</h6>

        <p className="text-muted mt-2">{desc}</p>

        <div className="project-tags">
          {tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
