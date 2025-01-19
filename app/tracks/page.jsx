import React from 'react'
import styles from "./tracks.module.css";
import { IconTrophy } from "@tabler/icons-react";
import {
  IconRobot,
  IconBrandXbox,
  IconCircuitDiodeZener,
  IconCurrencyEthereum,
  IconCardboards,
  IconBrandOpenSource,
} from "@tabler/icons-react";

const data = [
  {
    icon: <IconTrophy stroke={1.5} className={styles.icon} />,
    title: "Grand Prize: 1 Lakhs",
    description:
      "For the top 2 projects. The winner takes 60k and the runner takes home 40k",
  },
  {
    icon: <IconTrophy stroke={1.5} className={styles.icon} />,
    title: "Grand Prize: ",
    description:
      "To be updated soon...",
  },
  {
    icon: <IconRobot stroke={1.5} className={styles.icon} />,
    title: "AI & ML - 10K INR",
    subtitle:"10k INR",
    description:
      "Create innovative applications that leverage machine learning algorithms to solve complex problems, natural language and computer vision.",
  },
  {
    icon: <IconCircuitDiodeZener stroke={1.5} className={styles.icon} />,
    title: "I-O-T - 10K INR",
    description:
      "Build connected devices and systems that collect and analyze data in real-time, creating innovative solutions that improve efficiency."
  },
  {
    icon: <IconCurrencyEthereum stroke={1.5} className={styles.icon} />,
    title: "Web 3.0 - 10K INR",
    description:
      "Build decentralized applications (dApps) that run on the blockchain, smart contracts to facilitate secure and transparent transactions.",
  },
  {
    icon: <IconBrandOpenSource stroke={1.5} className={styles.icon} />,
    title: "Open Innovation - 10K INR",
    description:
      "Make Best use of Technology to solve real world problems and make a difference.",
  },
  {
    icon: <IconCardboards stroke={1.5} className={styles.icon} />,
    title: "AR/VR - 10K INR",
    description:
      "Dive into the world of AR/VR and craft immersive experiences that merge reality with innovation. Create games, simulations, or tools that redefine what's possible."
  }  
];

const Tracks= () => {
  return (
    <>
    <div id="Tracks" className={styles.temp}></div>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Main Track</h1>
        <p>Prizes worth more than 2 Lakhs!</p>
        <div className={styles.innerContainer}>
          <div className={styles.points}>
              <div  className={styles.innerPoints}>
                <div className={styles.iconPoints}>
                    {data[0].icon}
                </div>
                <div>
                    <h3>{data[0].title}</h3>
                </div>
                <div>
                    <p>{data[0].description}</p>
                </div>
              </div>
              <div  className={styles.innerPoints}>
                <div className={styles.iconPoints}>
                    {data[1].icon}
                </div>
                <div>
                    <h3>{data[1].title}</h3>
                </div>
                <div>
                    <p>{data[1].description}</p>
                </div>
              </div>
              
          </div>
        </div>
        <h1>Tracks</h1>
        <p>Side tracks to keep an eye on! 🚀</p>
        <div className={styles.innerContainer}>
          <div className={styles.points}>

          <div  className={styles.innerPoints}>
                <div className={styles.iconPoints}>
                    {data[2].icon}
                </div>
                <div>
                    <h3>{data[2].title}</h3>
                </div>
                <div>
                    <p>{data[2].description}</p>
                </div>
              </div>
              <div  className={styles.innerPoints}>
                <div className={styles.iconPoints}>
                    {data[3].icon}
                </div>
                <div>
                    <h3>{data[3].title}</h3>
                </div>
                <div>
                    <p>{data[3].description}</p>
                </div>
              </div>
              <div  className={styles.innerPoints}>
                <div className={styles.iconPoints}>
                    {data[4].icon}
                </div>
                <div>
                    <h3>{data[4].title}</h3>
                </div>
                <div>
                    <p>{data[4].description}</p>
                </div>
              </div>

              <div  className={styles.innerPoints}>
                <div className={styles.iconPoints}>
                    {data[5].icon}
                </div>
                <div>
                    <h3>{data[5].title}</h3>
                </div>
                <div>
                    <p>{data[5].description}</p>
                </div>
              </div>

              <div  className={styles.innerPoints}>
                <div className={styles.iconPoints}>
                    {data[6].icon}
                </div>
                <div>
                    <h3>{data[6].title}</h3>
                </div>
                <div>
                    <p>{data[6].description}</p>
                </div>
              </div>
        </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Tracks;