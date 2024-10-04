import React, {useEffect} from 'react'
import projectImg from '../../HomePage/images/subROV.png'
import GeneralProject from '../GeneralProject'
// import img2 from '../images/mateROV/mate.JPG'
import img1 from '../images/mateROV/MateROV1.jpg'
import img2 from '../images/mateROV/mate(2).JPG'
import img3 from '../images/mateROV/screenshot.png'
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
    
    const ImgArr = [img1,img2,img3]
    
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