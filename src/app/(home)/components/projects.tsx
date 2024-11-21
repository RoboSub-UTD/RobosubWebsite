import React from 'react';
import '../styles/projects.css'
import ProjectInfo from './projectInfo';
import ProjectCard from './projectCard';

const goToPage = (url: string) => {
  window.location.href = url
}

export default function Projects() {
  return (
    <div id="Projects" className="projects-section">
      <h1>Our Projects</h1>
      <div className="projects-grid">
        {ProjectInfo.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            url={project.URL}
          />
        ))}
      </div>
    </div>
  );
};