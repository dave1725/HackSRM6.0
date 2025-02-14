import React from 'react';
import styles from "./organizers.module.css";
import Image from 'next/image';

const Organizers = () => {
  return (
    <>
        <div id="Organizers" className={styles.temp}></div>
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>Organizers</h1>
                <div className={styles.innerContainer}>
                    <div className={styles.points}>
                        <div  className={styles.innerPoints}> 
                            <Image
                                src="/laxman.png"
                                alt=""
                                loading="lazy"
                                width={170}
                                height={220}
                                /> 
                            <div>
                                <div className={styles.name}>
                                    Laxman
                                </div>
                                <div className={styles.role}>
                                    President
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                            <Image
                                src="/nivedha.png"
                                alt=""
                                loading="lazy"
                                width={170}
                                height={220}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> 
                            <div>
                                <div className={styles.name}>
                                    Nivedha
                                </div>
                                <div className={styles.role}>
                                    Vice President
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                            <Image
                                src="/ankith.png"
                                alt=""
                                loading="lazy"
                                width={170}
                                height={220}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> 
                            <div>
                                <div className={styles.name}>
                                    Ankith
                                </div>
                                <div className={styles.role}>
                                    General Secretary
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                            <Image
                                src="/rishabh.png"
                                alt=""
                                loading="lazy"
                                width={170}
                                height={220}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> 
                            <div>
                                <div className={styles.name}>
                                    Rishabh
                                </div>
                                <div className={styles.role}>
                                    Treasurer
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                            <Image
                                src="/nithin.png"
                                alt=""
                                loading="lazy"
                                width={170}
                                height={220}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> 
                            <div>
                                <div className={styles.name}>
                                    Nithenn
                                </div>
                                <div className={styles.role}>
                                    Technical Executive
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                             <Image
                                src="/dave.jpg"
                                alt=""
                                loading="lazy"
                                width={170}
                                height={220}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> 
                            <div>
                                <div className={styles.name}>
                                    Dave
                                </div>
                                <div className={styles.role}>
                                    HackSRM Lead
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                            <Image
                                src="/meghana.JPG"
                                alt=""
                                loading="lazy"
                                width={170}
                                height={220}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                            /> 
                            <div>
                                <div className={styles.name}>
                                    Meghana
                                </div>
                                <div className={styles.role}>
                                    HackSRM Co-Lead
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Organizers
