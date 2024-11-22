import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaComment } from 'react-icons/fa';

class Cards extends React.Component
{

  render()
  {
    return(
      <div className='containerCards'>
        {this.depoiments.map((dep) => {
            return (this.Card(dep))
          })
        }
        </div>
    );
  }

  Card(dep) {
    return (
      
        <Card style={{ width: '22rem', height: '20rem' }} className='cardDepoimento'>
          <Card.Body>
            <Card.Text className='text-center'><FaComment size='25'/></Card.Text>
            <Card.Title>{dep.title}</Card.Title>
            <Card.Text>
              {dep.description}
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">{dep.author}</Card.Subtitle>
          </Card.Body>
        </Card>
    );
  }

  depoiments = [
    {
      title: `"Transformaram minha casa!"`,
      author: `— Ana S., Cotia-SP`,
      description: `"A Marcenaria dos Sonhos fez minha cozinha planejada e ficou impecável. Desde o atendimento até a instalação, tudo foi feito com perfeição. Recomendo de olhos fechados!"`
    },

    {
      title: `"Atendimento e qualidade incríveis!"`,
      description: `"Precisava de móveis sob medida para o meu escritório e fiquei impressionado com o resultado. O Diego e sua equipe são super detalhistas e pontuais. Valeu cada centavo!"`,
      author: `— Rafael M., São Paulo-SP`
    },

    {
      title: `Atenção aos detalhes como nunca vi!"`,
      description: `"Os móveis que encomendei são lindos e funcionais. A equipe entendeu exatamente o que eu queria e entregou um trabalho de altíssima qualidade. Meu quarto ficou perfeito!"`,
      author: `— Juliana P., Carapicuíba-SP`,
    }
  ];
}

export default Cards;