import React from 'react';
    import { Link } from 'react-router-dom';
    import '../App.css';

    const CommandCanvas = () => {
      return (
        <div className="container">
          <Link to="/" className="back-button">
            ← Back to Home
          </Link>
          <h1>Command Canvas – AI-Powered Visuals</h1>
          <p className="tagline">“Create. Edit. Inspire—All On Command.”</p>
          <h2>Unleash AI Creativity at Your Command</h2>
          <p className="subheadline">
            From instant image generation to intelligent editing—Command Canvas brings your vision to life with
            AI-powered magic.
          </p>
          <h2>Why Command Canvas?</h2>
          <p>🌟 The Ultimate AI Design Studio—For Everyone.</p>
          <p>
            Whether you’re a creator, developer, or entrepreneur, Command Canvas puts AI-driven visual tools at
            your fingertips. No coding? No problem. Power user? Plug into our APIs.
          </p>
          <h2>Key Features</h2>
          <ul className="feature-list">
            <li>
              <h3>🖼️ AI Image Generation</h3>
              <p>Turn prompts into visuals instantly for ads, branding, and content creation.</p>
            </li>
            <li>
              <h3>🛠️ Smart Editing Tools</h3>
              <p>Resize, retouch, upscale, and style images with AI precision.</p>
            </li>
            <li>
              <h3>🔧 Custom APIs</h3>
              <p>Develop workflows, automate tasks, and batch process with backend access.</p>
            </li>
            <li>
              <h3>⚡ Creative Automation</h3>
              <p>Automate repetitive tasks so you can focus on big ideas.</p>
            </li>
            <li>
              <h3>🔒 Private &amp; Scalable</h3>
              <p>Local-first deployment or cloud scalability for collaboration.</p>
            </li>
            <li>
              <h3>💡 For All Skill Levels</h3>
              <p>Simple enough for beginners, powerful enough for pros.</p>
            </li>
          </ul>
          <h2>Who’s It For?</h2>
          <ul className="feature-list">
            <li>
              <h3>🎯 Marketers</h3>
              <p>Generate ad creatives and social media visuals in seconds.</p>
            </li>
            <li>
              <h3>🎨 Designers</h3>
              <p>Create artwork, mockups, and prototypes effortlessly.</p>
            </li>
            <li>
              <h3>⚙️ Developers</h3>
              <p>Build AI workflows and automate visual tasks through APIs.</p>
            </li>
            <li>
              <h3>🏢 Businesses</h3>
              <p>Scale visual content creation and reduce design bottlenecks.</p>
            </li>
          </ul>
          <h2>Testimonials &amp; Use Cases</h2>
          <p>Trusted by Visionaries. Built for Impact.</p>
          <ul className="testimonial-list">
            <li>
              📢 “Command Canvas has saved us hours on creative design—allowing us to focus on growth.” –
              Marketing Team, SaaS Company
            </li>
            <li>
              📢 “The API access lets our developers integrate AI-generated visuals directly into our app
              workflow. It’s a game-changer.” – Lead Engineer, AI Startup
            </li>
            <li>
              📢 “The image editing tools are like Photoshop but with superpowers. Love it!” – Freelance
              Designer
            </li>
          </ul>
          <h2>Call-to-Action (CTA)</h2>
          <p>🌟 “Ready to Command Your Creativity?”</p>
          <p>💻 “Try Command Canvas Today—Free Trial Available.”</p>
          <p>📞 “Request a Demo.”</p>
        </div>
      );
    };

    export default CommandCanvas;
