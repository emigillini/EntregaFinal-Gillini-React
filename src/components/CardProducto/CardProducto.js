import './CardProducto.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const CardProducto = ({title, text, img}) => {
    return (
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src={img} className="image_card"/>
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
  
