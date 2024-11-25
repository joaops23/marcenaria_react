import * as React from 'react';
import Header from '../components/header';

import { Container } from 'react-bootstrap';
import { MdConstruction, MdOutlineDesignServices } from "react-icons/md";
import { BsFillTelephoneFill } from 'react-icons/bs';
import Cards from '../components/Cards';
import BotaoOrcamento from '../components/BotaoOrcamento';
import Titulo from '../components/Titulo';
import Logo from '../components/Logo';
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
                        <p className='text-break fs-5 fw-light lh-lg'>&nbsp;&nbsp;Nos fundos de um quintal em Cotia-SP, Diego, um pai de família trabalhador, deu vida ao seu sonho de ter um negócio próprio. Com poucas ferramentas e muita determinação, ele transformou o pequeno espaço em uma oficina. Começou consertando móveis para vizinhos e logo conquistou sua comunidade com peças feitas com cuidado e alma.<br />&nbsp;&nbsp;Com o apoio da família e clientes, Diego expandiu sua marcenaria, que se tornou referência na região. Hoje, a Marcenaria dos Sonhos é um símbolo de trabalho duro e paixão, mantendo vivas as raízes simples de onde tudo começou.</p>
                    </div>

                    <div className='row'>
                        <p className='text-break h4 fw-semibold lh-lg text-center text_verde_claro text-decoration-underline'>Mais de 6 anos de experiência transformando ideias em realidade.</p>
                    </div>

                    <div className='row quebra_sessao'>
                        <hr />
                    </div>

                    <div className='row'>
                        <Titulo title='Nossos Diferenciais'/>

                        <div className='row gx-5'>
                            <div class='col text-center'>
                                <span><MdConstruction size='60'/></span>
                                <p className='fs-5'>Materiais de alta qualidade.</p>
                            </div>
                            
                            <div class='col text-center'>
                                <span><BsFillTelephoneFill size='60'/></span>
                                <p className='fs-5'>Atendimento Personalizado.</p>
                            </div>

                            <div class='col text-center'>
                                <span><MdOutlineDesignServices size='60'/></span>
                                <p className='fs-5'>Design funcional e sofisticado.</p>
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
                            <p className='h4 text-center text_marrom hover_underline quebra'>Pronto para transformar seu espaço? Vamos começar!</p>
                            <p className='text-center'><BotaoOrcamento /></p>
                        </div>
                    </div>

                </Container>
            </body>
        );
    }
}

export default Home;