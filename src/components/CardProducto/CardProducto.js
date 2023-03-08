import './CardProducto.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import taza from "./diaptaza3.jpg"

export const CardProducto = ({title, text}) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={taza} className="image_card"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {text}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    );
  }
  
