import React from 'react';
    import { Link } from 'react-router-dom';
    import '../App.css';

    const MagiCode = () => {
      return (
        <div className="container">
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>MagiCode – Build Smarter. Code Faster. Automate Everything.</h1>
          <p className="tagline">“AI-Powered Coding and Automation—Simplified.”</p>
          <h2>Smarter Code. Faster Builds. AI Development Without Limits.</h2>
          <p className="subheadline">
            AI-powered coding, debugging, and deployment—designed for developers, businesses, and educators.
            Build and test applications directly in your browser with MagiCode.
          </p>
          <h2>Why MagiCode?</h2>
          <p>⚡ “The Future of Coding—Simplified.”</p>
          <p>
            MagiCode combines AI coding, debugging, and deployment tools into a single, browser-based
            platform—no setup required. Whether you’re building your first app, automating workflows, or
            experimenting with AI models, MagiCode makes development fast, accessible, and scalable.
          </p>
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>
              <h3>⚙️ AI Coding Assistant</h3>
              <p>
                Prompt, generate, and debug code using multiple AI models (OpenAI, DeepSeek, HuggingFace,
                etc.).
              </p>
            </li>
            <li>
              <h3>📦 Full-Stack Workflow</h3>
              <p>Build and deploy apps directly in your browser—no local setup needed.</p>
            </li>
            <li>
              <h3>🔧 Customizable APIs</h3>
              <p>Extend workflows and integrate AI models via the Vercel AI SDK.</p>
            </li>
            <li>
              <h3>🚀 One-Click Deployment</h3>
              <p>Deploy applications to Netlify, Vercel, or local servers effortlessly.</p>
            </li>
            <li>
              <h3>🌐 Local &amp; Cloud Ready</h3>
              <p>Work offline with Docker or scale online for cloud-based teams.</p>
            </li>
            <li>
              <h3>🛠️ Advanced Tools</h3>
              <p>Built-in terminal, file syncing, and version control tools for seamless development.</p>
            </li>
          </ul>
          <h2>Who’s It For?</h2>
          <ul className="feature-list">
            <li>
              <h3>🎯 Developers &amp; Engineers</h3>
              <p>Rapid prototyping, full-stack coding, and automation workflows.</p>
            </li>
            <li>
              <h3>📚 Educators &amp; Students</h3>
              <p>Simplify coding lessons, experiment with AI models, and debug code interactively.</p>
            </li>
            <li>
              <h3>🏢 Businesses</h3>
              <p>Automate tasks, build internal tools, and scale AI workflows.</p>
            </li>
            <li>
              <h3>💡 Entrepreneurs &amp; Startups</h3>
              <p>Quickly create MVPs and test ideas without setup delays.</p>
            </li>
          </ul>
          <h2>Use Cases</h2>
          <ul className="feature-list">
            <li>
              <h3>AI-Driven Application Development</h3>
              <p>Build chatbots, AI-powered tools, and interactive web applications.</p>
            </li>
            <li>
              <h3>Education and Training</h3>
              <p>Teach full-stack development and AI workflows without complex installations.</p>
            </li>
            <li>
              <h3>Rapid Prototyping</h3>
              <p>Quickly create and test new ideas for hackathons or internal tools.</p>
            </li>
            <li>
              <h3>Automation Pipelines</h3>
              <p>Streamline workflows with AI-driven automation scripts.</p>
            </li>
            <li>
              <h3>Enterprise Development</h3>
              <p>Integrate AI into existing systems to enhance scalability and performance.</p>
            </li>
          </ul>
          <h2>Testimonials &amp; Quotes</h2>
          <p>Trusted by Developers and Innovators.</p>
          <ul className="testimonial-list">
            <li>
              📢 “MagiCode helped us prototype a functional app in hours. It’s the fastest way to test
              ideas.” – Startup Founder
            </li>
            <li>
              📢 “Teaching AI coding has never been easier—MagiCode simplifies everything for students.” –
              Computer Science Instructor
            </li>
            <li>
              📢 “With local and cloud options, MagiCode is flexible enough for any project.” – Lead
              Developer, Tech Firm
            </li>
          </ul>
          <h2>Call-to-Action (CTA)</h2>
          <p>🌟 “Ready to Build Smarter?”</p>
          <p>💻 “Try MagiCode Today—Free Trial Available.”</p>
          <p>📞 “Request a Demo.”</p>
        </div>
      );
    };

    export default MagiCode;
