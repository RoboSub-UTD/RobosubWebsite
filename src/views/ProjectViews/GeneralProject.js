import React from 'react'
import Navbar from '../univeralComponents/navbar'
import './projectStyle.css'
import Ending from '../HomePage/components/ending'
import { Carousel } from 'react-responsive-carousel';
import { Parallax,ParallaxProvider } from 'react-scroll-parallax'

import "react-responsive-carousel/lib/styles/carousel.min.css";
function GeneralProject({ProjectName, ProjectImage, AboutText, ImgArr}){

    return(
        <div>
            <ParallaxProvider>
            <Navbar/>
            <div className='GeneralProject'>
                <div className='ProjectLandingBackground'>
                    <Parallax className="parallax-container" translateX={['100px', '-100px']}>
                        <h1 className='projectTitle'>{ProjectName}</h1>
                    </Parallax>
                    <Parallax translateX={[-100, 100]}>
                        <img className="projectImg" src={ProjectImage} alt="project-image"/>
                    </Parallax>
                    <span className="Projectarrow">&#9662;</span>
                </div>
                <div className='projectAboutSection'>
                    <Carousel className="Carousel" showArrows={true} emulateTouch={true} showThumbs={false}>
                        {ImgArr.map((img,i) => (<img draggable={false} className="carImage" src={img} key={i} alt="project"/>))}
                    </Carousel>
                    <div className='AboutIndProject'>
                        <h1>About</h1>
                        <p>{AboutText}</p>
                    </div>
  
                </div>
            </div>
            <Ending start={"black"} end={"black"}/>
            </ParallaxProvider>
        </div>
    )
}

export default GeneralProject