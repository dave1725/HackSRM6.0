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
                                src="/dave.jpg"
                                alt=""
                                loading="lazy"
                                width={130}
                                height={220}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> 
                            <div>
                                <div className={styles.name}>
                                    Laxman
                                </div>
                                <div className={styles.role}>
                                    President, SC
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                            <Image
                                src="/dave.jpg"
                                alt=""
                                loading="lazy"
                                width={130}
                                height={220}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> 
                            <div>
                                <div className={styles.name}>
                                    Ankith
                                </div>
                                <div className={styles.role}>
                                    SC
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                             <Image
                                src="/dave.jpg"
                                alt=""
                                loading="lazy"
                                width={130}
                                height={220}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> 
                            <div>
                                <div className={styles.name}>
                                    Dave
                                </div>
                                <div className={styles.role}>
                                    Lead
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                            {/* <Image
                                src={organizer.image}
                                alt=""
                                loading="lazy"
                                width={64}
                                height={64}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> */}
                            <div>
                                <div className={styles.name}>
                                    Meghana K
                                </div>
                                <div className={styles.role}>
                                    Co-Lead
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                            {/* <Image
                                src={organizer.image}
                                alt=""
                                loading="lazy"
                                width={64}
                                height={64}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> */}
                            <div>
                                <div className={styles.name}>
                                    Dave
                                </div>
                                <div className={styles.role}>
                                    Lead
                                </div>
                            </div>
                        </div>

                        <div  className={styles.innerPoints}> 
                            {/* <Image
                                src={organizer.image}
                                alt=""
                                loading="lazy"
                                width={64}
                                height={64}
                                className="rounded-md object-cover object-center sm:h-32 sm:w-36 md:h-40 md:w-40"
                                /> */}
                            <div>
                                <div className={styles.name}>
                                    Dave
                                </div>
                                <div className={styles.role}>
                                    Lead
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
