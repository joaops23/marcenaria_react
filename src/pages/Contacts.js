import React from "react";
import Header from "../components/header";
import Titulo from "../components/Titulo";
import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default class Contacts extends React.Component {
    render() {
        return(
            <body>
                {/* <Header /> */}
                <Container className='index_container container-contatcs'>
                    {/* <div className='row'>
                        <Titulo title='Contatos'/>        
                        <ContactForm />
                    </div>

                    <div className='row quebra_sessao'>
                        <hr />
                    </div>

                    <div className='row'>
                        <Titulo title='Informações de Contato'/>
                    </div>
                    */}

                    <div className="row">
                        <div className="col-3 offset-md-2">
                            <p><FaWhatsapp size="50px"/>&nbsp;<span className="text-marrom contact-text">+55 (11) 91655-0264</span> </p>
                        </div>
                        <div className="col-3">
                            <p><MdOutlineEmail size="50px"/>&nbsp;<span className="text-marrom contact-text">odaraplanejados86@gmail.com</span> </p>
                        </div>
                        <div className="col-3">
                            <p><FaLocationDot size="50px"/>&nbsp;<span className="text-marrom contact-text">Cotia - SP</span> </p>
                        </div>
                    </div>
                </Container>
            </body>
            
        )
    }
}