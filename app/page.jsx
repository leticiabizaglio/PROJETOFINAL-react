"use client";

import Link from "next/link";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import style from "./page.module.css";
import Card from "./components/card/Card";
import { FaArrowRight } from 'react-icons/fa'
// import PopUp from "./components/popUp/PopUp"

export default function Home() {
  return (
    <div className={style.container}>
      <Header></Header>

     
      <h1>HARRY POTTER</h1>

      <div className={style.section1}>
        <div className={style.sectionContainer}>
          <div className={style.mainText}>
            <p className={style.title}>O novo universo de Harry Potter</p>
            <p className={style.subtitle}>Hogwarts Legacy</p>
          </div>
          <div className={style.imageContainer}>
            <img className={style.img} src="https://staticg.sportskeeda.com/editor/2021/12/76294-16396833507282.png"></img>
          </div>
          <div className={style.linkSection}>
            <Link className={style.link} href={"https://www.hogwartslegacy.com/pt-br"}>Confira</Link>
            <FaArrowRight className={style.arrowIcon}/>
          </div>
        </div>
      </div>

        <hr className={style.hr}></hr>

      

      <Footer></Footer>
    </div>
  );
}
