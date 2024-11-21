import React from 'react';
import '../styles/sponsors.css';
import solidWorksLogo from '@imgs/sponsors/solidWorks.jpg';
import VeoliaLogo from '@imgs/sponsors/veolia.png';

export default function Sponsors() {
  return (
    <div id="Sponsors" className="sponsors">
      <h1>Sponsors</h1>
      <div className="sponsor-images">
        <img src={solidWorksLogo.src} alt="SolidWorks"></img>
        <img src={VeoliaLogo.src} alt="Veolia"></img>
      </div>
    </div>
  );
}
