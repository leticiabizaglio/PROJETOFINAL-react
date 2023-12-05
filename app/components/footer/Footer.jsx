import Sobrenos from '@/app/sobrenos/page';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
const Footer = () => {
    return(
        <div>
        <div>
        <FaEnvelope />
        <FaGithub />
        <FaUsers />
        <Link href={"/sobrenos"}>about us</Link>
        </div>
        <div>
            <p>©Todos os Direitos Reservados</p>
        </div>
        </div>
    )
}
export default Footer;