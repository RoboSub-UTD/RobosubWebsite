import React from 'react';
import '../styles/Projects.css'
import ProjectsInfo from '../Officers-ProjectInfo/ProjectInfo';


const ProjectCard = ({ title, description, imgSrc }) => (
  <div className="project-card">
    <img src={imgSrc} alt={title} className="project-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h1>Our Projects</h1>
      <div className="projects-grid">
        {ProjectsInfo.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
