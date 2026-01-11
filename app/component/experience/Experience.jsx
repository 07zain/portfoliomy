'use client';

import { Card } from "react-bootstrap";
import "../left.css";

const Experience = () => (
  <Card className="shadow-sm border-0 mt-4 mb-4">
    <div className="card-body">
      <h5>Experience</h5>

      <div className="timeline">
        <div className="item">
          <span>July 2025 – Present</span>
          <strong>STM Analyst Executive</strong>
          <p>JSPT Consultant Pvt. Ltd., Patna</p>
          <ul>
            <li>Managed campaign-related Facebook postings</li>
            <li>POC between digital team and senior management</li>
            <li>Used Excel & Google Sheets for data tracking</li>
            <li>Supported dashboards and frontend tool enhancements</li>
          </ul>
        </div>

        <div className="item">
          <span>Feb 2023 – Jun 2024</span>
          <strong>Frontend Developer</strong>
          <p>R.N. Technologies Pvt. Ltd., Patna</p>
          <ul>
            <li>Built responsive UI using React.js & SCSS</li>
            <li>Collaborated with backend & QA teams</li>
            <li>Improved UI quality and code reviews</li>
          </ul>
        </div>
      </div>
    </div>
  </Card>
);

export default Experience;
