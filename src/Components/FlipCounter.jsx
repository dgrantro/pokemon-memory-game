import { Alert } from "react-bootstrap";
import calcTries from "../Utils/calcTries";
import {useEffect,useState} from 'react';

function FlipCounter({flipCount}){
    const [tries, setTries] = useState(0);
    useEffect(() => {
        const t = calcTries(flipCount);
        setTries(t);
    }, [flipCount])
    return(
        <Alert variant={flipCount < 24 ? "success" : "danger"}>Flipped {tries} times!</Alert>
    )
}

export default FlipCounter;