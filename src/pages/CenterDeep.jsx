import React from 'react';
    import { Link } from 'react-router-dom';
    import '../App.css';

    const CenterDeep = () => {
      return (
        <div className="container">
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>CenterDeep: Dig Deeper. Think Smarter. Act Faster. 🕵️‍♂️🤖</h1>
          <p>
            At Magic Unicorn, we believe insights shouldn’t hide beneath the surface—they should be front and
            center. That’s why we created CenterDeep, the AI search engine that doesn’t just skim the
            surface—it dives straight to the core, bringing clarity where others bring clutter.
          </p>
          <h2>Why CenterDeep?</h2>
          <p>You can’t get any deeper than CenterDeep—because we’ve built it to:</p>
          <ul className="feature-list">
            <li>
              <h3>Think Like a Team.</h3>
              <p>It’s not just search; it’s an AI squad analyzing, organizing, and delivering actionable insights on demand.</p>
            </li>
            <li>
              <h3>Search Without Limits.</h3>
              <p>From real-time web crawling to internal document mining, CenterDeep unites all your data streams into a single, intuitive interface.</p>
            </li>
            <li>
              <h3>Answer the Unanswered.</h3>
              <p>Ask complex questions, and CenterDeep doesn’t just fetch results—it breaks them down, connects the dots, and hands you the blueprint.</p>
            </li>
          </ul>
          <h2>Key Features:</h2>
          <ul className="feature-list">
            <li>
              <h3>Pro Search Mode:</h3>
              <p>Dive deeper into layered queries for step-by-step insights.</p>
            </li>
            <li>
              <h3>Unified Knowledge Hub:</h3>
              <p>Combine web and internal data sources into one seamless search experience.</p>
            </li>
            <li>
              <h3>Smart Threads:</h3>
              <p>Keep your searches organized, build on past queries, and never lose context.</p>
            </li>
          </ul>
          <h2>More Than Search—It’s Strategy.</h2>
          <p>
            Whether you’re hunting down competitive trends, tackling tough research questions, or dreaming up
            your next big idea, CenterDeep is your AI-driven command center—ready to think fast and dig deep.
          </p>
        </div>
      );
    };

    export default CenterDeep;
