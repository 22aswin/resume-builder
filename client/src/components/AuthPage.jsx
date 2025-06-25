import React, { useState } from "react";
import './Common.css';

export default function AuthPage({ onSuccess }) {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggle = () => setIsSignIn(!isSignIn);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1 className="auth-title">Welcome to Resume Wizard</h1>
        <p className="auth-subtitle">Create stunning resumes with ease.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p>
            {isSignIn ? "Don't have an account? " : "Already have an account? "}
            <button type="button" onClick={toggle} className="link">
              {isSignIn ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
