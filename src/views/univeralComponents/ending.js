import React from 'react'
import '../universalStyles/ending.css'
import logo from '../universalImages/RobosubLogo.png'
import instaLogo from '../universalImages/icons/InstagramIcon.png'
import discordLogo from '../universalImages/icons/DiscordIcon.png'
import GitHubLogo from '../universalImages/icons/GithubIcon.png'
function Ending({start,end}){
    return(
        <div id="Connect" className='EndingSelction' style={{background:`linear-gradient(${start},${end})`}}>
            <div className='line'></div>
            <div className='contactGrid'>
                <img className="sublogo" alt='logo' src={logo}/>
                <div className='SocialMedia'>
                    <p>Connect with us</p>
                    <div className='logoGrid'>
                        <a href='https://www.instagram.com/utdrobosub?igsh=bHkwaWFoYWdrM3Rz&utm_source=qr' target='_blank' rel="noreferrer" ><img alt='insta' src={instaLogo}></img></a>
                        <a href='https://discord.gg/mpvz7S6vQA' target='_blank' rel="noreferrer"><img alt='discord' src={discordLogo}></img></a>
                        <a href='https://github.com/RoboSub-UTD' target='_blank'rel="noreferrer"><img alt='github' src={GitHubLogo}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ending