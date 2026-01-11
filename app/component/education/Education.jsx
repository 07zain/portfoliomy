'use client';
import { Card } from "react-bootstrap";
import "../left.css";

const Education = () => (
  <Card className="shadow-sm border-0 mb-4">
    <div className="card-body">
      <h5>Education</h5>

      <div className="timeline">
        <div className="item">
          <span>2018 – 2022</span>
          <strong>B.Tech (CSE)</strong>
          <p>Maulana Azad College of Engineering & Technology</p>
          <p>CGPA: 8.09</p>
        </div>

        {/* <div className="item">
          <span>2017 – 2018</span>
          <strong>Intermediate</strong>
          <p>Dr. Zakir Hussain High School +2</p>
        </div>

        <div className="item">
          <span>2015 – 2016</span>
          <strong>Matriculation</strong>
          <p>Dr. Zakir Hussain High School +2</p>
        </div> */}
      </div>
    </div>
  </Card>
);

export default Education;
