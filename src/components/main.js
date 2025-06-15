import React from 'react';
import './main.css'; // Ensure this CSS file contains the updated styles below

const SmoothScrollWebsite = () => {
  return (
    <div className="scroll-container">
      <section id="home" className="screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="screen-content text-center">
          <h1 className="title">
            <span className="block">Hi</span>
            <br/>
            <span className="block">I'm Vipul</span>
          </h1>
          <p className="subtitle">
            Scroll to see more
          </p>
        </div>
      </section>

      <section id="about" className="screen bg-gradient-to-br from-red-400 to-red-600 text-white">
        <div className="screen-content">
          <h1 className="title text-center">about me</h1>
          <div className="content-grid">
            <div className="content-card">
              <h2 className="content-title">Education</h2>
              <p><strong>Bachelor's Degree in Computer Technology</strong> </p>
              <p>K.D.K College of Engineering (2017 - 2021) </p>
              <p>Final Year CGPA: 9.39 </p>
              <hr className="separator" />
              <p><strong>12th Grade, Maharashtra State Board</strong> </p>
              <p>Jeeven Vikas Junior college (2015 - 2017) </p>
              <p>Passed out with 70% </p>
            </div>
            <div className="content-card">
              <h2 className="content-title">Technical Skills</h2>
              <p><strong>Hands-on knowledge of:</strong></p>
              <p>HTML, CSS/SCSS, Figma, Bootstrap, React.js, Django, .NET, ASP.Net, Entity Framework, C#, SQL, Javascript, REST APIs, Aras PLM, Linux, GIT/Github, TFS, Google Cloud Platform </p>
              <hr className="separator" />
              <p><strong>Practical experience with:</strong></p>
              <p>Data Analysis and visualization through Numpy, Pandas, Matplotlib, Seaborn , Machine Learning through Scikit-learn, Tensorflow, AutoML , Developing and Deploying Webapps using Django on different Cloud providers.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="screen bg-gradient-to-br from-teal-400 to-teal-600 text-white">
        <div className="screen-content">
          <h1 className="title text-center">experience</h1>
          <div className="content-card full-width">
            <h2 className="content-title">Full Stack Developer</h2>
            <p className="font-semibold">Seligent Consulting | Nov 2021-Now | Pune, India </p>
            <ul className="list-disc list-inside mt-2">
              <li>Currently helping Delaval with the migration from ARAS (ASP.NET based application) v22 to v27 and assisting with ARAS-SAP Integration for Alstom. </li>
              <li>Developed, tested, and helped deploy (through CI/CD pipeline) hydra highly customized and configured ARAS innovator by Alstom. </li>
              <li>Worked on ARAS-Orchestra integration where files were transferred via. SFTP. </li>
              <li>Built Secure API Wrapper Around Hydra using APS.NET, to extend the functionality by allowing the API users more flexibility in a secure way. </li>
            </ul>
          </div>
          <div className="content-grid">
            <div className="content-card">
              <h2 className="content-title">Summer School on Machine Learning</h2>
              <p className="font-semibold">IIIT Hyderabad | July 2019 | Hyderabad, India </p>
              <ul className="list-disc list-inside mt-2">
                <li>Learned about the various state-of-the-art machine learning and deep learning techniques. </li>
                <li>Built and trained various CNNS, GANS, Autoencoders, etc under the supervision of industry-leading experts. </li>
              </ul>
            </div>
            <div className="content-card">
              <h2 className="content-title">Summer Intern</h2>
              <p className="font-semibold">Cojag Smart Technology | Jun 2019-Jul 2019 | Nagpur, India </p>
              <ul className="list-disc list-inside mt-2">
                <li>Worked with the analytics team to visualize and analyze data from various sources. </li>
                <li>Helped with the planning of tech infrastructure for local government schools. </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="screen bg-gradient-to-br from-pink-200 to-pink-300 text-gray-800">
        <div className="screen-content">
          <h1 className="title text-center">projects</h1>
          <div className="project-grid">
            <div className="project-card">
              <h2 className="project-title">Employee Mental health Checker for HR </h2>
              <p>A WebApp built using the Django framework which uses machine learning to predict whether an employee needs mental health treatment. </p>
              <a href="https://vipulatlus.herokuapp.com" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
              <h2 className="project-title">AI AutoDubbing </h2>
              <p>Automated AI-assisted dubbing system that parses, transcribes, translates, and converts video audio to speech. </p>
              <a href="https://github.com/dragonblood/Eridium" target="_blank" rel="noopener noreferrer">View Source </a>
            </div>
            <div className="project-card">
              <h2 className="project-title">Sentiment and Entity Analyser </h2>
              <p>A parachuting-themed responsive analyzer using Google's Natural Language API to process and visualize user-given text. </p>
              <a href="http://boomerang.vipulpetkar.me/" target="_blank" rel="noopener noreferrer">View Project </a>
            </div>
            <div className="project-card">
              <h2 className="project-title">Neumorphic Image Tagging and Analysis </h2>
              <p>A web app designed with neuromorphic principles to analyze user-uploaded images stored in Azure Blob Storage. </p>
              <a href="https://cataract.azurewebsites.net" target="_blank" rel="noopener noreferrer">View Project </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="screen bg-gradient-to-br from-gray-700 to-blue-600 text-white">
        <div className="screen-content text-center">
          <h1 className="title">contact me</h1>
          <div className="contact-info">
            <p>
              <a href="mailto:Petkar.vipul@gmail.com">Petkar.vipul@gmail.com</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/vipul-petkar" target="_blank" rel="noopener noreferrer">linkedin.com/in/vipul-petkar</a>
            </p>
            <p>
              <a href="https://github.com/dragonblood" target="_blank" rel="noopener noreferrer">github.com/dragonblood</a>
            </p>
            <p>Phone: +918999540311</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmoothScrollWebsite;