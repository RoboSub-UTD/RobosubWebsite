import React from 'react'
import '../styles/ending.css'
import logo from '../images/RobosubLogo.png'
import instaLogo from '../images/icons/InstagramIcon.png'
import discordLogo from '../images/icons/DiscordIcon.png'
import GitHubLogo from '../images/icons/GithubIcon.png'
function Ending(){
    return(
        <div className='EndingSelction'>
            <div className='line'></div>
            <div className='contactGrid'>
                <img alt='logo' src={logo}/>
                <div className='SocialMedia'>
                    <p>Connect with us</p>
                    <div className='logoGrid'>
                        <a href='./'><img alt='insta' src={instaLogo}></img></a>
                        <a href='./'><img alt='discord' src={discordLogo}></img></a>
                        <a href='./'><img alt='github' src={GitHubLogo}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ending