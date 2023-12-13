import Sobrenos from '@/app/sobrenos/page';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import style from "./footer.module.css";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className={style.global}>
            <div className={style.container}>
                <a href='#'><FaInstagram /></a>
                <a href='#'><FaEnvelope /></a>
                <a href='#'><FaGithub /></a>
                <a href='#'><FaUsers /></a>
            </div>
            <div className={style.footer}>
                <ul className={style.ul}>
                    
                        <Link href="/sobrenos" className={style.li}>
                            Sobre Nós</Link>
                   
                        <Link href="/contato" className={style.li}>
                            Contato</Link>
                  
                </ul>
            </div>
            <div className={style.escrito}>
                <p>CopyRight ©Todos os Direitos Reservados - 2023 <span className={style.span}>By Azuno</span></p>
            </div>
        </div>
    )
}
export default Footer;