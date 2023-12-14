"use client"
import React from "react";
import style from "./contato.module.css";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Divisory from "../components/divisory/Divisory";

export default function Contato() {
    return (
        <div className={style.pai}>
            <Header/>
            <Divisory/>
        <div className={style.container}>
       
            <div className={style.imgContainer}>
                <img className={style.img} src={'https://i.pinimg.com/originals/f4/1a/2f/f41a2faa5eee00b4bcff671a2db68a39.jpg'} alt="Imagem de Contato" />
            </div>
            <div className={style.content}>
                <div className={style.titulo}>
                    <h1>Contato</h1>
                </div>

                <form className={style.form}>
                    
                    <input
                        name="nome"
                        placeholder="Digite seu Nome"
                        type="text"
                        required
                        className={style.input}
                    />
                  
                    <input
                        name="email"
                        placeholder="Digite seu Email"
                        type="email"
                        required
                        className={style.input}
                    />
                 
                    <input
                        name="message"
                        placeholder="Digite seu comentário"
                        rows="5"
                        required
                        className={style.input} 
                    ></input>
                    <button className={style.button} type="submit">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
        <Divisory/>
        <Footer/>
        </div>
       
    );
}
