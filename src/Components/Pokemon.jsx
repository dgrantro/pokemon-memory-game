import { useParams } from "react-router";
import {useState, useEffect} from 'react';
import {CardColumns, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

function Pokemon(){
    const[pokemon, setPokemon] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        getPokemon(id);
    }, [id])
    
    async function getPokemon(pokemonId){
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonId);
            const data = await response.json();
            setPokemon(data);
            
        }catch(ex){
            console.log(ex);
        }
    }
    
    return(
        <div>
            <h2>{pokemon.name}</h2>
            
            <CardColumns>
                <Card >
                    <Card.Header as="h4">About</Card.Header>

                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Weight: {pokemon.weight}</ListGroupItem>
                        <ListGroupItem>Height: {pokemon.height}</ListGroupItem>
                        <ListGroupItem>Experience: {pokemon.base_experience}</ListGroupItem>
                    </ListGroup>
                </Card>

                <Card >
                    <Card.Header as="h4">Abilities</Card.Header>
                    <ListGroup className="list-group-flush">
                        {pokemon.abilities && pokemon.abilities.slice(0,5).map((item,index) => {
                           return <ListGroupItem key={index}>{item.ability.name}</ListGroupItem>
                        })}
                    </ListGroup>
                </Card>

                <Card >
                    <Card.Header as="h4">Moves</Card.Header>

                    <ListGroup className="list-group-flush">
                        {pokemon.moves && pokemon.moves.slice(0,5).map((item,index) => {
                           return <ListGroupItem key={index}>{item.move.name}</ListGroupItem>
                        })}
                    </ListGroup>
                </Card>
            </CardColumns>
            
        </div>
    )
}

export default Pokemon;