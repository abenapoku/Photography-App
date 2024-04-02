import React from 'react';
import InstagramImg from './InstagramImg';
import { FaInstagram } from 'react-icons/fa';
import IgImg1 from '../public/ig-img-1.jpeg';
import IgImg2 from '../public/ig-img-2.jpeg';
import IgImg3 from '../public/ig-img-3.jpeg';
import IgImg4 from '../public/ig-img-4.jpeg';
import IgImg5 from '../public/ig-img-5.jpeg';
import IgImg6 from '../public/ig-img-6.jpeg';
import styles from './instagram.module.css'; // Import your CSS module here

const Instagram = () => {
  return (
    <div className={styles.container}>
      <p className={styles.follow}>Follow Me On Instagram</p>
      <p className={styles.attag}>@VividPhotos</p>
      <div className={styles.instacontainer}>
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
       
      </div>
    </div>
  );
}

export default Instagram;
