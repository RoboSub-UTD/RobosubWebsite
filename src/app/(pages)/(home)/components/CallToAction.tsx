"use client"
import React from 'react';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';

const Bubble = ({ size, delay, left }: any) => {
    return (
        <motion.div
            className={`absolute rounded-full bg-[#53cbec] opacity-20`}
            style={{
                width: size,
                height: size,
                left: left ? `${Math.random() * 15}%` : `${85 + Math.random() * 15}%`
            }}
            initial={{ y: '100vh' }}
            animate={{
                y: '-100vh',
            }}
            transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            }}
        />
    );
};

const BubbleColumn = ({ side }: any) => {
    return (
        <div className={`fixed ${side}-0 top-0 w-1/6 h-screen pointer-events-none`}>
            {[...Array(8)].map((_, i) => (
                <Bubble
                    key={i}
                    size={10 + Math.random() * 30}
                    delay={Math.random() * 10}
                    left={side === 'left'}
                />
            ))}
        </div>
    );
};

const CallToAction = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    const router = useRouter();

    return (
        
        <div className="bg-[#1b1149] px-4 relative overflow-hidden">
            {/* Bubble columns */}
            <BubbleColumn side="left" />
            <BubbleColumn side="right" />
            <motion.div
                className="absolute bottom-44 right-10 w-96 h-96 rounded-full bg-[#53cbec] opacity-10 blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.15, 0.1, 0.15],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <div className="container mx-auto relative z-10">
                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <button onClick={() => { (router.push('/projects')) }} className="px-8 py-3 bg-[#53cbec] text-[#1b1149] text-3xl font-bold rounded-full hover:bg-[#7dd7ef] transition-colors duration-300">
                        Learn More About Our Projects
                    </button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <button onClick={() => { (router.push('/roboboat')) }} className="px-8 py-3 bg-[#53cbec] text-[#1b1149] text-3xl font-bold rounded-full hover:bg-[#7dd7ef] transition-colors duration-300">
                        Read About Our Current RoboBoat Project
                    </button>
                </motion.div>

            </div>
        </div>
    );
};

export default CallToAction;