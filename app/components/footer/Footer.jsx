import Sobrenos from '@/app/sobrenos/page';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import style from "./footer.module.css";

const Footer = () => {
    return (
        <div className={style.global}>
            <div className={style.footercontent}>
                <div className={style.footercontact}>

                    <Link href={"/"} className={style.home}>
                        <img src="https://see.fontimg.com/api/renderfont4/MVZ6w/eyJyIjoiZnMiLCJoIjo2NiwidyI6MTI1MCwiZnMiOjUzLCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiI0Y2RjVGNSIsInQiOjF9/SGFycnkgUG90dGVy/harry-p.png" className={style.hp}></img>
                    </Link>
                    <a href='#' className={style.footerlink}>
                        <a className={style.footericons1}>
                            <FaEnvelope />
                        </a >
                        <a className={style.footericons2}>
                            <FaGithub />
                        </a>
                        <a className={style.footericons3}>
                            <FaUsers />
                        </a>
                    </a>
                    {/* <p className={style.always}>after all this time? always</p> */}
                    <div className={style.footersocialmedia}>

                        <div className={style.footerlist}>
                            <h3 className={style.pgs}>Páginas</h3>

                            <Link href={"/sobrenos"} className={style.sobrenos}>Sobre nós</Link>
                            <Link href={"/contato"} className={style.contato}>Contato</Link>
                            <Link href={"/sobreHP"} className={style.sobrehp}>Sobre HP</Link>

                        </div>


                   

                    </div>
                    <div>
                    </div>
                </div>
                <div className={style.reservados}>
                <p className={style.direitos}>©Todos os Direitos Reservados</p>
                </div>

               
            </div>
        </div>

    )
}
export default Footer;