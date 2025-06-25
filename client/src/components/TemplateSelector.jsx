// src/components/TemplateSelector.jsx
import React from "react";
import "./TemplateSelector.css";

export default function TemplateSelector({ onSelect }) {
  const templates = [
    { id: "classic", name: "Classic", description: "Elegant, traditional layout." },
    { id: "modern", name: "Modern", description: "Sleek, stylish design." },
  ];

  return (
    <div className="template-selector-wrapper">
      <h2>Select Your Resume Template</h2>
      <div className="template-card-container">
        {templates.map((template) => (
          <div
            key={template.id}
            className="template-card"
            onClick={() => onSelect(template.id)}
          >
            <h3>{template.name}</h3>
            <p>{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

