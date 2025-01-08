import React from 'react';
    import { Link } from 'react-router-dom';
    import '../App.css';

    const CognitiveCompanion = () => {
      return (
        <div className="container">
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>Cognitive Companion – Collaborate with Your Squad: AI + Human 🤖👥</h1>
          <p className="tagline">“Your Personal AI Squad—Working Smarter, Together.”</p>
          <p className="subheadline">
            “Turn documents into conversations, insights into actions, and ideas into reality—seamlessly
            combining AI intelligence with human creativity.”
          </p>
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>
              <h3>🧠 AI-Powered Knowledge Retrieval</h3>
              <ul>
                <li>“Answers, Not Links.”</li>
                <li>
                  Find insights instantly from PDFs, spreadsheets, and even code—powered by advanced
                  Retrieval-Augmented Generation (RAG).
                </li>
              </ul>
            </li>
            <li>
              <h3>👥 Collaborate with Your Squad</h3>
              <ul>
                <li>“Team Up with AI + Humans.”</li>
                <li>Assign tasks, share research, and brainstorm ideas with AI agents that work alongside you.</li>
              </ul>
            </li>
            <li>
              <h3>🔒 Privacy You Can Trust</h3>
              <ul>
                <li>“No Data Leaves Your Castle.”</li>
                <li>Local-first, offline-ready, and fully secure for sensitive data handling.</li>
              </ul>
            </li>
            <li>
              <h3>⚡ Smarter Workflows, Less Effort</h3>
              <ul>
                <li>“Delegate. Automate. Relax.”</li>
                <li>Automate repetitive tasks, summarize documents, and extract key insights effortlessly.</li>
              </ul>
            </li>
            <li>
              <h3>💬 Talk to Your Data</h3>
              <ul>
                <li>“Turn Files into Conversations.”</li>
                <li>Chat with documents like a pro—ask questions and get answers fast.</li>
              </ul>
            </li>
            <li>
              <h3>🛠️ Flexible &amp; Scalable</h3>
              <ul>
                <li>“Works Where You Work.”</li>
                <li>Cross-platform compatibility for Mac, Windows, and Linux, ready for teams of all sizes.</li>
              </ul>
            </li>
          </ul>
          <h2>Call-to-Action (CTA)</h2>
          <p>🌟 “Build Your Squad—AI + Human.”</p>
          <p>💻 “Try Cognitive Companion Today.”</p>
          <p>Or schedule a demo to see how AI and humans can team up for your business success!</p>
        </div>
      );
    };

    export default CognitiveCompanion;
