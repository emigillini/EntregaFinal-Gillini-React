import './CardProducto.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const CardProducto = ({title, text, img}) => {
    return (
      <Card style={{ width: '14rem' }} className= "card_container">
        <Card.Img variant="top" src={img} class="image_card"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button className="button"variant="primary">Comprar</Button>
          <Button className="button" variant="primary">Eliminar</Button>
        </Card.Body>
      </Card>
    );
  }
  
