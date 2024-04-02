'use client'
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { SliderData } from './SliderData';
import styles from './slider.module.css'; // Import your CSS module here
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

// Dynamically import the Image component
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });

const Slider: React.FC<{ slides: typeof SliderData }> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className={styles.imagestyle}>
      <h1 className={styles.gallary}>Gallery</h1>
      <div className={styles.arrowcontainer}>
        {SliderData.map((slide, index) => {
          return (
            <div key={index} className={index === current ? styles.imageview : styles.imageviewoff}>
                <FaArrowCircleLeft onClick={prevSlide} className={styles.arrowleft}/>
                {index === current && (
                    <DynamicImage
                    src={slide.image}
                    alt='/'
                    width={1440}
                    height={600}
                    objectFit='cover'
                    />
                )}
                <FaArrowCircleRight onClick={nextSlide} className={styles.arrowright}/>
            </div> 
          );
        })}
         </div>
    </div>
  );
};

export default Slider;
