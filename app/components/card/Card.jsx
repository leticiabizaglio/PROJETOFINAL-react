
import style from "./card.module.css";
const Card = () => {
    return (
        <div className={style.global}>
          {/* aqui começa a caixa de detalhes de um modelo */}
          <div className={style.container}>
          <div className={style.titleContainer}>
                <h1 className={style.title}>Title1</h1>
                <p className={style.description}>Ola eu sou um modelo lorem</p>
                {/* pode tirar essa descricao */}
              </div>
            <div className={style.subContainer}>
    
              <div className={style.imgFrame}>
              </div>
              
            </div>
          </div>
        </div>
      );
}
export default Card;