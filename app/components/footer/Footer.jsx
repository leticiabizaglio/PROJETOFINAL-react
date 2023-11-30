import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
const Footer = () => {
    return(
        <>
        <div>
        <FaEnvelope />
        <FaGithub />
        <FaUsers />
        </div>
        <div>
            <p>©Todos os Direitos Reservados</p>
        </div>
        </>
    )
}
export default Footer;