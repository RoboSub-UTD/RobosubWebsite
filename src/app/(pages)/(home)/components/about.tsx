import '../styles/about.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react';

import img0 from '@imgs/GroupPhotos/GroupPhoto.jpg';
import img1 from '@imgs/GroupPhotos/DSC04824.jpg';
import img2 from '@imgs/GroupPhotos/DSC04352.jpg';

function About() {
  return (
    <div id="AboutRobo" className="about">
      <div className="about-text-box">
        <h1>About RoboSub</h1>
        <p>
          RoboSub is an organization at UTD focused on the development of marine
          robotics. We seek to tap into the excitement and creativity seen in
          robotics teams, and in RoboSub, we work with the added challenge of a
          marine environment. RoboSub&#39;s mission is to bring together
          individuals who are interested in robotics and provide them with the
          opportunity to practice relevant skills through hands-on,
          student-driven projects.
        </p>
      </div>
      <Carousel
        showStatus={false}
        autoPlay={true}
        showIndicators={false}
        showArrows={false}
        infiniteLoop={true}
      >
        <div>
          <img style={{opacity : 1, maxHeight: "600px", maxWidth : "800px"}} className="team-image" src={img0.src} alt="groupPhoto" />
          <p>Hydromeda Team 2023-2024 with Crush Depth post award ceremony</p>
        </div>
        <div>
          <img style={{opacity : 1, maxHeight: "600px", maxWidth : "800px"}}className="team-image" src={img1.src} alt="teamImage" />
          <p>Hydromeda Team 2023-2024 during award ceremony</p>
        </div>
        <div>
          <img style={{opacity : 1, maxHeight: "600px", maxWidth : "800px"}} className="team-image" src={img2.src} alt="Jesuit" />
          <p>
            Hydromeda Team 2023-2024 speaking with other competitors from Jesuit
            High School
          </p>
        </div>
      </Carousel>
    </div>
  );
}

export default About;
