import React from 'react'
import '../styles/awards.css'
import award1 from '../images/awards/Doc.PNG'
import award2 from '../images/awards/third.PNG'
export default function Awards(){
    return(
        <div className='awardSection'>
            <div className='awardGrid'>
                <img alt='award1' src={award1}/>
                <img alt='award2' src={award2}/>
            </div>
        </div>
    )
}