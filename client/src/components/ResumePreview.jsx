// src/components/ResumePreview.jsx
import React from "react";
import "./PreviewStyles.css";

export function ResumePreview({ resumeData, template = "classic" }) {
  const {
    name,
    title,
    contact = {},
    summary,
    skills = [],
    experience = [],
    education = [],
    projects = [],
    certifications = [],
  } = resumeData;

  return (
    <div className={`resume-preview ${template}`}>
      <h1 className="resume-name">{name || "Your Name"}</h1>
      <h2 className="resume-title">{title || "Your Title"}</h2>

      <div className="resume-section">
        <h3>Contact</h3>
        <p><strong>Email:</strong> {contact.email || "your@email.com"}</p>
        <p><strong>Phone:</strong> {contact.phone || "+91 XXXXXXXXXX"}</p>
      </div>

      <div className="resume-section">
        <h3>Professional Summary</h3>
        <p>{summary || "A quick summary about your strengths, interests, and goals."}</p>
      </div>

      {skills.length > 0 && (
        <div className="resume-section">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>
      )}

      {experience.length > 0 && (
        <div className="resume-section">
          <h3>Experience</h3>
          {experience.map((job, i) => (
            <div key={i}>
              <strong>{job.role}</strong> at <em>{job.company}</em><br />
              <small>{job.duration}</small>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      )}

      {education.length > 0 && (
        <div className="resume-section">
          <h3>Education</h3>
          {education.map((edu, i) => (
            <div key={i}>
              <strong>{edu.degree}</strong><br />
              <em>{edu.institution}</em>, {edu.year}
            </div>
          ))}
        </div>
      )}

      {projects.length > 0 && (
        <div className="resume-section">
          <h3>Projects</h3>
          {projects.map((proj, i) => (
            <div key={i}>
              <strong>{proj.name}</strong>: {proj.description}
            </div>
          ))}
        </div>
      )}

      {certifications.length > 0 && (
        <div className="resume-section">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((cert, i) => <li key={i}>{cert}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}


