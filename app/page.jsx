"use client";

import Link from "next/link";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import style from "./page.module.css";
import Card from "./components/card/Card";
import { FaArrowRight } from 'react-icons/fa'
import { IoSparkles } from "react-icons/io5";
import { GiSnitchQuidditchBall } from "react-icons/gi";
import Sobrenos from "./sobrenos/page";
import Divisory from "./components/divisory/Divisory";
import { FaFeatherAlt } from "react-icons/fa";
// import PopUp from "./components/popUp/PopUp"

export default function Home() {
  return (
    <div className={style.container}>
      <Header></Header>

      <div className={style.section0}>
        <div className={style.titleHolder}>
          <p className={style.mainTitle}>✦Beco diagonal✦</p>
          <Link className={style.subMainTitle} href={"./sobrenos"}>Um blog por Azuno</Link>
        </div>
      </div>

      <Divisory/>

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

        <div className={style.section2}>
        <div className={style.sectionContainer}>
          <div className={style.mainText}>
            <p className={style.title}>Novo documentário da HBO Max</p>
            <p className={style.subtitle}>20 anos de Harry Potter</p>
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

      <Divisory/>

      <div className={style.section3}>
        <div className={style.sectionContainer}>
          <div className={style.mainText}>
            <p className={style.title}>Você em Hogwarts!</p>
            <p className={style.subtitle}>Criação de Personagem</p>
          </div>
          <div className={style.imageContainer}>
            <img className={style.img} src="https://wallpapers.com/images/hd4/harry-potter-hogwarts-mail-aadihirdxb66pk57.jpg"></img>
          </div>
          <div className={style.linkSection}>
            <Link className={style.link} href={"./personagem/cadastro-personagem"}>Registre-se</Link>
            <FaFeatherAlt className={style.arrowIcon}/>
          </div>
        </div>
      </div>


      <div className={style.section4}>
        <div className={style.sectionContainer}>
          <div className={style.mainText}>
            <p className={style.title}>Novato nesse universo?</p>
            <p className={style.subtitle}>Uma resumida...</p>
          </div>
          <div className={style.imageContainer}>
            <img className={style.img} src="https://www.enwallpaper.com/wp-content/uploads/2023/07/harry-potter-wallpaper-20th-anniversary-by-thekingblader995-devwdyw-pre-1.jpg"></img>
          </div>
          <div className={style.linkSection}>
            <Link className={style.link} href={"./sobreHP"}>Sobre Harry Potter</Link>
            <IoSparkles className={style.arrowIcon}/>
          </div>
        </div>
      </div>

      <Divisory/>


      

      <Footer></Footer>
    </div>
  );
}
