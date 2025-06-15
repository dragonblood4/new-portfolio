import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Copy, Check } from 'lucide-react';

import one from '../assets/images/Atlus.png'; 
import two from '../assets/images/Boomerang.png';
import three from '../assets/images/Cataract.png'; 
import five from '../assets/images/Login.png'; 
import four from '../assets/images/eridium.png'; 


import './main.css';

const SmoothScrollWebsite = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'email') {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="scroll-container">
      <section id="home" className="screen">
        <div className="screen-content text-center">
          <h1 className="title">
            <span className="block">Hi</span>
            <br />
            <span className="block">I'm Vipul</span>
          </h1>
          <p className="subtitle">
            Cloud Architect and PLM consultant
          </p>
        </div>
      </section>

      <section id="about" className="screen">
        <div className="screen-content">
          <h1 className="title text-center">about me</h1>
          <div className="about-grid">
            <div className="neumorphic-card technical-skills-card">
              <h2 className="content-title">Technical Skills</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Frontend</h3>
                  <ul>
                    <li>HTML</li>
                    <li>Figma</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>React.js</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Backend</h3>
                  <ul>
                    <li>C#</li>
                    <li>ASP.Net</li>
                    <li>.NET</li>
                    <li>Django</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>REST APIs</li>
                    <li>Entity Framework</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>DevOps & Cloud</h3>
                  <ul>
                    <li>AWS</li>
                    <li>Linux</li>
                    <li>Cloud migration</li>
                    <li>Cloud formation and CDK script</li>
                    <li>GIT/Github</li>
                    <li>Google Cloud Platform</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>PLM</h3>
                  <ul>
                    <li>Aras PLM 12, 14, 22</li>
                    <li>Aras customization</li>
                    <li>Aras configuration</li>
                    <li>Aras custom module developement</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="neumorphic-card">
              <h2 className="content-title">Education</h2>
              <p><strong>Bachelor's Degree in Computer Technology</strong></p>
              <p>K.D.K College of Engineering (2017 - 2021)</p>
              <p>Final Year CGPA: 9.39</p>
              <hr className="separator" />
              <p><strong>12th Grade, Maharashtra State Board</strong></p>
              <p>Jeeven Vikas Junior college (2015 - 2017)</p>
              <p>Passed out with 70%</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="screen">
        <div className="screen-content">
          <h1 className="title text-center">experience</h1>
          <div className="neumorphic-card full-width">
            <h2 className="content-title">Full Stack Developer</h2>
            <p style={{ fontWeight: 600 }}>Seligent Consulting | Nov 2021-Now | Pune, India</p>
            <ul style={{ listStyle: 'disc', listStylePosition: 'inside', marginTop: '0.5rem' }}>
              <li>Currently helping Delaval with the migration from ARAS (ASP.NET based application)
                v22 to v27 and assisting with ARAS-SAP Integration for Alstom.</li>

              <li>Developed, tested, and helped deploy (through CI/CD pipeline) hydra highly customized
                and configured ARAS innovator by Alstom.
                <ul>
                  <li>Worked on ARAS-Orchestra integration where files were transferred via. SFTP.</li>

                  <li>Built Secure API Wrapper Around Hydra using APS.NET, to extend the functionality by allowing the API users more flexibility in a secure way.</li>
                </ul>
              </li>

              <li>Built a POC in Aras innovator to handle European environment compliance through
                European Chemicals Agency (ECHA) APIs for substances of concern in parts. Which
                involved Auto registration of the dossiers at ECHA in the SCIP (Substances of Concern In
                Products) database and showing their status in Aras.</li>

              <li>Built an entire interface in ReactJS for American clients while directly handling communication and requirements.</li>
            </ul>
          </div>
          <div className="content-grid">
            <div className="neumorphic-card">
              <h2 className="content-title">Summer School on Machine Learning</h2>
              <p style={{ fontWeight: 600 }}>IIIT Hyderabad | July 2019 | Hyderabad, India</p>
              <ul style={{ listStyle: 'disc', listStylePosition: 'inside', marginTop: '0.5rem' }}>
                <li>Learned about the various state-of-the-art machine learning and deep learning techniques.</li>
                <li>Built and trained various CNNS, GANS, Autoencoders, etc under the supervision of industry-leading experts.</li>
              </ul>
            </div>
            <div className="neumorphic-card">
              <h2 className="content-title">Summer Intern</h2>
              <p style={{ fontWeight: 600 }}>Cojag Smart Technology | Jun 2019-Jul 2019 | Nagpur, India</p>
              <ul style={{ listStyle: 'disc', listStylePosition: 'inside', marginTop: '0.5rem' }}>
                <li>Worked with the analytics team to visualize and analyze data from various sources.</li>
                <li>Helped with the planning of tech infrastructure for local government schools.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="screen projects-section-container">
        <h1 className="title projects-title">projects</h1>
        <div className="screen-content projects-content-wrapper">
          <div className="project-grid">
            <div className="project-card">
              <img src={one} alt="Project Screenshot" className="project-screenshot" />
              <div className="project-content">
                <h2 className="project-title">Employee Mental health Checker</h2>
                <p>A WebApp built using Django which uses ML to predict whether an employee needs mental health treatment.</p>
                <a href="https://vipulatlus.herokuapp.com" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
            <div className="project-card">
              <img src={four} alt="Project Screenshot" className="project-screenshot" />
              <div className="project-content">
                <h2 className="project-title">AI AutoDubbing</h2>
                <p>Automated AI-assisted dubbing system that parses, transcribes, translates, and converts video audio to speech.</p>
                <a href="https://github.com/dragonblood/Eridium" target="_blank" rel="noopener noreferrer">View Source</a>
              </div>
            </div>
            <div className="project-card">
              <img src={two} alt="Project Screenshot" className="project-screenshot" />
              <div className="project-content">
                <h2 className="project-title">Sentiment and Entity Analyser</h2>
                <p>A parachuting-themed responsive analyzer using Google's Natural Language API to process and visualize user-given text.</p>
                <a href="http://boomerang.vipulpetkar.me/" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
            <div className="project-card">
              <img src={three} alt="Project Screenshot" className="project-screenshot" />
              <div className="project-content">
                <h2 className="project-title">Neumorphic Image Tagging</h2>
                <p>A web app designed with neuromorphic principles to analyze user-uploaded images stored in Azure Blob Storage.</p>
                <a href="https://cataract.azurewebsites.net" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="screen">
        <div className="screen-content">
          <h1 className="title text-center">contact me</h1>
          <p className="subtitle text-center">
            Ready to bring your ideas to life? Drop me a line and let's create something amazing together.
          </p>
          <div className="contact-grid">
            <div className="neumorphic-card contact-card">
              <h2 className="content-title text-center">get in touch</h2>
              <div className="contact-details-container">
                {/* Email */}
                <div className="contact-info-item" onClick={() => copyToClipboard('Petkar.vipul@gmail.com', 'email')}>
                  <div className="contact-icon-wrapper"><Mail size={20} /></div>
                  <div className="contact-text-wrapper">
                    <p className="contact-label">Email</p>
                    <p className="contact-value">Petkar.vipul@gmail.com</p>
                  </div>
                  <div className="copy-icon-wrapper">
                    {copiedEmail ? <Check size={20} className="text-green" /> : <Copy size={20} />}
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-info-item" onClick={() => copyToClipboard('+918999540311', 'phone')}>
                  <div className="contact-icon-wrapper"><Phone size={20} /></div>
                  <div className="contact-text-wrapper">
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">+91 899 954 0311</p>
                  </div>
                  <div className="copy-icon-wrapper">
                    {copiedPhone ? <Check size={20} className="text-green" /> : <Copy size={20} />}
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-item non-clickable">
                  <div className="contact-icon-wrapper"><MapPin size={20} /></div>
                  <div className="contact-text-wrapper">
                    <p className="contact-label">Location</p>
                    <p className="contact-value">Nagpur, Maharashtra, IN</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="social-links-container">
                <a href="https://www.linkedin.com/in/vipul-petkar" target="_blank" rel="noopener noreferrer" className="social-button">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/dragonblood" target="_blank" rel="noopener noreferrer" className="social-button">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmoothScrollWebsite;