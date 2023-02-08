// Retrieves a transition componant from the bootstrap module.
import Fade from 'react-bootstrap/Fade';

// Used to display the total incorrect guesses and the wrong letters but only if the keyboard
// is closed to provide the information back to the player.
function Wrongletters({wrongLetters, keyboard}) {

    return (
      <div className="mt-3 mb-3 d-flex justify-content-center">
        <div className="borderControl">    
          <div className="d-flex justify-content-center">

            {/* If the keyboard is closed this componant will be made visible with a transition effect. */}
            <Fade in={!keyboard}>
              {/* This will be displayed but only if the keyboard is closed. */}
              <div>
                <p className={keyboard === false ? "mt-3" : "wrongDisplay"}>Total Wrong {wrongLetters.length}</p>
              </div>
            </Fade>
            <Fade in={!keyboard}>
              {/* This componant will only be displayed if the keyboard is closed and
              when the player has entered a wrong letter. */}
              <div className={keyboard === false ? "mt-3" : "wrongDisplay"}>{wrongLetters.length > 0 && ':'}</div>
            </Fade>

            {/* This componant will only be displayed if the keyboard is open. Done this way to ensure that
            the hidden componants don't interfere with the positioning of the visible componants.  */}
            <Fade in={keyboard}>
              <div className={keyboard ? "mt-3" : "wrongDisplay"}>
                <p >Total Wrong {wrongLetters.length}</p>
              </div>
            </Fade>

            {/* This componant will only be displayed if the keyboard is closed and
              when the player has entered a wrong letter. */}
            <Fade in={!keyboard}>
              <div className={keyboard === false ? wrongLetters.length > 0 ? 'ms-3 mt-3' : "" : 'wrongDisplay'}>
                {/* Goes through the wrong letters array using a map to place each item into a span element
                which is then altered to add a , after there is more than one letter present. */}
                { wrongLetters.length > 0 && wrongLetters
                  .map( (letter, i) => <span className="ms-1" key={i}>{letter}</span>)
                  .reduce( (prev, curr) => prev === null ? [curr] : [prev, `, `, curr], null)}
              </div>
            </Fade>
          </div>
        </div>  
      </div>
    );
  }

// This componant is sent to app file.
export default Wrongletters;