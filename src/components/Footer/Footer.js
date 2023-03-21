import { FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import './Footer.scss'

export const Footer= ( )=>{
    return(
        <footer className="footer">

            <nav className="footer_redes">

                
                <p className="footer_redes_links"><FaFacebookSquare /> </p>

                <p className="footer_redes_links"><FaWhatsappSquare /> </p>

                <p className="footer_redes_links"><FaTwitterSquare/> </p>

                <p className="footer_redes_links"><FaInstagramSquare /> </p>

            </nav>

            <div className="footer_derechos">

            <p>© 2022 Carolinska. Todos los derechos reservados.</p>

            </div>

        </footer>

    )

    
}