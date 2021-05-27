

function Instructions(){
    return(
        <div>
            <h2>Playing Memory</h2>
            <p>The first player chooses a card and carefully turns it over.  Be sure not to bother the surrounding cards.<br/></p>

            <p>The player then selects another card and turns it over. If the two cards are a matching pair for example two Jacks then they take the two cards and start a stack. The player is awarded another turn for making a match and goes again.</p>

            <p>If the cards are not a match they are turned back over and it is now the next players turn.</p>

            <p>The next player chooses their first card and turns it over. If it is a match for one of the cards the previous player turned over then they try to remember where that matching card was and turn it. If they are successful at making a match they place the cards in their stack and choose another card.</p>

            <p>If the first card turned over was not a match for one previously turned over the player selects another card in an attempt of making a pair.</p>

            <p>If they are unsuccessful in making a match they flip the cards back over and play is passed to the next player.</p>
        </div>
    )
}

export default Instructions;