'use client';

import '../styles/about.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function About() {
  return (
    <div id="AboutRobo" className="about">
      <div className="AboutTextBox">
        <h1>About RoboSub</h1>
        <p>
          RoboSub is an organization at UTD focused on the development of marine
          robotics. We seek to tap into the excitement and creativity seen in
          robotics teams, and in RoboSub, we work with the added challenge of a
          marine environment. RoboSub's mission is to bring together individuals
          who are interested in robotics and provide them with the opportunity
          to practice relevant skills through hands-on, student-driven projects.
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
          <img
            className="TeamImage"
            src="/imgs/GroupPhotos/GroupPhoto.jpg"
            alt="groupPhoto"
          />
          <p>Hydromeda Team 2023-2024 with Crush Depth post award ceremony</p>
        </div>
        <div>
          <img
            className="TeamImage"
            src="/imgs/GroupPhotos/DSC04352.jpg"
            alt="teamImage"
          />
          <p>Hydromeda Team 2023-2024 during award ceremony</p>
        </div>
        <div>
          <img
            className="TeamImage"
            src={'/imgs/GroupPhotos/DSC04352.jpg'}
            alt="Jesuit"
          />
          <p>
            Hydromeda Team 2023-2024 speaking with other competitors from Jesuit
            High School
          </p>
        </div>
      </Carousel>
    </div>
  );
}
