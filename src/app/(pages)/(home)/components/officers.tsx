import React from 'react';
import Officer from '@/app/components/officer';
import '../../../styles/officers.css';

import test from '/imgs/officers/josiah.png';

class OfficerInfo {
  name: string;
  title: string;
  img: string;

  constructor(name: string, title: string, img: string) {
    this.name = name;
    this.title = title;
    this.img = img;
  }
}
4;
const officers = [
  new OfficerInfo('Farhan Jamil', 'President', '/imgs/officers/farhan.png'),
  new OfficerInfo('Ken Shibatani', 'Vice President', '/imgs/officers/cen.png'),
  new OfficerInfo(
    'Josiah Myhre',
    'Hydromeda Mechanical Lead',
    '/imgs/officers/josiah.png'
  ),
  new OfficerInfo(
    'Ishaan Mistry',
    'Hydromeda Electrical Lead',
    '/imgs/officers/ishaan.png'
  ),
  new OfficerInfo(
    'Mohammad Kahn',
    'Hydromeda Programming Lead',
    '/imgs/officers/mohammad.png'
  ),
  new OfficerInfo(
    'Brandon Lam',
    'GalaxSea Mechanical Lead',
    '/imgs/officers/farhan.png'
  ),
  new OfficerInfo(
    'Dineshman Bajracharya',
    'GalaxSea Electrical Lead',
    '/imgs/officers/farhan.png'
  ),
  new OfficerInfo(
    'Jonathan Lewis',
    'GalaxSea Programming Lead',
    '/imgs/officers/farhan.png'
  ),
  new OfficerInfo('Tiffany Leung', 'Float Lead', '/imgs/officers/tiffany.png'),
  new OfficerInfo(
    'Muneeb Shahid',
    'MiniFloat Lead',
    '/imgs/officers/muneeb.png'
  ),
  new OfficerInfo(
    'Farman Ali',
    'Event Coordinator',
    '/imgs/officers/farman.png'
  ),
  new OfficerInfo('Anna Xie', 'Marketing Director ', '/imgs/officers/anna.png'),
  new OfficerInfo(
    'Aarian Ahsan',
    'Outreach Director',
    '/imgs/officers/aarian.png'
  ),
  new OfficerInfo('Shoaib Huq', 'Secretary', '/imgs/officers/shoaib.png'),
  new OfficerInfo('Colin Wong', 'Treasurer', '/imgs/officers/colin.png'),
];

export default function Officers() {
  return (
    <div id="Officers" className="officers">
      <h1>Meet the Crew</h1>
      <div className="officers-box">
        {officers.map((officer) => (
          <Officer
            key={officer.name}
            img={officer.img}
            name={officer.name}
            title={officer.title}
            id={officer.name}
          />
        ))}
      </div>
    </div>
  );
}
