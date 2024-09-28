import React from 'react'
import '../styles/officers.css'
import Officer from '../../univeralComponents/officer'
import officersInfo from '../Officers-ProjectInfo/OfficersInfo';

function Officers(){
    return(
        <div id="Officers" className='officers'>
            <h1>Meet the Crew</h1>
            <div className='officersBox'>
                {officersInfo.map((officer)=>(
                <Officer
                 Img={officer.img} 
                 Name={officer.name}
                 Title={officer.title}
                 id={officer.id}
                 key={officer.id}
                />))}
            </div>               
        </div>
    )
}

export default Officers;