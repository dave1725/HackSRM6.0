'use client'
import React from "react";
import {
  IconMail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./contact.module.css";

const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
    {children}
  </a>
);

const ContactUsSection = () => {
  const handleMailClick = () => {
    toast.info("Email: hacksrm25@gmail.com", {
      position: "top-center",
      autoClose: 6000,
    });
  };

  const handlePhoneClick = () => {
    toast.info("Phone: +91 9345872568", {
      position: "top-center",
      autoClose: 6000,
    });
  };

  const socials = [
    {
      href: "https://www.instagram.com/infinitus.hacksrm/",
      icon: (
        <IconBrandInstagram
          size={50}
          stroke={1.5}
          className={styles.instagramIcon}
        />
      ),
    },
    {
      href: "https://www.linkedin.com/in/hack-srm-0a5624274/",
      icon: (
        <IconBrandLinkedin size={50} stroke={1.5} className={styles.linkedinIcon} />
      ),
    },
  ];

  return (
    <section id="ContactUs" className={styles.contactUsSection}>
      <ToastContainer />
      <div className={styles.header}>Contact Us</div>

      <div className={styles.mailSection}>
        <div className={styles.mailContainer} onClick={handleMailClick}>
          <IconMail className={styles.mailIcon} stroke={1.5} />
        </div>
      </div>

      

      <div className={styles.socialsContainer}>
        {socials.map(({ href, icon }) => (
          <div key={href} className={styles.socialWrapper}>
            <SocialIcon href={href}>{icon}</SocialIcon>
          </div>
        ))}
        <div className={styles.phoneSection}>
        <div className={styles.socialWrapper} onClick={handlePhoneClick}>
          <IconPhone size={50} className={styles.phoneIcon} stroke={1.5} />
        </div>
      </div>
      </div>

      <div className={styles.organizerSection}>
        <h5 className={styles.organizerHeader}>Organized by</h5>
        <Image
          src="/SC-Logo.png"
          alt="Student Council"
          className={styles.organizerImage}
          width={400}
          height={200}
        />
      </div>
    </section>
  );
};

export default ContactUsSection;
