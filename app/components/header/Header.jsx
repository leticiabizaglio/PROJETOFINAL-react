import Link from "next/link";
import style from "./header.module.css";
const Header = () => {
    return (
        <>
        <div className={style.global}>
        <Link href="/page.jsx">Home</Link>
            <Link href="/">Sobre HP</Link>
            <Link href="/sobrenos">Sobrenos</Link>
            <Link href="/personagem">Bruxos</Link>
            <Link href="/casa">Casas</Link>
            <Link href="/varinha">Varinhas</Link>
            <Link href="/personagem/cadastrso-personagem">Registro</Link>
            <Link href="/sobrenos/cadastro-sobrenos"> Sobre</Link>
        </div>
        </>
    );
}
export default Header;