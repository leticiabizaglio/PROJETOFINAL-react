import Link from "next/link";
const Header = () => {
    return (
        <>
        <Link href="/page.jsx">Home</Link>
            <Link href="/">Sobre HP</Link>
            <Link href="/sobrenos">Sobrenos</Link>
            <Link href="/personagem">Bruxos</Link>
            <Link href="/casa">Casas</Link>
            <Link href="/varinha">Varinhas</Link>
            <Link href="/personagem/cadastro-personagem">Registro</Link>
            <Link href="/sobrenos/cadastro-sobrenos">Registro Sobre</Link>
        </>
    );
}
export default Header