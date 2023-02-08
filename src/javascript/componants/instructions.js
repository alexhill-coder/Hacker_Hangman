// Will display the instructions depending on whether the store instructions parameter is true and 
// uses the showInstructions function to alter the boolean.
function Instructions({ instructions, showInstructions }) {

    return (
        <div>
            <div>
            {/* Provides the button that allows the instructions to be made visible.
            this is present on the main screen in the top-right courner. 
            This toggles the boolean in the slice to control the state of the componant. */}
            <button className='help restart btn btn-outline-primary' 
            onClick={showInstructions}>?</button>
            </div>

            {/* This instructions will only display if the instructions parameter in the 
            slice is true. */}
            <div className="popup-container" style={instructions ? {display:'flex'} : {}}>
                <div className="popup">
                    <h2 className='mb-3'>HOW TO PLAY</h2>
                    <p className='text-start'>Hacker Hangman is based on 
                    the classic word game in which you must guess the secret word one 
                    letter at a time.</p>
                    <p className='text-start'><b>To ensure that you 
                    can see your wrong answers the counter will supply 
                    the letters should you close the keyboard panel but 
                    only if you have guessed incorrectly.</b></p>
                    <ul className='text-start'>
                        <li>Guess one letter at a time to reveal the password.</li>
                        <li>Each incorrect guess increases your 
                        chance of being traced. You only get 8 incorrect guesses.</li>
                        <li>You can use your keyboard or the 
                        keyboard panel on the app to provide a letter.</li>
                        <li>If you fail to guess the word it 
                        will be provided to you at the end of the game.</li>
                        <li>You will have the option to play 
                        again once you have guessed the word or once 
                        you've had 8 incorrect guesses.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }

// Sent to the app file.
export default Instructions;