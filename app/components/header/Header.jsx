import Link from "next/link";
import style from "./header.module.css";
import React, {useState} from "react";
import { FaHatWizard } from "react-icons/fa6";
import { FaWandSparkles } from "react-icons/fa6";
import { GiGriffinShield } from "react-icons/gi";
import { FaFeatherAlt } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdLibraryBooks } from "react-icons/md";
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className={style.global}>
                <div className={style.nav}>
                    <Link href="/" className={style.title}>
                        <img  className={style.logo} src={'../public/semfundo.png'}/>
                    </Link>
                    <div className={style.menu} onClick={() => setMenuOpen(!menuOpen)}>
                        <span className={style.line}></span>
                        <span className={style.line}></span>
                        <span className={style.line}></span>
                    </div>
                    <div className={style.ul} style={{display: menuOpen ? "block" : ""}}>
                        <li className={style.li}>
                            <Link href="/sobreHP">
                            <AiFillThunderbolt />   Sobre HP</Link>
                        </li>

                        <li className={style.li}>
                            <Link href="/personagem">
                            <FaHatWizard />   Bruxos
                            </Link>
                        </li>
                        <li className={style.li}>
                            <Link href="/casa">
                            <GiGriffinShield />  Casas
                            </Link>
                        </li>
                        <li className={style.li}>
                            <Link href="/varinha">
                            <FaWandSparkles />  Varinhas
                                </Link>
                        </li>
                        <li className={style.li}>
                            <Link href="/personagem/cadastrso-personagem">
                            <FaFeatherAlt />   Cadastro
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;