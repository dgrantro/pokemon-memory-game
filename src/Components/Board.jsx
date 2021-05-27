import {useEffect,useState, useReducer} from 'react';
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import CardItem from "./CardItem";
import memoryReducer from '../connect/reducer';
import {flipCard, shuffleDeck, tryAgain} from '../connect/actions';
import FlipCounter from './FlipCounter';

function Board(){
    const [flipCount,setFlipCount] = useState(0);
    const [state, dispatch] = useReducer(memoryReducer,{        
        complete:false,
        deck:[]
    });

    useEffect(() => {
        dispatch(shuffleDeck());
    }, [])

    const handleClick = (e, index) =>{
        e.preventDefault();
        dispatch(flipCard(index));
        setFlipCount(flipCount + 1);
    }

    return(
        <>
            <FlipCounter flipCount={flipCount}></FlipCounter>
            <Row>
                {state && state.deck.map((card,index) => {
                    if(card.matched){
                        return <Col md={2} key={index}>
                            <CardItem pokemonId={card.pokemonId} flipped={card.flipped} matched={card.matched}>
                                {state.complete &&
                                    <Card.ImgOverlay>
                                        <Card.Title>
                                            <Link
                                                to={{
                                                    pathname: "/pokemon/" + card.pokemonId,
                                                    state: state
                                                }}
                                            >
                                                more info
                                            </Link>
                                        </Card.Title>
                                    </Card.ImgOverlay>
                                }
                            </CardItem>
                            <br />
                        </Col>
                    }else{
                        return <Col md={2} key={index}>
                            <a href="#top" onClick={(e) => {state.tryAgain && card.flipped ? dispatch(tryAgain()) : handleClick(e,index); return false;}}>
                                <CardItem pokemonId={card.pokemonId} flipped={card.flipped} matched={card.matched} tryAgain={state.tryAgain} >
                                {state.tryAgain && card.flipped &&
                                    <Card.ImgOverlay>
                                        <Card.Title>
                                            Try Again
                                        </Card.Title>
                                    </Card.ImgOverlay>
                                }
                                </CardItem>    
                            </a>
                            <br />
                        </Col>
                    }
                })}
            </Row>
            <Button onClick={() => {dispatch(shuffleDeck());setFlipCount(0);}}>Reset</Button>{' '}
            {state.tryAgain && <Button onClick={() => dispatch(tryAgain())} variant="outline-danger">Try Again</Button>}
        </>
    )
}

export default Board;