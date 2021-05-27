import {FLIP, INIT, TRY_AGAIN} from './types';

export const flipCard = (index) =>{
    return{
        type: FLIP,
        cardIndex:index
    }
}

export const tryAgain = () =>{
    return{
        type: TRY_AGAIN
    }
}

export const shuffleDeck = () =>{
    return{
        type: INIT
    }
}
