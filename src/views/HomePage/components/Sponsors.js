import React from 'react'
import '../styles/sponsors.css'
import veolia from '../images/Sponsor/Veolia_logo.png'
import solid from '../images/Sponsor/solod.jpg'
export default function Sponsors(){
    return(
        <div id="Sponsors" className='Sponsores'>
            <h1>Sponsors</h1>
            <div className='sponImages'>
                <img src={veolia} alt="veolia"></img>
                <img src={solid} alt="solid"></img>
            </div>
        </div>
    )
}