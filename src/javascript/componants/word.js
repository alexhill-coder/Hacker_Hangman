// Displays lines to indicate word length and any correct letters.
function Word({selectedWord, correctLetters}) {

    // Splits the word and uses a map to go through each correct letter and will 
    // display them if present or empty if not.
    return (
        <div className="d-flex justify-content-center">
            <div className="word mb-2">
                {selectedWord.split('').map( (letter, i) => {
                    return (
                        <span className="letter mb-3" key={i}>
                            {correctLetters.includes(letter) ? letter : ''}
                        </span>
                    )
                })}
            </div>
        </div>
    );
  }

// This is sent to the app file.
export default Word;