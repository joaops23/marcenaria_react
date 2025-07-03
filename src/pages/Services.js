import React from "react";
import Header from "../components/header";
import { Container } from "react-bootstrap";
import Titulo from "../components/Titulo";

export default class Services extends React.Component {

    
    render() {
        return(
            <body style={{"margin-bottom": "50px"}}>
                <Header />
                <Container className='index_container'>
                    <div className='row pt-5'>
                        <Titulo title='Portifólio'/>
                    </div>

                    <div className='row pt-5'>
                        <h3 className='titlePortifolio'>Cozinha</h3>
                    </div>

                    <div className="horizontal-scrollable">
                        <div className='row d-flex flex-row flex-nowrap'>
                            {
                                (
                                    () => {
                                        let images = [];
                                        let i = 1;
                                        while (i <= 7) {
                                            images.push(
                                                <div className='col-xs-4'>
                                                    <img
                                                        src={`./img/services/Cozinha/cozinha_${i++}.png`}
                                                        alt="Imagem representativa de serviço"
                                                        className="imgCarousel text-center"
                                                    />
                                                </div>
                                            );
                                        }
                                        return images;
                                    }
                                )()
                            }
                        </div>
                    </div>

                    <div className='row quebra_sessao'></div>

                    <div className='row pt-5'>
                        <h3 className='titlePortifolio'>Guarda Roupas</h3>
                    </div>

                    <div className="horizontal-scrollable">
                        <div className='row d-flex flex-row flex-nowrap'>
                                {
                                    (
                                        () => {
                                            let images = [];
                                            let i = 1;
                                            while (i <= 2) {
                                                images.push(
                                                    <div className="col-xs-4">
                                                        <img
                                                            src={`./img/services/Guarda-roupa/guarda_roupa_${i++}.png`}
                                                            alt="Imagem representativa de serviço"
                                                            className="imgCarousel text-center"
                                                        />
                                                    </div>
                                                );
                                            }
                                            return images;
                                        }
                                    )()
                                }
                        </div>
                    </div>

                    <div className='row pt-5'>
                        <h3 className='titlePortifolio'>Painel</h3>
                    </div>

                    <div className="horizontal-scrollable">
                        <div className='row d-flex flex-row flex-nowrap'>
                                {
                                    (
                                        () => {
                                            let images = [];
                                            let i = 1;
                                            while (i <= 7) {
                                                images.push(
                                                    <div className="col-xs-4">
                                                        <img
                                                            src={`./img/services/Paineis/painel_${i++}.png`}
                                                            alt="Imagem representativa de serviço"
                                                            className="imgCarousel text-center"
                                                        />
                                                    </div>
                                                );
                                            }
                                            return images;
                                        }
                                    )()
                                }
                        </div>
                    </div>

                    <div className='row pt-5'>
                        <h3 className='titlePortifolio'>Balcões</h3>
                    </div>

                    <div className="horizontal-scrollable">
                        <div className='row d-flex flex-row flex-nowrap'>
                                {
                                    (
                                        () => {
                                            let images = [];
                                            let i = 1;
                                            while (i <= 4) {
                                                images.push(
                                                    <div className="col-xs-4">
                                                        <img
                                                            src={`./img/services/Balcões/Balcao_${i++}.png`}
                                                            alt="Imagem representativa de serviço"
                                                            className="imgCarousel text-center"
                                                        />
                                                    </div>
                                                );
                                            }
                                            return images;
                                        }
                                    )()
                                }
                        </div>
                    </div>

                    <div className='row pt-5'>
                        <h3 className='titlePortifolio'>Mesa</h3>
                    </div>

                    <div className="horizontal-scrollable">
                        <div className='row d-flex flex-row flex-nowrap'>
                                {
                                    (
                                        () => {
                                            let images = [];
                                            let i = 1;
                                            while (i <= 1) {
                                                images.push(
                                                    <div className="col-xs-4">
                                                        <img
                                                            src={`./img/services/Mesas/mesa_${i++}.png`}
                                                            alt="Imagem representativa de serviço"
                                                            className="imgCarousel text-center"
                                                        />
                                                    </div>
                                                );
                                            }
                                            return images;
                                        }
                                    )()
                                }
                        </div>
                    </div>

                    <div className='row pt-5'>
                        <h3 className='titlePortifolio'>Prateleiras</h3>
                    </div>

                    <div className="horizontal-scrollable">
                        <div className='row d-flex flex-row flex-nowrap'>
                                {
                                    (
                                        () => {
                                            let images = [];
                                            let i = 1;
                                            while (i <= 2) {
                                                images.push(
                                                    <div className="col-xs-4">
                                                        <img
                                                            src={`./img/services/Prateleiras/prateleira_${i++}.png`}
                                                            alt="Imagem representativa de serviço"
                                                            className="imgCarousel text-center"
                                                        />
                                                    </div>
                                                );
                                            }
                                            return images;
                                        }
                                    )()
                                }
                        </div>
                    </div>
                </Container>
            </body>
        )
    };
};