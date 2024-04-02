'use client'
import React, {useState, useEffect} from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState<boolean>(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () =>{
        setNav(!nav);
    };

    useEffect(()=>{
        const changeColor = () =>{
            if(window.scrollY >= 90){
                setColor('white')
                setTextColor('black')
            }else{
                setColor('transparent')
                setTextColor('white')
            }
        };
        window.addEventListener('scroll', changeColor);
    },[]);

  return (
  <div style={{backgroundColor: `${color}`}} className={styles.nav}>
    <div className={styles.container}>
        <Link href='/'> <p style={{color: `${textColor}`}} className={styles.logo}>Vivid</p></Link>
        <ul style={{color: `${textColor}`}} className={styles.listcontent}>
            <li >
                <Link href='/'>Home</Link>
            </li>
            <li >
                <Link href='/#gallery'>Gallery</Link>
            </li>
            <li >
                <Link href='/ourwork'> Our Work</Link>
            </li>
            <li >
                <Link href='/contact'>Contact</Link>
            </li>
        </ul>

        <div onClick={handleNav} className={styles.mobilebutton}>
        {nav ? <AiOutlineClose className={styles.button} style={{color: `${textColor}`}}/> : <AiOutlineMenu className={styles.button} style={{color: `${textColor}`}}/>}
        </div>
        <div className={nav ? styles.scrollbar : styles.scrollbaroff}>
            <ul >
                <li onClick={handleNav}>
                    <Link href='/'>Home</Link>
                </li>
                <li onClick={handleNav}>
                    <Link href='/#gallery'>Gallery</Link>
                </li>
                <li onClick={handleNav}>
                    <Link href='/ourwork'> Our Work</Link>
                </li>
                <li onClick={handleNav}>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  </div>
  )
}

export default Navbar