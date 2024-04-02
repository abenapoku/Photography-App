import React from 'react'
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
        <h1>Work With Us</h1>
        <form>
            <div className={styles.formcontainer}>
                <input className={styles.textreg} type="text" placeholder='Name'/>
                <input  className={styles.textreg} type='email' placeholder='Email'/>
            </div>
            <input  className={styles.textregin} type='text' placeholder='Subject'/>
            <textarea  className={styles.textregin} name="" id="" cols={30} rows={10} placeholder='Message'></textarea>
            <button className={styles.button}>Submit</button>
        </form>
    </div>
  )
}

export default Contact