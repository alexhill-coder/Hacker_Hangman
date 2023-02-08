// Retrieves the compontants needed to make the app function. 
import React, { useEffect } from 'react';

// Retrieves all the componants needed to build te page.
import Header from '../componants/header';
import Image from '../componants/image';
import Word from '../componants/word';
import Wrongletters from '../componants/wrongLetters';
import Keyboard from '../componants/keyboard';
import Notification from '../componants/notification';
import Popup from '../componants/popUp';
import Instructions from '../componants/instructions';
import Background from '../componants/background';

// Retrieves the redux compontants needed to alter the slice state from the hangManSlice file.
import { useSelector, useDispatch } from 'react-redux';

// All the imported state altering functions.
import { newWord, pressedButton, resetGame, gameState, correctLetters, 
  wrongLetters, notification, keyboardToggle, gameStart, instructions } from '../../redux/hangManSlice';

// Combines all the componants needed for the page and provides the functions necessary for
// them to function. 
function App() {
  
  // Sets the Dispatch function as simpler variable.
  const dispatch = useDispatch();

  // The variable that provides the game state for the app.
  const userData = useSelector((state) => state.hangman);

  // Provides a timer to alter the bool in the slice state to make the notification componant
  // visible then resends it after the time has elapsed to hide it again.
  const alreadyPressed = () => {
    dispatch(notification());
            setTimeout(() => {
              dispatch(notification());
          }, 2000);
  }

  // The function called to choose a new word and set all the bool/arrays.
  function newGame() {
    dispatch(newWord());
    dispatch(resetGame());
  }

  // Used to alter the bool slice state parameter to display the instructions or
  // close them when the instruction button is clicked. 
  function showInstructions() {
    dispatch(instructions());
  }

  // Changes the playable slice parameter to stop the app from receiving inputs when
  // the instructions are visible or when the game has ended.
  function setPlayable(bool) {
    dispatch(gameState(bool));
  }

  // Retrieves the value of the clicked keyboard button and sends it to the 
  // slice parameter lastButtonPressed.
  function keyboardClick(event) {
    dispatch(pressedButton(event.target.value));
  }

  // Used to toggle the keyboard buttons to visible/hidden and whether to display 
  // a string containing all the wrong letters.
  function keyboardToggleClick() {
    dispatch(keyboardToggle())
  }

  // Rerenders after the data has been altered.
  useEffect(() => {

    // Checks to see if this is the first time the app has run and 
    // creates a new word to guess and alters the slice state to false
    // to prevent these function from being called by the app. 
    if (userData.gameStart === true) {
      dispatch(newWord());
      dispatch(gameStart());
    }

    // If a clicked button was pressed the check below will return true.
    // This letter is then passed to the handleWord function and slice
    // parameter set to an empty string to prevent this from being called
    // until the next button is clicked.
    if (userData.lastButtonPressed !== '') {
      handleWord(userData.lastButtonPressed);
      dispatch(pressedButton(''));
    }

    // Detects whether a key has been pressed on a physical keyboard.
    // It retrieves the selected key checks to see if was in the alphabet and whether
    // the instructions popup is active. If it passes the letter is sent to the handleWord function.
    function handleKeyDown(event) {
      const { key, keyCode } = event;
      if (userData.playable && keyCode >= 65 && keyCode <= 90 && userData.instructions === false) {
        handleWord(key);
      }
    }

    // Takes the given letter compares it the word to see if it is correct/wrong 
    // then the correct/wrong letter arrays to see if has already been pressed.
    // It will then either add it to the appropiate array or call the notification
    // function to indicate that it has already been added.
    function handleWord(key) {
      const letter = key.toLowerCase();
        if (userData.word.includes(letter)) {
          if (!userData.correctLetters.includes(letter)) {
            dispatch(correctLetters(letter));
          } else {
            alreadyPressed();
          }
        } else {
          if (!userData.wrongLetters.includes(letter)) {
            dispatch(wrongLetters(letter));
          } else {
            alreadyPressed();
          }
        }
    }

    // On every render it adds a listener to detect when a physical keyboard key
    // has been used.
    window.addEventListener('keydown', handleKeyDown);

    // Will remove it every render to avoid multiple instances from being created.
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [userData, dispatch]);

  // Provides all the componants with the correct data/functions added to each one.
  return (
    <div className="App">

      {/* Provides the animated background and set to refresh every .1 second */}
      <Background timeout={100} />

      {/* Provides a header at the top of the page. */}
      <Header />

      {/* Provides the hangman/skull images for the app using the number of letters in the 
      wrongLetter array to determine which image to display. */}
      <Image number={userData.wrongLetters.length} /> 

      {/* Provides the number of letters in the word and any correct guesses using the
      word and correct letter array to display them dynamically. */}
      <Word selectedWord={userData.word} correctLetters={userData.correctLetters}/>

      {/* Shown when a letter has already been added to an array using a bool from the
      slice state to determine visability. Changes after 2 seconds back to its hidden state. */}
      <Notification showNotification={userData.showNotification} />

      {/* Provides the total number of mistakes the player has made and is synched up
      to the keyboard panel so that the letters are displayed but only if the keyboard is closed
      and the player has made at least one error. */}
      <Wrongletters wrongLetters={userData.wrongLetters} keyboard={userData.keyboard} />

      {/* Provides a button at the top right of the screen that displays the instructions
      if clicked. Using a function the slice state instruction parameter is altered 
      to true or false along with the player parameter to disable input as long as the panel 
      is active. */}
      <Instructions showInstructions={showInstructions} instructions={userData.instructions}/>

      {/* Provides the end game screen appearing only if the player has all the letters or
      if there are 8 guesses. It will also disable all inputs and provide a button to reset
      the game */}
      <Popup correctLetters={userData.correctLetters} wrongLetters={userData.wrongLetters} 
      selectedWord={userData.word} setPlayable={setPlayable} playAgain={newGame}  />

      {/* Using the slice state the buttons are creating using a map function and are displayed 
      using an accordian componant that is synched up to the wrongletters componant. The buttons will
      display a green or red color once clicked to indicate whether they are right or wrong. */}
      <Keyboard buttons={userData.buttons} onClick={keyboardClick} keyboardClick={keyboardToggleClick} keyboard={userData.keyboard} />

    </div>
  );
}

// This componant is sent to theindex file.
export default App;
