import React from 'react'
import '../styles/officers.css'
import Officer from '../../univeralComponents/officer'
import farhan from '../images/officers/farhan.png'
import ken from '../images/officers/cen.png'
import josiah from '../images/officers/josiah.png'
import ishaan from '../images/officers/ishaan.png'
import mohammad from '../images/officers/mohammad.png'
import tiffany from '../images/officers/tiffany.png'
import muneeb from '../images/officers/muneeb.png'
import farman from '../images/officers/farman.png'
  import anna from '../images/officers/anna.png'
import aarian from '../images/officers/aarian.png'
import shoaib from '../images/officers/shoaib.png'
import colin from '../images/officers/colin.png'

class OfficerInfo {
  constructor(name, title, img) {
    this.name = name;
    this.title = title;
    this.img = img;
  }
}

// TODO: store officer info in a database in order to de-redundify
const officers = [
  new OfficerInfo("Farhan Jamil", "President", farhan),
  new OfficerInfo("Ken Shibatani", "Vice President", ken),
  new OfficerInfo("Josiah Myhre", "Hydromeda Mechanical Lead", josiah),
  new OfficerInfo("Ishaan Mistry", "Hydromeda Electrical Lead", ishaan),
  new OfficerInfo("Mohammad Kahn", "Hydromeda Programming Lead", mohammad),
  new OfficerInfo("Brandon Lam", "GalaxSea Mechanical Lead", farhan),
  new OfficerInfo("Dineshman Bajracharya", "GalaxSea Electrical Lead", farhan),
  new OfficerInfo("Jonathan Lewis", "GalaxSea Programming Lead", farhan),
  new OfficerInfo("Tiffany Leung", "Float Lead", tiffany),
  new OfficerInfo("Muneeb Shahid", "MiniFloat Lead", muneeb),
  new OfficerInfo("Farman Ali", "Event Coordinator", farman),
  new OfficerInfo("Anna Xie", "Marketing Director ", anna),
  new OfficerInfo("Aarian Ahsan", "Outreach Director", aarian),
  new OfficerInfo("Shoaib Huq", "Secretary", shoaib),
  new OfficerInfo("Colin Wong", "Treasurer", colin),
]
function Officers() {
    return(
        <div id="Officers" className='officers'>
            <h1>Meet the Crew</h1>
            <div className='officersBox'>
                {officers.map(officer => (
                    <Officer key={officer.name}
                        Img={officer.img}
                        Name={officer.name}
                        Title={officer.title}
                        id={officer.name}/>
                ))}
            </div>
        </div>
    )
}

export default Officers;