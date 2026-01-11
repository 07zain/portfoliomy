import { Container, Row, Col } from "react-bootstrap";
import ProfileCard from "../component/profile/Profile";
import TechStack from "../component/techstack/Techstack";
import Projects from "../component/projects/Projects";
// import Posts from "../component/Posts/Posts";
import About from "../component/about/About";
import Experience from "../component/experience/Experience";
// import Certification from "../component/certification/Certification";
import ToolStack from "../component/toolstack/Toolstack";
import Education from "../component/education/Education";
const Dashboard = () => {
  return (
    <Container fluid className="py-4 bg-light">
      <Container>
        <Row className="g-4">
          {/* LEFT SIDEBAR */}
          <Col xl={3} lg={4} md={12}>
            <ProfileCard />
               <Experience />
    <Education />
    <ToolStack />    
          </Col>

          {/* RIGHT CONTENT */}
          <Col xl={9} lg={8} md={12}>
            <About />
            <Projects />
            {/* <Posts /> */}            <TechStack />

          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Dashboard;
