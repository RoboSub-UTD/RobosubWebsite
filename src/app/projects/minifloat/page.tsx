'use client';

import React, {useEffect} from 'react'
import GeneralProject from '../GeneralProject'

function MiniFloat(){
  useEffect(() => {
    window.scrollTo(0, 0);  // Scrolls to the top of the page
  }, []);


  const ProjectName = "Mini Float"
  const projectImg = "/imgs/RobosubLogo.png"
  const aboutText = `
                    A smaller version of the RoboSub, designed for tighter underwater spaces, 
                    presents an exciting evolution in underwater robotics, emphasizing compactness, 
                    agility, and versatility for a variety of aquatic environments. This mini RoboSub 
                    is engineered with a streamlined silhouette and lightweight materials, allowing it 
                    to navigate through constricted spaces like underwater caves, shipwrecks, and 
                    intricate coral formations that larger submersibles cannot access. Its reduced 
                    size enables it to execute delicate maneuvers and intricate tasks, making it an 
                    ideal tool for marine researchers, environmental monitors, and underwater construction 
                    teams.`

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

export default MiniFloat