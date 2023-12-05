"use client";

import Link from "next/link";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import style from "./page.module.css";
// import PopUp from "./components/popUp/PopUp"

export default function Home() {
  return (
    <div>
      <Header></Header>
      <h1>HARRY POTTER</h1>
      <div className={style.container}>
        <div className={style.section1}>
          <div className={style.bg}>{/* imagem hogwarts Legacy */}</div>
          <h1>Você já conferiu</h1>
          <Link href="https://www.hogwartslegacy.com/pt-br">
            Hogwarts Legacy
          </Link>
        </div>

        <br></br>

        <div className={style.section2}>
          <div className={style.bg}>{/* imagem aleatoria harry potter */}</div>
          <h1>E o novo documentario?</h1>
          <Link href="https://www.google.com/search?client=opera-gx&q=documentario+hbo+max+harry+potter&sourceid=opera&ie=UTF-8&oe=UTF-8&si=ALGXSlZZLz93Q5j8HVkpXyxpTaoqXw8cocmoi-DFAGsSj5diF-MUY30eVVhwmxY_ZSnPuRCwzAeuaxVouSu1mw5OiIXbs2XcWIOtcTdUIZSsbcqCAR3pEaeE08pS5v7Actv9DQbeNa4l_CPUHK1w1TECrdMOoC0SvFV_QavEBtD0bfxyVTO22PI%3D&ictx=1&ved=2ahUKEwi2lcKIgvmCAxW7p5UCHbtICXEQ_coHegQINRAD">
            Comemoração 20 anos de Harry Potter
          </Link>
        </div>

        <br></br>

        <div className={style.section3}>
          <div className={style.bg}>{/* imagem aleatoria harry potter */}</div>
          <h1>Uma visão geral sobre Harry Potter</h1>
          <Link href="/">Sobre o HP</Link>
      </div>

<br></br>

<div className={style.section4}>
          <div className={style.bg}>{/* imagem aleatoria harry potter */}</div>
          <h1>Faça seu própio Personagem!</h1>
          <Link href="/">Link para o personagem</Link>
      </div>



      <Footer></Footer>
    </div>
    </div>
  );
}
