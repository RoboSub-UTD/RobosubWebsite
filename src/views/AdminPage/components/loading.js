import React from 'react';
import '../styles/loading.css'; // Add your styles here
import loadingGif from '../../universalImages/loading-gif.gif'

function Loading({ message }) {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="Loading..." className="loading-gif" />
      <p className="loading-message">{message}</p>
    </div>
  );
}

export default Loading;