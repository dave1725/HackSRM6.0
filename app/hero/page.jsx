'use client'
import React from 'react';
import styles from "./hero.module.css";
import CountdownTimer from '../timer/timer';
import Image from 'next/image';
import { IconBrandDiscord } from "@tabler/icons-react";
import Navbar from '../navbar/page';

const hero = () => {

    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
    }, []);

  return (
    <>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <div className={styles.timer}>
                        <h1>HACKATHON STARTS IN!</h1>
                        <div className={styles.time}>
                            <CountdownTimer />
                        </div>
                    </div>
                    <a
                        href="https://discord.gg/GuQqY6AdRp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.discordBtn}
                    >
                        <IconBrandDiscord size={24} />
                        <span>Join Discord</span>
                    </a>
                
                    {/* <div 
                        className="apply-button" 
                        data-hackathon-slug="hack-srm25" 
                        data-button-theme="light"
                    ></div> */}

                    <a
                        href="https://hack-srm25.devfolio.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className={styles.folio}>Devfolio</span>
                    </a> 
                </div>
                
                <div className={styles.heroImg}>
                    <Image
                        src="/hack-srm-logo.png"
                        alt="HackSRM Logo"
                        width={720}
                        height={600}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default hero
