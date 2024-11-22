import React from 'react';
import '../styles/awards.css';
import award0 from '@imgs/awards/doc.png';
import award1 from '@imgs/awards/third.png';

export default function Awards() {
  return (
    <div className="award-section">
      <div className="award-grid">
        <img alt="award1" src={award0.src} />
        <img alt="award2" src={award1.src} />
      </div>
    </div>
  );
}
