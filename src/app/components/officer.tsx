import React from 'react';
import '../styles/officers.css';

function Officer({
  img,
  name,
  title,
  id,
}: {
  img: string;
  name: string;
  title: string;
  id: string;
}) {
  return (
    <div key={id} className="officer">
      <img alt="OfficerImage" className="officer-image" src={img} />
      <div className="officerText">
        <h2>{name}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Officer;
