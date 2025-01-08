import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './HierarchyLayout.css';

const HierarchyLayout = () => {
  const connectorsRef = useRef(null);

  useEffect(() => {
    const drawConnectors = () => {
      const commandCenter = document.querySelector('.command-center');
      const generals = document.querySelectorAll('.general-card');
      const connectors = connectorsRef.current;

      if (!commandCenter || !generals.length || !connectors) return;

      connectors.innerHTML = '';

      const commandCenterRect = commandCenter.getBoundingClientRect();
      const commandCenterX = commandCenterRect.left + commandCenterRect.width / 2;
      const commandCenterY = commandCenterRect.bottom;

      generals.forEach(general => {
        const generalRect = general.getBoundingClientRect();
        const generalX = generalRect.left + generalRect.width / 2;
        const generalY = generalRect.top;

        const length = Math.sqrt(
          Math.pow(generalX - commandCenterX, 2) +
          Math.pow(generalY - commandCenterY, 2)
        );

        const angle = Math.atan2(
          generalY - commandCenterY,
          generalX - commandCenterX
        );

        const line = document.createElement('div');
        line.className = 'connector-line';
        line.style.width = `${length}px`;
        line.style.transform = `rotate(${angle}rad)`;
        line.style.top = `${commandCenterY}px`;
        line.style.left = `${commandCenterX}px`;

        // Add hover effect to highlight connected elements
        line.addEventListener('mouseenter', () => {
          commandCenter.style.transform = 'translateY(-5px)';
          general.style.transform = 'scale(1.1)';
        });

        line.addEventListener('mouseleave', () => {
          commandCenter.style.transform = 'translateY(0)';
          general.style.transform = 'scale(1)';
        });

        connectors.appendChild(line);
      });
    };

    drawConnectors();
    window.addEventListener('resize', drawConnectors);
    return () => window.removeEventListener('resize', drawConnectors);
  }, []);

  return (
    <div className="hierarchy-container">
      {/* Command Center */}
      <div className="command-center" tabIndex="0">
        <img 
          src="https://placehold.co/150x150/4c1d95/ffffff?text=UC" 
          alt="Unicorn Commander - Central Command"
        />
        <h2>Command Your Future</h2>
      </div>

      {/* Generals Grid */}
      <div className="generals-grid">
        <Link to="/centerdeep" className="general-card" tabIndex="0">
          <img 
            src="https://placehold.co/100x100/6366f1/ffffff?text=CD" 
            alt="CenterDeep - AI Search Engine"
          />
          <p>CenterDeep</p>
          <span className="sr-only">AI-powered search and knowledge management</span>
        </Link>
        <Link to="/commandcanvas" className="general-card" tabIndex="0">
          <img 
            src="https://placehold.co/100x100/a855f7/ffffff?text=CC" 
            alt="CommandCanvas - Visual AI Tools"
          />
          <p>CommandCanvas</p>
          <span className="sr-only">AI-powered visual creation and editing</span>
        </Link>
        <Link to="/crc" className="general-card" tabIndex="0">
          <img 
            src="https://placehold.co/100x100/f472b6/ffffff?text=CRC" 
            alt="CRC - Server Management"
          />
          <p>CRC</p>
          <span className="sr-only">AI-driven server management and automation</span>
        </Link>
        <Link to="/magicode" className="general-card" tabIndex="0">
          <img 
            src="https://placehold.co/100x100/f9a8d4/ffffff?text=MC" 
            alt="MagiCode - AI Coding"
          />
          <p>MagiCode</p>
          <span className="sr-only">AI-powered coding and development tools</span>
        </Link>
      </div>

      {/* Dynamic Connectors */}
      <div className="connectors" ref={connectorsRef}></div>
    </div>
  );
};

export default HierarchyLayout;
