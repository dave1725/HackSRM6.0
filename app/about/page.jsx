import React from 'react';
import styles from "./about.module.css";
import {
    IconHexagon3d,
    IconBroadcast,
    IconAward,
    IconRocket,
  } from "@tabler/icons-react";

  const data = [
    {
      icon: <IconHexagon3d stroke={1.5} className="h-8 w-8 text-white" />,
      title: "Experience",
      description:
        "Participating in a hackathon offers an opportunity to work collaboratively with like-minded individuals to develop creative solutions to real-world problems.",
    },
    {
      icon: <IconBroadcast stroke={1.5} className="h-8 w-8 text-white" />,
      title: "Networking",
      description:
        "Networking is the act of creating and maintaining relationships with individuals and groups in order to exchange information, ideas, and opportunities. ",
    },
    {
      icon: <IconAward stroke={1.5} className="h-8 w-8 text-white" />,
      title: "Prizes",
      description:
        "A great way to win prizes and gain recognition for your work. The prizes can range from cash to internships, and the recognition can be in the form of a job offer or a scholarship.",
    },
    {
      icon: <IconRocket stroke={1.5} className="h-8 w-8 text-white" />,
      title: "Fun",
      description:
        "Hackathons are a great way to meet new people, learn new skills, and have fun. You can also win prizes for your work.",
    },
];

const About = () => {
  return (
    <>
    <div id="about" className={styles.temp}></div>
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h2>
                    Why you need to participate in HackSRM? 
                </h2>
                <p>
                    Hack SRM is a 24-hour hackathon where you and your team can turn your ideas into reality. Collaborate, innovate, and compete for amazing prizes. It's the perfect chance to learn new skills, make lasting connections, and have an unforgettable experience!
                </p>
            </div>
            <div className={styles.points}>
                {data.map((data, index) => (
                    <div key={index} className={styles.innerPoints}>
                        <div className={styles.iconPoints}>
                            {data.icon}
                        </div>
                        <h3 className="text-center text-xl font-semibold text-white">
                            {data.title}
                        </h3>
                        <p className="text-center font-normal text-base text-gray-300">
                            {data.description}
                        </p>
                    </div>
                    ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default About
