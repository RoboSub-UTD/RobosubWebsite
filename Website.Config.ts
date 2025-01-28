import { Code2, Wrench, Cpu, Briefcase } from "lucide-react";



//Departments section on home page.
export const departments = [
  {
    name: "Programming Department",
    description: "Our software team develops cutting-edge autonomous navigation systems, implements advanced computer vision algorithms, and creates robust control systems. We work with ROS2, Python, and C++ to make our submarine and boat think and act intelligently.",
    icon: Code2,
    color: "#53cbec"
  },
  {
    name: "Mechanical Department",
    description: "The mechanical team designs and fabricates our robots' frames, propulsion systems, and waterproof enclosures. We use CAD software, 3D printing, and traditional manufacturing techniques to create innovative solutions for marine challenges.",
    icon: Wrench,
    color: "#53cbec"
  },
  {
    name: "Electrical Department",
    description: "Our electrical engineers design power distribution systems, integrate sensors, and create custom circuit boards. We manage complex battery systems and implement fail-safe mechanisms to ensure reliable operation in marine environments.",
    icon: Cpu,
    color: "#53cbec"
  },
  {
    name: "Business Department",
    description: "The business team manages our resources, coordinates with sponsors, and handles competition logistics. We develop presentation materials, maintain documentation, and ensure the team's long-term sustainability.",
    icon: Briefcase,
    color: "#53cbec"
  }
];
//departments and officers on officers page
export const officersDeps = [
  {
    title: "Executive Team",
    officers: [
      {
        name: "Ken Shibatani",
        role: "President",
        major: "Mechanical Engineering",
        img: "/imgs/officers/cen.png",
        gradYear: 2027,
      },

      {
        name: "Brandon Lam",
        role: "Vice President",
        major: "Mechanical Engineering",
        img: "/imgs/officers/brandon.png",
        gradYear: 2027
      },
      {
        name: "Colin Wong",
        role: "Treasurer",
        major: "Computer Science",
        img: "/imgs/officers/colin.png",
        gradYear: 2027,
      },
      {
        name: "Nathan Wignall",
        role: "Secretary",
        major: "Computer Engineering",
        img: "/imgs/officers/Nathan_Wignall.jpeg",
        gradYear: 2027,
      },
      {
        name: "James Dungan",
        role: "Outreach Director",
        major: "Business Administration",
        img: "/imgs/officers/james.png",
        gradYear: 2028,
      },
      {
        name: "Anna Xie",
        role: "Marketing Director",
        major: "GIS + Minor in Design",
        img: "/imgs/officers/anna.png",
        gradYear: 2026,
      },
      {
        name: "Farhan Jamil",
        role: "RoboBoat Director",
        major: "Computer Science",
        img: "/imgs/officers/farhan.png",
        gradYear: 2025,
      },
    ]
  },
  {
    title: "MATE ROV Team",
    officers: [
      {
        name: "Josiah Myhre",
        role: "Mechanical Lead",
        major: "Mechanical Engineering",
        img: "",
        gradYear: 2027,
      },
      {
        name: "Mohammad Khan",
        role: "Programming Lead",
        major: "Neuroscience + Math + Minor in CS",
        img: "/imgs/officers/mohammad.png",
        gradYear: 2026,
      },
      {
        name: "Ishaan Mistry",
        role: "Electrical Lead",
        major: "Electrical Engineering",
        img: "/imgs/officers/ishaan.png",
        gradYear: 2024,
      },
      {
        name: "Tiffany Leung",
        role: "Float Lead",
        major: "BMEN",
        img: "/imgs/officers/tiffany.png",
        gradYear: 2025,
      },
      {
        name: "Andrew Dmitrievsky",
        role: "Web Master",
        major: "Computer Science",
        img: "/officers/Example.jpeg",
        gradYear: 2025,
        linkedin: "https://www.linkedin.com/in/andrewdmit/",
        github: "https://github.com/AndrewDmit04"
      },
    ]
  },
  {
    title: "RoboBoat Team",
    officers: [
      {
        name: "Farhan Jamil",
        role: "RoboBoat Director",
        major: "Computer Science",
        img: "/imgs/officers/farhan.png",
        gradYear: 2025,
      },
      {
        name: "Brandon Lam",
        role: "Mechanical Lead",
        major: "Mechanical Engineering",
        img: "/imgs/officers/brandon.png",
        gradYear: 2027
      },
      {
        name: "Dineshman Bajracharya",
        role: "Electrical Lead",
        major: "Computer Engineering",
        img: "/imgs/officers/Dineshman_Bajracharya.jpg",
        gradYear: 2027
      },
      {
        name: "Jonathan Lewis",
        role: "Programming Lead",
        major: "Computer Science",
        img: "/imgs/officers/jonathan.jpg",
        gradYear: 2027
      },
      {
        name: "Nathan Wignall",
        role: "Electrical Team",
        major: "Computer Engineering",
        img: "/imgs/officers/Nathan_Wignall.jpeg",
        gradYear: 2027,
      },
      {
        name: "Samip Lamichhane",
        role: "Electrical Team",
        major: "Electrical Engineering",
        img: "/imgs/officers/Samip.jpg",
        gradYear: 2027,
      },
      {
        name: "Gael Luna",
        role: "Mechanical Team",
        major: "Mechanical Engineering",
        img: "/imgs/officers/Gael_Luna.jpg",
        gradYear: 2025,
      },
      {
        name: "Andrew Patterson",
        role: "Mechanical Team",
        major: "Mechanical Engineering",
        img: "/imgs/officers/Andrew Patterson.jpeg",
        gradYear: 2026,
      },


    ]
  }
];
// stats on officers page
export const stats = {
  members: 60,
  founded: 2022,
  majorsRepresented: 9
};
//projects on projects page
export const projects = [
  {
    title: "MateROV",
    image: "/imgs/logos/Hydromeda.png",
    description: "Our competition focused underwater robotic submarine team",
    points: [
      "MATE ROV 2024 Pioneer 3rd Place and 1st Place Technical Documentation",
      "Custom watertight enclosure",
      "ROS2 architecture and camera vision",
      "Modular electrical system"
    ]
  },
  {
    title: "Float",
    image: "/imgs/projects/float/float.jpg",
    description: "Create a vertical profiling float for MATE ROV",
    points: [
      "Bouyancy Engine System",
      "Data tracking and wireless transmission",
      "PID control implementation",
      "Servicable and modular"
    ]
  },
  {
    title: "RoboBoat",
    image: "/imgs/logos/GalaxSea.png",
    description: "Competition team focused on creating an Autonomous Surface Vehicle",
    points: [
      "Hydrodynamic hull optimization",
      "Modular component design for easy maintenance",
      "Real-time obstacle detection and avoidance using computer vision",
      "Waterproof electronics housing"
    ]
  },
  {
    title: "Mini Float",
    image: "/imgs/projects/mate/screenshot.png",
    description: "Work with a team of 3-4 to create a vertical profiling float",
    points: [
      "Beginner Friendly",
      "PID control implementation",
      "Depth and orientation stabilization",
      "Environmental Data Collection",
    ]
  }
];
