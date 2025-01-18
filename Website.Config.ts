import { Code2, Wrench, Cpu, Briefcase } from "lucide-react";

export const departments = [
  {
    name: "Programming Department",
    description: "Our software team develops cutting-edge autonomous navigation systems, implements advanced computer vision algorithms, and creates robust control systems. We work with ROS2, Python, and C++ to make our submarine think and act intelligently underwater.",
    icon: Code2,
    color: "#53cbec"
  },
  {
    name: "Mechanical Department",
    description: "The mechanical team designs and fabricates our submarine's hull, propulsion systems, and waterproof enclosures. We use CAD software, 3D printing, and traditional manufacturing techniques to create innovative solutions for underwater challenges.",
    icon: Wrench,
    color: "#53cbec"
  },
  {
    name: "Electrical Department",
    description: "Our electrical engineers design power distribution systems, integrate sensors, and create custom circuit boards. We manage complex battery systems and implement fail-safe mechanisms to ensure reliable operation in underwater environments.",
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

export const officersDeps = [
    {   title : "Programing Department",
        officers : [
      {
        name: "Andrew Dmitrievsky",
        role: "Software Lead",
        major: "Computer Science",
        img : "/officers/Example.jpeg",
        gradYear: 2025,
        linkedin: "https://linkedin.com/in/sarahchen",
        github: "https://github.com/sarahchen"
      },
      {
        name: "James Rodriguez",
        role: "Computer Vision Lead",
        major: "Software Engineering",
        img : "",
        gradYear: 2025,
        linkedin: "https://linkedin.com/in/jamesrodriguez",
        github: "https://github.com/jrodriguez"
      }
    ]},
    {   title : "Mechanical Department",
        officers: [
      {
        name: "Emily Taylor",
        role: "Mechanical Lead",
        major: "Mechanical Engineering",
        img : "",
        gradYear: 2026,
        linkedin: "https://linkedin.com/in/emilytaylor",
        github: "https://github.com/etaylor"
      },
      {
        name: "Michael Chang",
        role: "Design Lead",
        major: "Mechanical Engineering",
        img : "",
        gradYear: 2026,
        linkedin: "https://linkedin.com/in/michaelchang",
        github: "https://github.com/mchang"
      }
    ]},
    {   title : "Electrical Department",
        officers: [
      {
        name: "Alex Kumar",
        role: "Electrical Lead",
        major: "Electrical Engineering",
        img : "",
        gradYear: 2025,
        linkedin: "https://linkedin.com/in/alexkumar",
        github: ""
      }
    ]}
];

export const stats = {
    members: 156,
    founded: 2018,
    majorsRepresented: 12
  };

export const projects = [
    {
      title: "MateROV",
      image: "/api/placeholder/800/500",
      description: "Advanced navigation system for underwater autonomous operation",
      points: [
        "Real-time obstacle detection and avoidance using computer vision",
        "Multi-sensor fusion for precise localization",
        "Dynamic path planning algorithms",
        "Autonomous mission execution capabilities"
      ]
    },
    {
      title: "Float",
      image: "/api/placeholder/800/500",
      description: "Computer vision system for underwater object detection and tracking",
      points: [
        "Deep learning-based object detection",
        "Real-time image processing pipeline",
        "Underwater color correction algorithms",
        "Multi-camera synchronization system"
      ]
    },
    {
      title: "RoboBoat",
      image: "/api/placeholder/800/500",
      description: "Custom-designed submarine hull and mechanical systems",
      points: [
        "Hydrodynamic hull optimization",
        "Modular component design for easy maintenance",
        "Custom thruster configuration",
        "Waterproof electronics housing"
      ]
    },
    {
      title: "Mini ROV",
      image: "/api/placeholder/800/500",
      description: "Advanced control systems for precise submarine movement",
      points: [
        "PID control implementation",
        "Depth and orientation stabilization",
        "Thruster mapping and optimization",
        "Real-time performance monitoring"
      ]
    }
  ];