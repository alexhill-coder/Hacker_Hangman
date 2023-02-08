// This function is used to determine if the player has won or lost.
function checkWin(correct, wrong, word) {

    // Provides the string that will let the player won or lost. 
    let status = 'win';

    // splits the word into letters and checks them against the correct letter array.
    word.split('').forEach(letter => {

        // The statement compares the word against the correct word array and if there aren't
        // any letters present the status returns an empty string.
        if (!correct.includes(letter)) {
            status = '';
        }
    });

    // If the wrong letter array reachs 8 letters it will return the lose string. 
    if(wrong.length === 8) {
        status = 'lose';
    }

    // Returns the string with the word win or lose depending on the user input.
    return status;
}

// This is sent to the popUp file.
export { checkWin };