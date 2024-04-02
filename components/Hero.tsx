import React from 'react';
import styles from "./hero.module.css";
import Link from 'next/link';
interface HeroProps {
  heading: string;
  message: string;
}

const Hero: React.FC<HeroProps> = ({ heading, message }) => {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h2>{heading}</h2>
        <p>{message}</p>
        <button> <Link href='/contact'>Book</Link></button>
      </div>
    </div>
  );
};

export default Hero;
