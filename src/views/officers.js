import React from 'react'
import '../styles/officers.css'
import Officer from '../subElements/officer'
import officersInfo from '../Officers-ProjectInfo/OfficersInfo';

function Officers(){
    return(
        <div className='officers'>
            <h1>Meet the Crew</h1>
            <div className='officersBox'>
                {officersInfo.map((officer,index)=>(
                <Officer
                 Img={officer.img} 
                 Name={officer.name}
                 Title={officer.title}
                />))}
            </div>               
        </div>
    )
}

export default Officers;