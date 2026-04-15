import { useState, useEffect } from 'react';
import './App.css';
import profilePicture from './profile.png'; // <-- 1. Image imported here (Change to .png if needed)

function App() {
  const [projects, setProjects] = useState([]);

  // Fetch from Java Backend (Spring Boot)
  useEffect(() => {
    fetch('http://localhost:8080/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Backend not running yet, using fallback data.", err));
      
      // Fallback data so you can see the UI even if Java isn't running yet
      if(projects.length === 0) {
        setProjects([
          { 
            id: '001', 
            title: 'Web OS Portfolio', 
            desc: 'Interactive OS-like portfolio environment.',
            link: 'https://portfoli-o-tau.vercel.app/'
          },
          { 
            id: '002', 
            title: 'Network Scanner', 
            desc: 'Cybersecurity tool for vulnerability assessment.' 
          },
          { 
            id: '003', 
            title: 'Hardware Integration', 
            desc: 'IoT device security protocols.' 
          },
          { 
            id: '004', 
            title: 'Crypto Pulse', 
            desc: 'Cryptocurrency tracking and analysis dashboard.',
            link: 'https://crypto-pulse-ebon.vercel.app/'
          },
          { 
            id: '005', 
            title: 'Student Dashboard', 
            desc: 'Comprehensive student management and academic tracking system.',
            link: 'https://student-dashboard-kappa-lac.vercel.app/'
          }
        ]);
      }
  }, []);

  return (
    <div className="dashboard">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-brand">// Alfred II N. Enteria</div>
        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#education">EDUCATION</a>
          <a href="#contact">CONTACT</a>
        </div>
        <div className="nav-time">
          SYS.TIME: {new Date().toLocaleTimeString()}
        </div>
      </nav>

      {/* Main Content Layout */}
      <main className="main-content">
        
        {/* Left Column (Intro) */}
        <div className="intro-section">
          {/* <-- 2. Image displays right here above your greeting --> */}
          <img 
            src={profilePicture} 
            alt="Alfred II N. Enteria" 
            className="profile-pic" 
          />
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Alfred II N. Enteria</h1>
          <p className="bio">
            I'm a Computer Engineering student specializing in cybersecurity. 
            I combine my knowledge of hardware and software to do tasks that relates to my field.
          </p>
        </div>

        {/* Right Column / Scrollable Areas */}
        <div className="details-section">
          
          {/* Portals (Projects) */}
          <section id="work" className="dashboard-section">
            <h3 className="section-title">### PORTALS</h3>
            <div className="portals-grid">
              {projects.map((proj) => (
                <div key={proj.id} className="portal-card">
                  <span className="portal-id">#{proj.id}</span>
                  <h4>{proj.title}</h4>
                  <p>{proj.desc}</p>
                  
                  {/* This checks if the project has a link, and if so, renders it */}
                  {proj.link && (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="email-link"
                      style={{ display: 'inline-block', marginTop: '1rem', fontSize: '0.85rem' }}
                    >
                      Launch Portal ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="dashboard-section">
            <h3 className="section-title">#### EXPERIENCE</h3>
            <div className="timeline-item">
              <div className="timeline-header">
                <h4>Computer Engineer</h4>
                <span>2026 - Ongoing</span>
              </div>
              <p className="company-name">Technological Institute of the Philippines</p>
              <div className="tags">
                <span>Hardware</span>
                <span>Software</span>
                <span>Cybersecurity</span>
              </div>
              <p className="timeline-desc">
                ▶ Applying knowledge of electrical engineering and computer science to develop, design, and integrate hardware and software components for secure computer systems.
              </p>
            </div>
          </section>

          {/* Education */}
          <section id="education" className="dashboard-section">
            <h3 className="section-title">#### EDUCATION</h3>
            <div className="timeline-item">
              <h4>Bachelor of Science in Computer Engineering</h4>
              <p className="company-name">Technological Institute of the Philippines</p>
              <p className="timeline-desc">2024 - Ongoing</p>
              <p className="timeline-desc">Specializing in Programming, Circuits, Machine Learning and Cybersecurity.</p>
            </div>
          </section>

          {/* Skills */}
          <section className="dashboard-section">
            <h3 className="section-title">#### SKILLS</h3>
            <div className="skills-grid">
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>C++</span>
              <span>Python</span>
              <span>React</span>
              <span>Java</span>
              <span>Linux</span>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="dashboard-section">
            <h3 className="section-title">#### CONTACT</h3>
            <div className="contact-info">
              <p>Would love to chat!</p>
              <a href="mailto:maienteria@tip.edu.ph" className="email-link">maienteria@tip.edu.ph</a>
              <p>+63 961 620 8843</p>
              <p><a href="https://www.linkedin.com/in/alfred-ii-enteria-430758399/" target="_blank" rel="noopener noreferrer" className="email-link">LinkedIn Profile ↗</a></p>
            </div>
          </section>

          <footer className="footer">
            <p>© Alfred II N. Enteria //</p>
            <a href="#" className="email-link">Source Code ↗</a>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;