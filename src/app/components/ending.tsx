import React from 'react';
import '../styles/ending.css';

function Ending({ start, end }: { start: string; end: string }) {
  return (
    <div
      id="Connect"
      className="ending-section"
      style={{ background: `linear-gradient(${start},${end})` }}
    >
      <div className="line"></div>
      <div className="contact-grid">
        <img
          className="sub-logo"
          alt="logo"
          src="/imgs/logos/RobosubLogo.png"
        />
        <div className="social-media">
          <p>Connect with us</p>
          <div className="logoGrid">
            <a
              href="https://www.instagram.com/utdrobosub?igsh=bHkwaWFoYWdrM3Rz&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="insta" src="/imgs/icons/InstagramIcon.png"></img>
            </a>
            <a
              href="https://discord.gg/mpvz7S6vQA"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="discord" src="/imgs/icons/DiscordIcon.png"></img>
            </a>
            <a
              href="https://github.com/RoboSub-UTD"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="github" src="/imgs/icons/GithubIcon.png"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ending;
