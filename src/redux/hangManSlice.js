// Retrieves the slice componant from the toolkit.
import { createSlice } from '@reduxjs/toolkit';
import randomWords from 'random-words';

// Provides the data and functions needed to alter the data.
const hangmanSlice = createSlice({

    // Provides the name of the section.
    name: "hangman",
  
    // Provides the intialstate as needed by the app.
    initialState: {

        // Provides the word to guess.
        word: 'testing',

        // Sets whether the inputs will work or not.
        playable: true,

        // Holds all the correct letters.
        correctLetters: [],

        // Holds all the incorrect letters.
        wrongLetters: [],

        // Allows the notification to shown or hidden.
        showNotification: false,

        // Provides the data for the buttons text and styles. One for
        // each letter of the alphabet. Id is used as a key and to provide the
        // text/value for the button. Completed is used to tell if it has been clicked
        // and correct to indicate whether it is present in the word.
        buttons: {
            'q': {
                id: 'q',
                completed: false,
                correct: false
            },
            'w': {
                id: 'w',
                completed: false,
                correct: false
            },
            'e': {
                id: 'e',
                completed: false,
                correct: false
            },
            'r': {
                id: 'r',
                completed: false,
                correct: false
            },
            't': {
                id: 't',
                completed: false,
                correct: false
            },
            'y': {
                id: 'y',
                completed: false,
                correct: false
            },
            'u': {
                id: 'u',
                completed: false,
                correct: false
            },
            'i': {
                id: 'i',
                completed: false,
                correct: false
            },
            'o': {
                id: 'o',
                completed: false,
                correct: false
            },
            'p': {
                id: 'p',
                completed: false,
                correct: false
            },
            'a': {
                id: 'a',
                completed: false,
                correct: false
            },
            's': {
                id: 's',
                completed: false,
                correct: false
            },
            'd': {
                id: 'd',
                completed: false,
                correct: false
            },
            'f': {
                id: 'f',
                completed: false,
                correct: false
            },
            'g': {
                id: 'g',
                completed: false,
                correct: false
            },
            'h': {
                id: 'h',
                completed: false,
                correct: false
            },
            'j': {
                id: 'j',
                completed: false,
                correct: false
            },
            'k': {
                id: 'k',
                completed: false,
                correct: false
            },
            'l': {
                id: 'l',
                completed: false,
                correct: false
            },
            'z': {
                id: 'z',
                completed: false,
                correct: false
            },
            'x': {
                id: 'x',
                completed: false,
                correct: false
            },
            'c': {
                id: 'c',
                completed: false,
                correct: false
            },
            'v': {
                id: 'v',
                completed: false,
                correct: false
            },
            'b': {
                id: 'b',
                completed: false,
                correct: false
            },
            'n': {
                id: 'n',
                completed: false,
                correct: false
            },
            'm': {
                id: 'm',
                completed: false,
                correct: false
            }
        },

        // Provides the letter of the clicked keyboard button.
        lastButtonPressed: '',

        // Shows or hides the keyboard in the accordian and the wrong letters in the
        // wrongletters componant. 
        keyboard: true,

        // Indicates whether this is the first time the game is played.
        gameStart: true,

        // Shows or hides the instructions.
        instructions: false
    },

    // Provdes the functions needed to alter the state parameters.
    reducers: {

        // Changes the gameStart state to false.
        gameStart: (state) => {
            state.gameStart = false;
        },

        // Converts the instructions state to its bool opposite.
        instructions: (state) => {
            state.instructions = !state.instructions; 
        },

        // creates a new word string for the word state.
        newWord: (state) => {
            state.word = randomWords();
        },

        // Provides the keyboard button clicked from the panel and inserts it as a 
        // string to the lastButtonPressed state.
        pressedButton: (state, action) => {
            state.lastButtonPressed = action.payload;
        },

        // Adds the correct letter to the correct letter array and sets the 
        // button bool values to true.
        correctLetters: (state, action) => {
            state.correctLetters.push(action.payload);
            state.buttons[action.payload].completed = true;
            state.buttons[action.payload].correct = true;
        },

        // Adds the incorrect letter to the wrong letter array and sets the completed 
        // button value to true and the correct value to false.
        wrongLetters: (state, action) => {
            state.wrongLetters.push(action.payload);
            state.buttons[action.payload].completed = true;
            state.buttons[action.payload].correct = false;
        },

        // Converts the showNotification state to its bool opposite.
        notification: (state) => {
            state.showNotification = !state.showNotification;
        },

        // Sets the state to either true or false depending on the provided
        // value.
        gameState: (state, action) => {
            state.playable = action.payload;
        },

        // Converts the keyboard state to its bool opposite.
        keyboardToggle: (state) => {
            state.keyboard = !state.keyboard;
        },

        // Provides an empty array for the correct/incorrect letters and sets
        // the completed button values to false resetting the game.
        resetGame: (state) => {
            state.correctLetters = [];
            state.wrongLetters = [];
            for (let value of Object.values(state.buttons)) {
                if(value.completed === true) {
                    value.completed = false;
                }
            }
        }
    },
});

// Used to the app file where the functions can be called via button select.
export const { newWord, correctLetters, wrongLetters, notification, resetGame, gameState, pressedButton, keyboardToggle, gameStart, instructions } = hangmanSlice.actions;

// This is then sent to the store file.
export default hangmanSlice.reducer;