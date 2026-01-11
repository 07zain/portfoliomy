'use client';

import { Card } from "react-bootstrap";
import { FaGithub, FaMapMarkerAlt, FaBriefcase, FaDownload } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import "../sidebar.css";

const ProfileCard = () => {
  return (
    <Card className="shadow-sm border-0 mb-4">
      <div className="card-body text-center">
        
        {/* Avatar */}
        <div className="profile-avatar">
          <FaReact />
        </div>

        {/* Name */}
        <h5 className="mt-3">Zainab Ashraf</h5>

        {/* Role */}
        <p className="text-muted small mb-3">
          Frontend Developer • React.js
        </p>

        {/* Info */}
        <div className="profile-info">
          <p>
            <FaMapMarkerAlt /> India
          </p>
          <p>
            <FaBriefcase /> Frontend Developer
          </p>
         
          <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          <FaDownload /> Download Resume
        </a>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
