'use client';

import React from 'react'
import '../styles/projects.css'

export default function ProjectCard({title, description, imgSrc, url }: {title: string, description: string, imgSrc: string, url: string}) {
  return (
    <div className="project-card" onClick={() => {window.location.href = url} }>
      <img src={imgSrc} alt={title} className="project-image" />
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}
