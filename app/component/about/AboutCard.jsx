import { Card, Badge } from "react-bootstrap";

const ProjectCard = ({ title, lang }) => {
  return (
    <Card className="shadow-sm border-0 h-100">
      <div className="card-body">
        <h6>{title}</h6>
        <p className="text-muted small">
          Project short description goes here.
        </p>
        <Badge bg="secondary">{lang}</Badge>
      </div >
    </Card>
  );
};

export default ProjectCard;
