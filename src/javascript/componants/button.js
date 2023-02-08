// Creates a button for the keyboard componant. 
function Buttonitem(props) {
    // Provides a ternary within a ternary to provide the correct/wrong style but only 
    // if the button has been selected by the user first. Is connected to the keyboardClick function
    // in the app file. Uses the booleans, id/key from the store file to set the parameters. 
    return (
        <div>
            <button className={`keyButton mt-1 ms-1 me-1 btn 
            ${props.completed ? props.correct ? 'btn-success' : 'btn-danger' : 'btn-outline-primary'}`} 
            key={props.id} onClick={props.onClick} value={props.id}>{props.id}</button>
        </div>
    );
  }

// Sent to the keyboard file.
export default Buttonitem;
