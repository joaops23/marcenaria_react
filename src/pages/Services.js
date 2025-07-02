import React from "react";
import Header from "../components/header";
import { Carousel, Container } from "react-bootstrap";
import Titulo from "../components/Titulo";

export default class Services extends React.Component {

    
    render() {
        return(
            <body>
                <Header />
                <Container className='index_container'>
                    <div className='row'>
                        <Titulo title='Portifólio'/>
                    </div>

                    <div className='row quebra_sessao'>
                        <hr />
                    </div>
                    <div className="carousel_container">
                        <div className="carousel_item_title text_marrom">
                            <h2>COZINHA</h2>
                        </div>
                        <div className="carousel_item_content">
                            <Carousel data-bs-theme="dark">
                                {
                                    (
                                        () => {
                                            let images = [];
                                            let i = 1;
                                            while (i <= 4) {
                                                images.push(
                                                    <Carousel.Item className="carousel_item">
                                                        <img
                                                            src={`./img/services/Cozinha/cozinha_${i++}.png`}
                                                            alt="Imagem representativa de serviço"
                                                            className="imgCarousel"
                                                        />
                                                    </Carousel.Item>
                                                );
                                            }
                                            return images;
                                        }
                                    )()
                                }
                            </Carousel>
                        </div>
                    </div>

                    <div className='row quebra_sessao'></div>

                    <div className="carousel_container">
                        <div className="carousel_item_title text_marrom">
                            <h2>GUARDA ROUPA</h2>
                        </div>

                        <div class='carousel_item_content'>

                            <Carousel data-bs-theme="dark">
                                {
                                    (
                                        () => {
                                            let images = [];
                                            let i = 1;
                                            while (i <= 2) {
                                                images.push(
                                                    <Carousel.Item className="carousel_item">
                                                        <img
                                                            src={`./img/services/Guarda-roupa/guarda_roupa_${i++}.png`}
                                                            alt="Imagem representativa de serviço"
                                                            className="imgCarousel"
                                                        />
                                                    </Carousel.Item>
                                                );
                                            }
                                            return images;
                                        }
                                    )()
                                }
                        </Carousel>
                        </div>
                    </div>

                    <div className='row quebra_sessao'></div>

                    <div className="carousel_container">
                        <div className="carousel_item_title text_marrom">
                            <h2>PAINEL</h2>
                        </div>

                        <div className="carousel_item_content">
                            <Carousel data-bs-theme="dark">
                                {
                                    (
                                        () => {
                                            let images = [];
                                            let i = 1;
                                            while (i <= 2) {
                                                images.push(
                                                    <Carousel.Item className="carousel_item">
                                                        <img
                                                            src={`./img/services/Paineis/painel_${i++}.png`}
                                                            alt="Imagem representativa de serviço"
                                                            className="imgCarousel"
                                                        />
                                                    </Carousel.Item>
                                                );
                                            }
                                            return images;
                                        }
                                    )()
                                }
                            </Carousel>
                        </div>
                    </div>
                </Container>
            </body>
        )
    };
};