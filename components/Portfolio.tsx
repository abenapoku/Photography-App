import React from 'react'
import Image from 'next/image'
import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.text}> Travel Photos</h1>
        <div className={styles.photolay}>
            <div className={styles.photocontainermain}> 
                <Image src='https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D'
                        alt='/'
                        layout='responsive'
                        width={677}
                        height={451}
                        />
            </div>
            <div className={styles.photocontainer}>
            <Image src='https://images.unsplash.com/photo-1598358214378-3f0ca65e5318?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFtYm9vJTIwZm9yZXN0fGVufDB8fDB8fHww'
                    alt='/'
                    width={215}
                    height={217}
                    layout='responsive'
                    objectFit='cover'/>
            </div>
           
            <div className={styles.photocontainer}>
            <Image src='https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D'
                    alt='/'
                    width={215}
                    height={217}
                    layout='responsive'
                    objectFit='cover'/>
            </div>
            <div className={styles.photocontainer}>
            <Image src='https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D'
                    alt='/'
                    width={215}
                    height={217}
                    layout='responsive'
                    objectFit='cover'/>
            </div>
            <div className={styles.photocontainer}>
            <Image src='https://images.unsplash.com/photo-1413752362258-7af2a667b590?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D'
                    alt='/'
                    width={215}
                    height={217}
                    layout='responsive'
                    objectFit='cover'/>
        </div>
    </div>
</div>
  )
}

export default Portfolio