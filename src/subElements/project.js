import React from 'react'

function ProjectCard ({ title, description, imgSrc }){
    return (
    <div className="project-card">
      <img src={imgSrc} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;


