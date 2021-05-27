import {FLIP, INIT, TRY_AGAIN} from './types';

const initialState = {
    complete:false,
    tryAgain:false,
    deck:[]
}

function initDeck(){
    //init cards
    const tempArr = Array(6).fill().map(() => ({
        id:Math.round(Math.random() * 300),
        pokemonId:Math.round(Math.random() * 300) + 1,
        flipped:false,
        matched:false,
    }));

    const dups = [...tempArr];
    dups.forEach(item => {
        const obj = Object.assign({}, item, { id: Math.round(Math.random() * 300) + 100 });
        tempArr.push(obj);
    })
    

    const shuffledArr= tempArr.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);
    return shuffledArr;
}

function tryAgain(state){
    const tempCards = [...state.deck];
    const flippedCards = tempCards.filter(card => !card.matched && card.flipped);

    flippedCards.forEach(card => {
        card.flipped = false;
    });

    return {...state,
        deck:tempCards,
        tryAgain:false,
        complete:tempCards.filter(card => !card.matched).length === 0};
}

function process(state, index){
    const tempCards = state.tryAgain ? tryAgain(state).deck : [...state.deck];
    let tempTryAgain = false;

    if(tempCards.filter(card => !card.matched && card.flipped).length < 2){
        tempCards[index].flipped = true;
    }

    if(tempCards.filter(card => !card.matched && card.flipped).length === 2){
        const flippedCards = tempCards.filter(card => !card.matched && card.flipped);
        if(flippedCards[0].pokemonId === flippedCards[1].pokemonId){
            flippedCards[0].matched = true;
            flippedCards[1].matched = true;
            
        }else{
            tempTryAgain = true;

        }
    }

    return {...state,
        deck:tempCards,
        tryAgain:tempTryAgain,
        complete:tempCards.filter(card => !card.matched).length === 0};
}

//Reducer Funtion
const memoryReducer = (state = initialState, action) => {
    switch(action.type){
        case FLIP:
            return process(state,action.cardIndex);
        case TRY_AGAIN:
            return tryAgain(state);
        case INIT:
            return {
                ...state,
                deck:initDeck(),                
                complete:false
            };
        default:
            return state;
    }    
}

export default memoryReducer;