import Image from "next/image";
import Hero from "../../components/Hero";
import styles from ".page.module.css"
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import {SliderData} from "../../components/SliderData"
import Instagram from "../../components/Instagram";

interface Props {
  slides: typeof SliderData; // Assuming SliderData is an array
}
export default function Home() {
  return (
  <div>
    
      <title>Photography Next App</title>
     
    
      <Hero heading='Vivid Photography' message='To capure lifes greatest moments Vividly'/>
      <Slider slides={SliderData}/>
      <Instagram/>
  </div>
  );
}
