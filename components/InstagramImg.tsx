import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import styles from './instagramimg.module.css'; // Import your CSS module here

// Import the StaticImageData type
import { StaticImageData } from 'next/image';

// Define the Props interface
interface Props {
  socialImg: StaticImageData;
}

// Define the InstagramImg component
const InstagramImg: React.FC<Props> = ({ socialImg }) => {
  return (
    <div className={styles.instacontainer}>  
      <Image src={socialImg} alt='/' className={styles.imagecontainer} layout='responsive' />
      <div className={styles.instapiccontainer} >
      <p className={styles.instapicp}><FaInstagram className={styles.instapic} /></p>
      </div>
    </div>
  );
}

export default InstagramImg;
