import '../styles/aboutRoboSub.css'
import aboutPhoto from '../images/GroupPhoto.jpeg'
function AboutRoboSub(){
    return(
        <div id="AboutRobo" className='about'>
            <img className="TeamImage" src={aboutPhoto} alt="groupPhoto"/>
            <div className="AboutTextBox">
                <h1>About RoboSub</h1>
                <p>
                RoboSub is an organization at UTD focused on the development of marine robotics. 
                We seek to tap into the excitement and creativity seen in robotics teams, and in RoboSub, 
                we work with the added challenge of a marine environment.
                RoboSub's mission is to bring together individuals 
                who are interested in robotics and provide them with the opportunity to 
                practice relevant skills through hands-on, student-driven projects.
                </p>
            </div>
        </div>
    )
}

export default AboutRoboSub;