'use client';
import React, { useState } from 'react';
import styles from './navbar.module.css'; 
import Link from 'next/link';

const NavLinks = [
  { name: "Home", link: "Home" },
  { name: "About", link: "about" },
  { name: "Tracks", link: "Tracks" },
  { name: "Sponsors", link: "Sponsors" },
  { name: "Organizers", link: "Organizers" },
  { name: "FAQs", link: "FAQS" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className={styles.navbar}>
        {/* Hamburger Menu Icon for Mobile */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <span className={openMenu ? styles.barActive1 : styles.bar}></span>
          <span className={openMenu ? styles.barActive2 : styles.bar}></span>
          <span className={openMenu ? styles.barActive3 : styles.bar}></span>
        </div>

        {/* Links Section */}
        <div className={`${styles.navbarInner} ${openMenu ? styles.showMenu : ''}`}>
          {NavLinks.map((item, index) => (
            <Link key={index} href={`#${item.link}`} onClick={() => setOpenMenu(false)}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Infitinus Button */}
        {/* <div className={styles.infButton}>
          <button>Infitinus'25</button>
        </div> */}
        
      <div className={styles.heroContainer}>
        <h2 className={`${styles.hero} ${styles.glitch} ${styles.layers}`} data-text="INFINITUS25">
          <span>INFINITUS'25</span>
        </h2>
      </div>


      </div>
    </>
  );
};

export default Navbar;
