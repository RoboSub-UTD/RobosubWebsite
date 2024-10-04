import React, {useEffect} from 'react'
import projectImg from '../HomePage/images/subROV.png'
import teamImage from '../HomePage/images/GroupPhoto.jpeg'
import GeneralProject from './GeneralProject'

function Materov(){    
    useEffect(() => {
        window.scrollTo(0, 0);  // Scrolls to the top of the page
      }, []);
    
    
    const ProjectName = "VespaROV"
    const projecImg = projectImg
    const aboutText = `Named after the swift and agile vespa wasp, 
                           VESPA embodies a compact design while maximizing functionality. 
                           Our team utilized advanced mechanical and electrical CAD tools, 
                           along with robust simulation software, to ensure VESPA's exceptional 
                           performance. This project marks our first ever venture into ROV design 
                           and development, representing the culmination of relentless effort and 
                           innovation from our dedicated team members`
    
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

export default Materov