// src/components/ExportButton.jsx
import React from "react";
import "./ExportButton.css"; // import the CSS file

export function ExportButton() {
  const handleExport = () => {
    window.print();
  };

  return (
    <button className="export-btn" onClick={handleExport}>
      Export as PDF
    </button>
  );
}

