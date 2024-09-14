import '../styles/aboutRoboSub.css'
import aboutPhoto from '../images/GroupPhoto.jpg'
function AboutRoboSub(){
    return(
        <div id="AboutRobo" className='about'>
            <img className="TeamImage" src={aboutPhoto} alt="groupPhoto"/>
            <div className="AboutTextBox">
                <h1>About RoboSub</h1>
                <p>
                    RoboSub is an international robotics competition that challenges 
                    student teams to design, build, and program autonomous underwater 
                    vehicles (AUVs) capable of completing complex tasks in a simulated 
                    maritime environment. Hosted annually by the RoboNation organization, 
                    the competition aims to advance the field of underwater robotics while 
                    fostering innovation, collaboration, and hands-on learning among students. 
                    Teams must navigate their AUVs through a series of underwater obstacles and tasks, 
                    such as passing through gates, manipulating objects, and firing torpedoes, all while 
                    operating autonomously without human intervention. 
                </p>
            </div>
        </div>
    )
}

export default AboutRoboSub;