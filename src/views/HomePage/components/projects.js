import React from 'react';
import '../styles/Projects.css'
import ProjectsInfo from '../Officers-ProjectInfo/ProjectInfo';

const goToPage = (url) => {
  window.location.href = url
}
const ProjectCard = ({ title, description, imgSrc,URL }) => (
  <div onClick={()=>goToPage(URL)} className="project-card">
    <img src={imgSrc} alt={title} className="project-image" />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const ProjectsSection = () => {

  return (
    <div id="Projects" className="projects-section">
      <h1>Our Projects</h1>
      <div className="projects-grid">
        {ProjectsInfo.map((project,index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            URL={project.URL}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
