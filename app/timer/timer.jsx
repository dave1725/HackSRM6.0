'use client'
import { useState, useEffect } from "react";
import styles from "./timer.module.css";

const CountdownTimer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const targetDate = new Date("February 5, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = targetDate - currentTime;

      // Calculate time remaining
      setDays(
        `${Math.floor(timeLeft / (1000 * 60 * 60 * 24)) < 10
          ? "0" + Math.floor(timeLeft / (1000 * 60 * 60 * 24))
          : Math.floor(timeLeft / (1000 * 60 * 60 * 24))}`
      );
      setHours(
        `${Math.floor((timeLeft / (1000 * 60 * 60)) % 24) < 10
          ? "0" + Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
          : Math.floor((timeLeft / (1000 * 60 * 60)) % 24)}`
      );
      setMinutes(
        `${Math.floor((timeLeft / 1000 / 60) % 60) < 10
          ? "0" + Math.floor((timeLeft / 1000 / 60) % 60)
          : Math.floor((timeLeft / 1000 / 60) % 60)}`
      );
      setSeconds(
        `${Math.floor((timeLeft / 1000) % 60) < 10
          ? "0" + Math.floor((timeLeft / 1000) % 60)
          : Math.floor((timeLeft / 1000) % 60)}`
      );

      // Clear interval when the countdown finishes
      if (timeLeft < 0) {
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup the interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.countdownTimer}>
      <div className={styles.countdown}>
        <div className={styles.countdownItem}>
          <span className={styles.glitch}>{days}</span>
          <span>Days</span>
        </div>
        <span>:</span>
        <div className={styles.countdownItem}>
          <span className={styles.glitch}>{hours}</span>
          <span>Hrs</span>
        </div>
        <span>:</span>
        <div className={styles.countdownItem}>
          <span className={styles.glitch}>{minutes}</span>
          <span>Mins</span>
        </div>
        <span>:</span>
        <div className={styles.countdownItem}>
          <span className={styles.glitch}>{seconds}</span>
          <span>Secs</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
