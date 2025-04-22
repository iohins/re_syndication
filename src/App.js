import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="page">
      <header className="hero">
        <h1 className="gradient-title">Real Estate Syndication A–Z</h1>
        <p className="subtitle">A structured roadmap from beginner to elite investor</p>
      </header>

      <section className="card">
        <h2>📚 Phase 1: Foundations <span>(Weeks 1–4)</span></h2>
        <ul className="lesson-list">
          <li><Link to="/1-1">1-1. What is Real Estate Syndication?</Link></li>
        </ul>
        <p className="more">More lessons coming soon...</p>
      </section>
    </main>
  );
}

export default App;
