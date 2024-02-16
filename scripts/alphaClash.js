function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;
    console.log('player pressed:',playerPressed);

    // stop game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('you got a point');

        const currentScore = getTextElementValueById('currentScore')
        const updatedScore = currentScore + 1;
        setTextElementValueById('currentScore',updatedScore);

        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you lost a life');

        const currentLife = getTextElementValueById('currentLife');
        const updatedLife = currentLife - 1;
        setTextElementValueById('currentLife',updatedLife);

        if(updatedLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup',handleKeyboardKeyupEvent)

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('random alphabet is:',alphabet);

    const currentAlphabetElement = document.getElementById('currentAlphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);  
}

function play(){
    hideElementById('home_screen');
    hideElementById('finalScore');
    showElementById('playground');

    setTextElementValueById('currentLife',5);
    setTextElementValueById('currentScore',0);

    continueGame();
}

function gameOver(){
    hideElementById('playground');
    showElementById('finalScore');

    const lastScore = getTextElementValueById('currentScore');
    setTextElementValueById('lastScore',lastScore);

    const current_Alphabet = getElementTextById('currentAlphabet');
    // console.log(current_Alphabet);
    
    removeBackgroundColorById(current_Alphabet);
}