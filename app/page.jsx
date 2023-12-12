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

        <div className={style.section2}>
        <div className={style.sectionContainer}>
          <div className={style.mainText}>
            <p className={style.title}>20 anos de Harry Potter!</p>
            <p className={style.subtitle}>Documentário da HBOMAX</p>
          </div>
          <div className={style.imageContainer}>
            <img className={style.img} src="https://www.planocritico.com/wp-content/uploads/2022/01/harry-potter-20-anos-hogwarts-plano-critico.jpg"></img>
          </div>
          <div className={style.linkSection}>
            <Link className={style.link} href={"https://youtu.be/FhJx6bNBlTY?feature=shared"}>Assita ao trailer</Link>
            <FaArrowRight className={style.arrowIcon}/>
          </div>
        </div>
      </div>

      

      <Footer></Footer>
    </div>
  );
}
