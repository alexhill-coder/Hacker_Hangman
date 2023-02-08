// Imports the required elements from react.
import React, { useEffect, useRef } from 'react';

// Creates a background componant that creates a matrix style animation. 
function Background({ timeout }) {
    
    // Sets the variable as a reference hook.
    const canvas = useRef();

    // Creates/alters the created letters on the background. 
    useEffect(() => {
        const context = canvas.current.getContext('2d');

        // set the width and height of the canvas.
        const width = document.body.offsetWidth;
        const height = document.body.offsetHeight;
        canvas.current.width = width;
        canvas.current.height = height;

        // draw a black rectangle of width and height same as that of the canvas.
        context.fillStyle = '#000';
        context.fillRect(0, 0, width, height);

        // calculate how many 'lines' to show and animate.
        const columns = Math.floor(width / 20) + 1;
        const yPositions = Array.from({ length: columns }).fill(0);

        // A function that is called at the specified rate set by the interval.
        const matrixEffect = () => {

            // Draw a semitransparent black rectangle on top of previous drawing.
            context.fillStyle = '#0001';
            context.fillRect(0, 0, width, height);

            // Set color to blue and font to 15pt monospace in the drawing context.
            context.fillStyle = '#5197ff';
            context.font = '15pt monospace';

            // for each column put a random character at the end.
            yPositions.forEach((y, index) => {

                // generate a random character.
                const text = String.fromCharCode(Math.random() * 128);

                // x coordinate of the column, y coordinate is already given.
                const x = index * 20;

                // render the character at (x, y).
                context.fillText(text, x, y);

                // randomly reset the end of the column if it's at least 100px high
                if (y > 100 + Math.random() * 10000) {
                    yPositions[index] = 0;
                } 
                
                // otherwise just move the y coordinate for the column 20px down
                else {
                    yPositions[index] = y + 20;
                }
            });
        };

        // render the animation at at the interval.
        const interval = setInterval(matrixEffect, timeout);

        // Clears the interval everytime it is rendered to prevent multiple instances at once.
        return () => {
            clearInterval(interval);
        };
    // renders everytime the canvas is altered or the interval time has passed.
    }, [canvas, timeout]);

    // Creates a canvas element in the HTML page that is controlled by the above code.
    return (
        <div>
            <canvas ref={canvas} />
        </div>
    )
  
}

// This element is sent to the app page.
export default Background;

// Used the websites dev.to & pablo.gg to learn how to create a matrix style animation script:
// https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din
// https://pablo.gg/en/blog/coding/creating-a-matrix-source-code-effect-background-for-my-website-with-react/