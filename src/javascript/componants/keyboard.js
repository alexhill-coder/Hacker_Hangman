// Retrieves the button componant file.
import Buttonitem from './button';

// Retrieves the accordion componant from the bootstrap module.
import Accordion from 'react-bootstrap/Accordion';

// Takes the keyboard/buttons state and the functions to alter said states.
function Keyboard({buttons, onClick, keyboard, keyboardClick}) {

   // Creates an array to store the created objects.
   let buttonArray = [];

    // Goes through the value of each button object and places them into a new object
    // which is then puched into an array.
    for (const value of Object.values(buttons)) {

        const itemObject = { id: value.id, completed: value.completed, correct: value.correct };

        buttonArray.push(itemObject);
    }

    // Uses the created array to create the buttons for the main section of the accordion componant.
    // using a map function.
    return (
        <div className="d-flex justify-content-center">

            {/* Uses the keyboard parameter bool from the slice to determine whether the 
            accordion is open or shut as the number 0 corresponds to the item element.
            By returning anything other than 1 the element will close. */}
            <Accordion activeKey={keyboard ? "0" : "1"}>
            <Accordion.Item eventKey="0">

                {/* This element links to the app function keyboardClick and chanes the state of the
                bool in the store. */}
                <Accordion.Header onClick={keyboardClick}>Keyboard</Accordion.Header>
                <Accordion.Body>
                
                {/* The store state for the buttons and a function to store the clicked buttons 
                value is passed onto each button element. 
                The buttons are created using a map function.*/}
                <div className="d-flex flex-wrap justify-content-center">
                    {buttonArray.map((button) => (
                    <Buttonitem key={button.id} id={button.id} 
                    onClick={onClick} correct={button.correct} 
                    completed={button.completed} />
                ))}
                </div>

                </Accordion.Body>
            </Accordion.Item>
            </Accordion>

        </div>
    );
  }
  
// This is passed onto the app file.
export default Keyboard;