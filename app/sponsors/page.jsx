import React from 'react';
import styles from "./sponsors.module.css";
import Image from 'next/image';

const Sponsors = () => {
  return (
    <>
        <div id="Sponsors" className={styles.temp}></div>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 id={styles.gold}>GOLD SPONSORS</h1>
                
                <div className={styles.innerContainer}>
                    <div className={styles.points}>
                
                        <div  className={styles.innerPoints}>
                            <div className={styles.iconPoints}>
                                
                            </div>
                            <h3>
                            
                            </h3>
                            <p>
                                
                            </p>
                        </div>
                        <div  className={styles.innerPoints}>
                            <div className={styles.iconPoints}>
                                
                            </div>
                            <h3>
                                
                            </h3>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </div>

                <h1 className={styles.silver}>SILVER SPONSORS</h1>
                <div className={styles.innerContainer}>
                    <div className={styles.points}>
                        <div  className={styles.innerPoints}> 
                            <Image
                                    src="/ethindia.png"
                                    alt="HackSRM Logo"
                                    width={300}
                                    height={100}
                            />
                        </div>
                        <div  className={styles.innerPoints}> 
                            <Image
                                    src="/devfolio.png"
                                    alt="HackSRM Logo"
                                    width={300}
                                    height={100}
                            />
                        </div>
                        <div  className={styles.innerPoints}> 
                            <Image
                                    src="/polygon.png"
                                    alt="HackSRM Logo"
                                    width={300}
                                    height={100}
                            />
                        </div>
                        <div  className={styles.innerPoints}>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sponsors
