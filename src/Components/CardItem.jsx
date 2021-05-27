import {Card} from 'react-bootstrap';
import pokemonLogo from '../pokemon-icon.png';

function CardItem({pokemonId, flipped, matched, tryAgain, children}){
    const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonId + '.png'

    return (
        
        <Card bg={matched ? "success" : tryAgain && flipped ? "danger" : ""} className="text-white">
            <Card.Img variant="top" src={flipped || matched ? imgUrl : pokemonLogo} />
            {children}
        </Card>
       
    )
}


export default CardItem;