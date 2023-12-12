'use client'
import { useRouter } from "next/navigation";
import style from "./page.module.css";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const redirecionar = (nome) => {
    router.push(`/modelos/modelo-detalhe/${nome}`);
  }
  return (
    <div className={style.global}>
      {/* aqui começa a caixa de detalhes de um modelo */}
      <div className={style.container} onClick={() => redirecionar("Felipe")}>
        <div className={style.subContainer}>

          <div className={style.imgFrame}>
          </div>
          <div className={style.titleContainer}>
            <h1 className={style.title}>Title1</h1>
            <p className={style.description}>Ola eu sou um modelo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
