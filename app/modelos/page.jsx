import { useRouter } from "next/navigation";
import style from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className={style.global}>
      {/* aqui começa a caixa de detalhes de um modelo */}
      <div className={style.container}>
      <div className={style.infoContainer1}>
        <div className={style.imgFrame}>
          <img className={style.img} src='https://pop.proddigital.com.br/wp-content/uploads/sites/8/2022/12/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max.jpg' alt="name"></img>
        </div>
        {/* casa um dessas infos é uma das informações da api, fora a imagem */}
        <div className={style.info}>
          <h1 className={style.title}>Title1</h1>
          <p className={style.description}>
            Description1 Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Porro similique cum provident autem veritatis minima, nam
            praesentium est rem dolores fuga temporibus non voluptate mollitia
            perferendis exercitationem adipisci nemo asperiores!
          </p>
          </div>
        

        <div className={style.info}>
          <h1 className={style.title}>Title2</h1>
          <p className={style.description}>
            Description2 Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Illo minus consequatur, voluptatibus sapiente unde a in
            expedita praesentium sed necessitatibus, debitis fugit doloremque
            deleniti eius ducimus quos repellendus distinctio beatae.
          </p>
        </div>
        </div>
        
        <div className={style.infoContainer2}>
        <div className={style.info}>
          <h1 className={style.title}>Title3</h1>
          <p className={style.description}>
            Description3 Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Aut possimus quisquam iste laboriosam, fuga distinctio harum
            tenetur aspernatur dolorem minima quaerat sapiente a accusantium
            nostrum voluptates. Ea possimus est soluta?
          </p>
        </div>
        

        <div className={style.info}>
          <h1 className={style.title}>Title4</h1>
          <div className={style.infoContainer2}>
          <p className={style.description}>
            Description4 Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Aut possimus quisquam iste laboriosam, fuga distinctio harum
            tenetur aspernatur dolorem minima quaerat sapiente a accusantium
            nostrum voluptates. Ea possimus est soluta?
          </p>
        </div>
        </div>

        <div className={style.info}>
          <h1 className={style.title}>Title5</h1>
          <div className={style.infoContainer2}>
          <p className={style.description}>
            Description5 Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Aut possimus quisquam iste laboriosam, fuga distinctio harum
            tenetur aspernatur dolorem minima quaerat sapiente a accusantium
            nostrum voluptates. Ea possimus est soluta?
          </p>
        </div>
        </div>
        </div>

      </div>
      </div>
  );
}
