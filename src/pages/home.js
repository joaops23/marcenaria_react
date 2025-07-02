import * as React from 'react';
import Header from '../components/header';

import { Container } from 'react-bootstrap';
import { MdConstruction, MdOutlineDesignServices } from "react-icons/md";
import { BsFillTelephoneFill } from 'react-icons/bs';
import Cards from '../components/Cards';
import BotaoOrcamento from '../components/BotaoOrcamento';
import Titulo from '../components/Titulo';
import Logo from '../components/Logo';
import Contacts from './Contacts';
class Home extends React.Component {
    render() {
        return (
            <body>
                <Header></Header>
                
                <Container className='index_container'>
                    
                    <div className='row'>
                        <div className='col text-center'>
                            <Logo size='210'></Logo>
                            <p className='h1 text-center text_marrom title'>Odara</p>
                            <p className='h5 text-center text_marrom'>Móveis planejados</p>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='index_title col-5'>
                            <p className='h2 text_marrom'>Marcenaria Sob Medida: Beleza e Funcionalidade em Cada Detalhe.</p>
                        </div>

                        <div className='index_title col-6'>
                            <img src='./img/home/apresentacao_1.jpeg' id='img_apresentacao_1' alt='Logo do site '/>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='text-center'>
                            <p className='h4 text_marrom'>Personalizamos móveis e ambientes para refletir o seu estilo e atender às suas necessidades.</p>
                        </div>
                    </div>

                    <div className='row quebra_sessao'>
                        <hr />
                    </div>

            
                    <div className='row'>
                        <Titulo title='Sobre nós'/>
                        <p className='text-break fw-light lh-lg text-about text-center'>&nbsp;&nbsp;Marcenaria Odara.<br></br>Transformamos seus sonhos em móveis exclusivos.&nbsp; Projetos personalizados em madeira maciça e MDF.&nbsp; Atendemos em São Paulo e Região. &nbsp; Entre em contato para um orçamento </p>
                    </div>

                    <div className='row quebra_sessao'>
                        <hr />
                    </div>

                    <div className='row'>
                        <Titulo title='Nossos Diferenciais'/>

                        <div className='row'>
                            <div class='col text-center col-diferenciais'>
                                <span><MdConstruction size='60'/></span>
                                <p className='text-diferenciais'>Materiais de alta qualidade.</p>
                            </div>
                            
                            <div class='col text-center col-diferenciais'>
                                <span><BsFillTelephoneFill size='60'/></span>
                                <p className='text-diferenciais'>Atendimento Personalizado.</p>
                            </div>

                            <div class='col text-center col-diferenciais'>
                                <span><MdOutlineDesignServices size='60'/></span>
                                <p className='text-diferenciais'>Design funcional e sofisticado.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row quebra_sessao'>
                        <hr />
                    </div>

                    <div className='row'>
                        <Titulo title='Depoimentos'/>

                        <div class='row'>
                            <Cards/>
                        </div>
                    </div>

                    <div className='row quebra_sessao'>
                        <hr />
                    </div>

                    <div className='row quebra_sessao_header'>
                        <div className='col align-self-center'>
                            <p className='h4 text-center text_marrom hover_underline quebra'>Pronto para transformar seu espaço?</p>
                            <p className='h4 text-center text_marrom hover_underline quebra'>Entre em contato conosco!</p>
                            <p className='text-center'><BotaoOrcamento /></p>
                            <Contacts />
                        </div>
                    </div>

                </Container>
            </body>
        );
    }
}

export default Home;