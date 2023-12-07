import { useRouter } from "next/navigation";
import style from "./input.module.css";
import Link from "next/link";
const Input = () => {
    return (
        <div className={style.global}>
          {/* aqui começa a caixa de detalhes de um modelo */}
          <div className={style.container}>
            
            <div className={style.subContainer}>
                <div className={style.titleContainer}>
              <h1 className={style.title}>Nome</h1>
            </div>
              <div className={style.infoContainer1}>
                <div className={style.imgFrame}>
                  <img
                    className={style.img}
                    src="https://pop.proddigital.com.br/wp-content/uploads/sites/8/2022/12/serie-no-universo-harry-potter-pode-ser-realidade-confira-reproducao-hbo-max.jpg"
                    alt="name"
                  ></img>
                </div>
                {/* casa um dessas infos é uma das informações da api, fora a imagem */}
                <div className={style.inputContainer}>
                <div className={style.info}>
                  <h1 className={style.title}>Title1</h1>
                  <input className={style.input} placeholder="Info1"></input>
                </div>
    
                <br></br>
    
                <div className={style.info}>
                  <h1 className={style.title}>Title2</h1>
                  <input className={style.input} placeholder="Info1"></input>
                </div>
    
                <br></br>
    
                <div className={style.info}>
                  <h1 className={style.title}>Title3</h1>
                  <input className={style.input} placeholder="Info1"></input>
                </div>
    
                <br></br>
    
                <div className={style.info}>
                  <h1 className={style.title}>Title4</h1>
                  <input className={style.input} placeholder="Info1"></input>
                </div>
                <div className={style.buttonContainer}>
                    <button className={style.button}>BOTÃO1</button>
                    <button className={style.button}>BOTÃO2</button>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    
}
export default Input;