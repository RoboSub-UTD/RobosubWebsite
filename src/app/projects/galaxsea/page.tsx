'use client';

import React, {useEffect} from 'react'
import GeneralProject from '../GeneralProject'

export default function GalaxSea() {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scrolls to the top of the page
  }, []);


  const ProjectName = "GalaxSea"
  const projectImg = "/imgs/roboboat-logo.png";
  const aboutText = `
                    An international competition where teams create autonomous 
                    robotic boats to navigate through different challenges is an exciting 
                    showcase of engineering ingenuity, teamwork, and technological innovation. 
                    This competition gathers participants from various countries, including students, 
                    professionals, and enthusiasts, to design, build, and program their robotic boats 
                    to tackle a series of complex tasks in a controlled aquatic environment. 
                    The event not only fosters international collaboration but also inspires 
                    a new generation of engineers and researchers passionate about robotics, 
                    marine technology, and environmental sustainability.`

  const ImgArr: string | never[] = []

  return(
    <GeneralProject
      ProjectName={ProjectName}
      ProjectImage={projectImg}
      AboutText={aboutText}
      // @ts-ignore
      ImgArr={ImgArr}
    />

  )
}