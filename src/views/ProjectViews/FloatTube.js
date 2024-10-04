import React, {useEffect} from 'react'
import projectImg from '../HomePage/images/projects/Float.png'
import teamImage from '../HomePage/images/GroupPhoto.jpeg'
import GeneralProject from './GeneralProject'

function FloatTube(){    
    useEffect(() => {
        window.scrollTo(0, 0);  // Scrolls to the top of the page
      }, []);
    
    
    const ProjectName = "Float Tube"
    const projecImg = projectImg
    const aboutText = `The Float Tube Robotics Competition 
    is an innovative and challenging event where participants design, 
    build, and program autonomous robotic systems to perform tasks on or 
    beneath the surface of the water. Teams work within a limited budget 
    and time frame to create robots that can navigate, collect data, 
    and interact with objects in a buoyant, unpredictable environment. 
    This competition blends engineering disciplines like mechanical design, 
    electronics, and software development, requiring participants to not only 
    solve technical problems but also account for the unique dynamics of water-based movement. 
    `
    
    const ImgArr = [teamImage,teamImage,teamImage]
    
    return(
        <GeneralProject 
            ProjectName={ProjectName} 
            ProjectImage={projecImg} 
            AboutText={aboutText}
            ImgArr={ImgArr}    
        />

    )
}

export default FloatTube