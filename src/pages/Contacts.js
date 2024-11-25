import React from "react";
import Header from "../components/header";
import Titulo from "../components/Titulo";
import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import { FaWhatsapp } from "react-icons/fa";

export default class Contacts extends React.Component {
    render() {
        return(
            <body>
                <Header />
                <Container className='index_container'>
                    <div className='row'>
                        <Titulo title='Contatos'/>        
                        <ContactForm />
                    </div>

                    <div className='row quebra_sessao'>
                        <hr />
                    </div>

                    <div className='row'>
                        <Titulo title='Informações de Contato'/>
                    </div>

                    <div className="row">
                        <div className="col-2 offset-md-2">
                            <p><FaWhatsapp size="50px"/> - <span className="text-marrom">(11) 9 99999-9999 </span> </p>
                        </div>
                    </div>
                </Container>
            </body>
            
        )
    }
}