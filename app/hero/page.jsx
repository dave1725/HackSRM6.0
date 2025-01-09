import React from 'react';
import styles from "./hero.module.css";
import CountdownTimer from '../timer/timer';
import Image from 'next/image';
import { IconBrandDiscord } from "@tabler/icons-react";

const hero = () => {
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
                            href="https://discord.gg/H7tcpbv7Vq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.discordBtn}
                        >
                        <IconBrandDiscord size={24} />
                        <span>Join Discord</span>
                        </a>
                        <a
                            href="https://hack-srm24.devfolio.co/"
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
                        width={700}
                        height={500}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default hero
