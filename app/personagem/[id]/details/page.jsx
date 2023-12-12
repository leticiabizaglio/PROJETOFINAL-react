import { useRouter } from "next/navigation";
import style from "./page.module.css";
import Link from "next/link";
import Divisory from "@/app/components/divisory/Divisory";
import { Personagem } from "@/app/personagem/page";

export default function Page(personagem){
  
  return (
    <div className={style.global}>
      {/* aqui começa a caixa de detalhes de um modelo */}
      <div className={style.container}>
      <div className={style.titleContainer}>
            <p className={style.title}>{personagem.nome}</p>
        </div>
        <div className={style.subContainer}>
      <div className={style.infoContainer1}>
        <div className={style.imgFrame}>
          <img className={style.img} src={personagem.imagem} alt="name"></img>
          
        </div>
        {/* casa um dessas infos é uma das informações da api, fora a imagem */}
        
        <div className={style.info}>
          <h1 className={style.title}>Casa</h1>
          <p className={style.description}>
          {personagem.casa}
          </p>
          </div>
        

        <div className={style.info}>
          <h1 className={style.title}>Patrono</h1>
          <p className={style.description}>
          {personagem.patrono}
          </p>
        </div>
        </div>
        <div className={style.infoContainer2}>
        <div className={style.info}>
          <h1 className={style.title}>Varinha</h1>
          <p className={style.description}>
          {personagem.varinha}
          </p>
        </div>
        

        <div className={style.info}>
          <h1 className={style.title}>Ator</h1>
          <div className={style.infoContainer2}>
          <p className={style.description}>
          {personagem.ator}</p>
        </div>
        </div>

        {/* se quiser tirar algum dos blocos de informações, nao tem problema, porem ajuste 
        o justify-content */}

        <div className={style.info}>
          <h1 className={style.title}>ID</h1>
          <div className={style.infoContainer2}>
          <p className={style.description}>
          {personagem.id}
          </p>
        </div>
        </div>
        </div>

      </div>
      </div>
      </div>
  );
}
