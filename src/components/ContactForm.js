import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

export default class ContactForm extends React.Component
{
    render()
    {
        return(
            <div className="row">
                <Form action="#" >
                    <div className='row'>
                        <div className="col-5 padding-form">
                            {this.inputDefault({label: "Nome", id: "nome", type: "text", placeholder: "Digite seu nome"})}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 padding-form">
                            {this.inputDefault({label: "E-mail", id: "email", type: "email", placeholder: "Digite seu E-mail"})}                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 padding-form">
                            {this.inputDefault({label: "Telefone", id: "telefone", type: "phone", placeholder: "Digite seu Telefone"})}                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 padding-form">
                            {this.textArea({label: "Mensagem", id: "msg", placeholder: "Deixe sua mensagem"})}                        
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-5 padding-form">
                            <Button className="botaoOrcamento">Enviar Mensagem</Button>
                        </div>
                    </div>
                </Form>
            </div>
        );
    }

    inputDefault(props)
    {
        return(
            <Form.Group classname='mb-3' controlId="formBasicText">
                <FloatingLabel controlId="floatingTextarea2" label={props.label}>
                <Form.Control type={props.type} placeholder={props.placeholder || ''} name={props.name} />
                </FloatingLabel>
            </Form.Group>
        );
    }

    textArea(props)
    {
        return(
            <Form.Group classname='mb-3' controlId="formBasicText">
                <FloatingLabel controlId="floatingTextarea2" label={props.label}>
                    <Form.Control
                    as="textarea"
                    placeholder={props.placeholder}
                    style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </Form.Group>
        );
    }
}