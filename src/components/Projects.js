import React from 'react';
import './Projects.css';
import busArrivalImg from '../images/BoardPac.PNG'; // Replace with actual image paths
import rpalInterpreterImg from '../images/BoardPac.PNG';
import bankTransactionImg from '../images/BoardPac.PNG';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {/* Project 1 */}
        <div className="project-card">
          <img src={busArrivalImg} alt="Bus Arrival Time Prediction" className="project-image" />
          <div className="project-content">
            <h3>Brand Visual Registration and Lookup System | Final year project </h3>
            <p>Web Application| Machine learning | Image recognition| Vector graphics</p>
            <p><strong>Technologies:</strong> Python, Milvus Vector Database, React.js</p>
            <p>Develop a brand visual registration system with an API for accurate lookup, capable of distinguishing subtle differences between similar visuals, supported by an end-to-end SVG pipeline.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src={rpalInterpreterImg} alt="RPAL Interpreter" className="project-image" />
          <div className="project-content">
            <h3>Data privacy MIS for child protection authority</h3>
            <p>Web and mobile application | CI/CD | Microservice | Cloud technology</p>
            <p><strong>Technologies:</strong> React JS, NodeJS, Express, Postgres SQL, AWS Blob, RabbitMQ, Docker, Flutter</p>
            <p>This is an application developed for child protection authority to protect children's data while allowing authorized persons to access and handle it.</p>
            <p><strong>Contribution:</strong> Frontend service, Profile management service</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src={bankTransactionImg} alt="Bank Transaction Management System" className="project-image" />
          <div className="project-content">
            <h3>Event Management System| Individual Project</h3>
            <p>Web and mobile application | Three-tier architecture</p>
            <p><strong>Technologies:</strong> Flutter, Javascript, NodeJS, Express, MySQL</p>
            <p>The Event Management System is a centralized platform that improves event organization, scheduling, communication, registration, and monitoring with enhanced user engagement and real-time notifications.</p>
          </div>
        </div>
      </div>

      {/* Project 4 */}
        <div className="project-card">
          <img src={rpalInterpreterImg} alt="RPAL Interpreter" className="project-image" />
          <div className="project-content">
            <h3>Student Management System| Individual Project</h3>
            <p>Web application | Clean Architecture| SOLID Principles | EF Core Code-First Approach| Design Patterns</p>
            <p><strong>Technologies:</strong> Angular, Asp .Net core, PostgreSQL</p>
            <p>This student management application, built with Angular for the user interface and ASP.NET Core for server-side logic, is designed to explore tech stacks, clean architecture, and design patterns.</p>
          </div>
        </div>
      
      {/* Project 5 */}
      <div className="project-card">
          <img src={rpalInterpreterImg} alt="RPAL Interpreter" className="project-image" />
          <div className="project-content">
            <h3>Human Resource Management System| Group Project</h3>
            <p>Web application</p>
            <p><strong>Technologies:</strong> HTML, CSS, Javascript, NodeJS, Express, MySQL </p>
            <p>A web-based human resource management system that includes a personal information management module, a leave management module, and a reporting module.</p>
            <p><strong>Contribution:</strong> Front-end development, Database</p>
          </div>
        </div>

    </section>
  );
}

export default Projects;