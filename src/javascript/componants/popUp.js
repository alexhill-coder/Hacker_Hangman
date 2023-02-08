// Retrieves the function to determine if the player has won or lost.
import { checkWin } from './helpers';
import { useEffect } from 'react';

// Used to let the user know if they have won or lost the game and to stop the player controls
// from working until it is restarted.
function Word({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) {

    // Provides the final messages once the player has won or lost.
    let finalMessage = '';
    let finalMessageRevealWord = '';

    // Provides the bool to be sent to the slice state.
    let playable = true;

    // Checks to see if the returned string matches a win or lose condition and
    // alters the messages in the variables above. It also sets the playable state 
    // to false to prevent the user from being able to activate the buttons while it is visible. 
    if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage = "Congratulations You Won!";
        finalMessageRevealWord = `you found the word: '${selectedWord}'`;
        playable = false;
    }
    // Uses the correct/wrong letter arrays and the full word to determine win/lose conditions.
    else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
        finalMessage = "Sorry But, You Lose!";
        finalMessageRevealWord = `the word was: '${selectedWord}'`;
        playable = false;
    }

    // Uses a function passed into the componant to alter slice state playable parameter.
    useEffect(() => setPlayable(playable));

    return (
        // Will only be displayed if the message variable matches a win or lose condition.
        <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>

                {/* Uses a passed function to reset all the arrays, buttons and word. */}
                <button id="restart" className='restart btn btn-outline-primary mt-3' 
                onClick={playAgain}>Play Again</button>
            </div>
        </div>
    );
  }

// This is sent to the app file.
export default Word;