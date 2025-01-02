import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Player({player}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={player.imageUrl} />
            <Card.Body>
            <Card.Title>{player.name}</Card.Title>
            <Card.Text>Age : {player.age}</Card.Text>
            <Card.Text>Nationality : {player.nationality}</Card.Text>
            <Card.Text>Number : {player.jerseyNumber}</Card.Text>
            
            <Button variant="primary">See more</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Player