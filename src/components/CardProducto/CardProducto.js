import './CardProducto.scss'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export const CardProducto = ({title, text, img, cat, id}) => {
    return (
      <Card style={{ width: '14rem' }} className= "card_container">
        
        <Card.Img variant="top" src={img} className="image_card"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
  
          <Card.Text>
            Precio ={text}
          </Card.Text>
          <Card.Text className='text'>Categoria = {cat}</Card.Text>
          <Link to={`/detail/${id}`} className="btn btn-primary" variant="primary">VER MAS</Link>
          
          
        </Card.Body>
        
      </Card>
    );
  }
  
