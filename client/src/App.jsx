// src/App.jsx
import React, { useState } from "react";
import AuthPage from "./components/AuthPage";
import TemplateSelector from "./components/TemplateSelector";
import { ResumeForm } from "./components/ResumeForm";
import { ResumePreview } from "./components/ResumePreview";
import { ExportButton } from "./components/ExportButton";
import './App.css';

export default function App() {
  const [stage, setStage] = useState("auth");
  const [resumeData, setResumeData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  const goTo = (next) => setStage(next);

  return (
    <div className="container">
      {stage === "auth" && <AuthPage onSuccess={() => goTo("template")} />}
      {stage === "template" && (
        <TemplateSelector
          onSelect={(template) => {
            setSelectedTemplate(template);
            goTo("form");
          }}
        />
      )}
      {stage === "form" && (
        <div className="form-stage">
          <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
          <ResumePreview resumeData={resumeData} template={selectedTemplate} />
          <div className="export-btn-wrapper">
            <ExportButton />
          </div>
        </div>
      )}
    </div>
  );
}
