import { useRouter } from "next/navigation";
import style from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className={style.global}>
      {/* aqui começa a caixa de detalhes de um modelo */}
      <div className={style.container}>
        <div className={style.subContainer}>

          <div className={style.imgFrame}>
          </div>
          <div className={style.titleContainer}>
            <h1 className={style.title}>Title1</h1>
            <p className={style.description}>Olá, eu sou o modelo! :D</p>
          </div>
        </div>
      </div>
    </div>
  );
}
