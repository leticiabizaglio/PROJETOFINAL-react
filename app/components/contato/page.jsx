import React from "react";
import style from "./contato.module.css";

export default function Contato() {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img className={style.img} src={'https://i.pinimg.com/originals/f4/1a/2f/f41a2faa5eee00b4bcff671a2db68a39.jpg'} alt="Imagem de Contato" />
      </div>
      <div className={style.content}>
        <div className={style.titulo}>
          <h1>Contato</h1>
        </div>
    
        <form className={style.form}>
         <strong>Nome:</strong>
          <input
            name="nome"
            placeholder="Digite seu Nome"
            type="text"
            required
            className={style.input}
          />
          <strong>Email:</strong>
          <input
            name="email"
            placeholder="Digite seu Email"
            type="email"
            required
            className={style.input}
          />
          <strong>Comentário:</strong>
          <textarea
            name="message"
            placeholder="Digite seu comentário"
            rows="5"
            required
            className={`${style.input} ${style.textarea}`}
          ></textarea>
          <button className={style.button} type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
