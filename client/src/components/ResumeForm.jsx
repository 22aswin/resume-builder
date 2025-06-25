// src/components/ResumeForm.jsx
import React, { useState } from "react";
import "./FormStyles.css";

export function ResumeForm({ resumeData, setResumeData }) {
  const [local, setLocal] = useState({
    ...resumeData,
    skills: resumeData.skills || [],
    experience: resumeData.experience || [],
    education: resumeData.education || [],
    projects: resumeData.projects || [],
    certifications: resumeData.certifications || [],
  });

  const updateMain = (updated) => {
    setLocal(updated);
    setResumeData(updated);
  };

  const handleInput = (field, value) => {
    const updated = { ...local };
    if (["email", "phone"].includes(field)) {
      updated.contact = { ...updated.contact, [field]: value };
    } else {
      updated[field] = value;
    }
    updateMain(updated);
  };

  const handleArrayChange = (field, index, key, value) => {
    const updated = { ...local };
    updated[field][index][key] = value;
    updateMain(updated);
  };

  const addArrayItem = (field, template) => {
    const updated = { ...local };
    updated[field].push(template);
    updateMain(updated);
  };

  return (
    <div className="resume-form-card">
      <h2>Resume Details</h2>

      <label>Name</label>
      <input
        type="text"
        value={local.name || ""}
        onChange={(e) => handleInput("name", e.target.value)}
      />

      <label>Title</label>
      <input
        type="text"
        value={local.title || ""}
        onChange={(e) => handleInput("title", e.target.value)}
      />

      <label>Email</label>
      <input
        type="email"
        value={local.contact?.email || ""}
        onChange={(e) => handleInput("email", e.target.value)}
      />

      <label>Phone</label>
      <input
        type="text"
        value={local.contact?.phone || ""}
        onChange={(e) => handleInput("phone", e.target.value)}
      />

      <label>Summary</label>
      <textarea
        rows={3}
        value={local.summary || ""}
        onChange={(e) => handleInput("summary", e.target.value)}
      />

      <label>Skills (comma-separated)</label>
      <input
        type="text"
        value={local.skills.join(", ")}
        onChange={(e) =>
          handleInput(
            "skills",
            e.target.value.split(",").map((s) => s.trim())
          )
        }
      />

      <hr />

      <label>Experience</label>
      {local.experience.map((item, i) => (
        <div key={i} className="sub-section">
          <input
            placeholder="Role"
            value={item.role}
            onChange={(e) =>
              handleArrayChange("experience", i, "role", e.target.value)
            }
          />
          <input
            placeholder="Company"
            value={item.company}
            onChange={(e) =>
              handleArrayChange("experience", i, "company", e.target.value)
            }
          />
          <input
            placeholder="Duration"
            value={item.duration}
            onChange={(e) =>
              handleArrayChange("experience", i, "duration", e.target.value)
            }
          />
          <textarea
            placeholder="Description"
            value={item.description}
            onChange={(e) =>
              handleArrayChange("experience", i, "description", e.target.value)
            }
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          addArrayItem("experience", {
            role: "",
            company: "",
            duration: "",
            description: "",
          })
        }
      >
        + Add Experience
      </button>

      <label>Education</label>
      {local.education.map((edu, i) => (
        <div key={i} className="sub-section">
          <input
            placeholder="Degree"
            value={edu.degree}
            onChange={(e) =>
              handleArrayChange("education", i, "degree", e.target.value)
            }
          />
          <input
            placeholder="Institution"
            value={edu.institution}
            onChange={(e) =>
              handleArrayChange("education", i, "institution", e.target.value)
            }
          />
          <input
            placeholder="Year"
            value={edu.year}
            onChange={(e) =>
              handleArrayChange("education", i, "year", e.target.value)
            }
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          addArrayItem("education", { degree: "", institution: "", year: "" })
        }
      >
        + Add Education
      </button>

      <label>Projects</label>
      {local.projects.map((proj, i) => (
        <div key={i} className="sub-section">
          <input
            placeholder="Project Name"
            value={proj.name}
            onChange={(e) =>
              handleArrayChange("projects", i, "name", e.target.value)
            }
          />
          <textarea
            placeholder="Project Description"
            value={proj.description}
            onChange={(e) =>
              handleArrayChange("projects", i, "description", e.target.value)
            }
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          addArrayItem("projects", { name: "", description: "" })
        }
      >
        + Add Project
      </button>

      <label>Certifications</label>
      {local.certifications.map((cert, i) => (
        <div key={i} className="sub-section">
          <input
            placeholder="Certification Name"
            value={cert}
            onChange={(e) => {
              const updated = [...local.certifications];
              updated[i] = e.target.value;
              handleInput("certifications", updated);
            }}
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => addArrayItem("certifications", "")}
      >
        + Add Certification
      </button>
    </div>
  );
}


