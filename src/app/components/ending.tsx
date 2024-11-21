import React from 'react';
import '../styles/ending.css';

export default function Ending({ start, end }: { start: string; end: string }) {
  return (
    <div
      id="Connect"
      className="EndingSelction"
      style={{ background: `linear-gradient(${start},${end})` }}
    >
      <div className="line"></div>
      <div className="contactGrid">
        <img className="sublogo" alt="logo" src="/imgs/RobosubLogo.png" />
        <div className="SocialMedia">
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
