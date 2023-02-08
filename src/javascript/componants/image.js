// Provides all the hangman skulls images for the game.
import image0 from '../../images/0.png';
import image1 from '../../images/1.png';
import image2 from '../../images/2.png';
import image3 from '../../images/3.png';
import image4 from '../../images/4.png';
import image5 from '../../images/5.png';
import image6 from '../../images/6.png';
import image7 from '../../images/7.png';
import image8 from '../../images/8.png';

// Retrieves the bootstrap card componant.
import Card from 'react-bootstrap/Card';

// Returns the image based on the number of wrong letters in the array.
function Imagegame(props) {

  // All the images are placed in an array to be called as needed.
  const imageObject = {
    0: image0,
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    8: image8,
  }

  // Provides the images for the game.
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='Mainimg'>
        <Card>

          {/* The source is called from the object above with the number of items in
          the wrong letter array used as an index. */}
          <Card.Img  src={imageObject[props.number]} alt="Card image" />
          <Card.ImgOverlay className='d-flex align-items-center justify-content-center'>

            {/* This text will only be displayed if the wrong letter array is empty. */}
            <Card.Text className={props.number === 0 && "fontControlHeader"}>
              {props.number === 0 && "Find the password - Enter a letter"}
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </div>
  );
  }

// This is sent to the app file.
export default Imagegame;