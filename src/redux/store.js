// Retrieves the store componant and the slice state/functions from the hangManSlice file.
import { configureStore } from '@reduxjs/toolkit';
import hangmanReducer from './hangManSlice'

// Creates the store function. Which is sent to the index file.
export default configureStore({
    reducer: {
        hangman: hangmanReducer,
    },
});
