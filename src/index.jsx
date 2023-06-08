// Importing the React library for creating and managing React components
import React from "react";

// Importing the ReactDOM library for rendering React components to the DOM
import ReactDOM from "react-dom";

// Importing the WebGLCanvas component from the local file './WebGLCanvas'
// import WebGLCanvas from "./WebGLCanvas.jsx";
import "./style.css";

// Defining a functional component called 'App'
function App() {
  // The component returns a JSX element
  return (
    // A JSX element can only have one parent element, so we wrap everything in a div
    <div>
      // The h1 tag will display the text 'Hello, world!'
      <h1>Hello, world!</h1>
      // Including the WebGLCanvas component in our App component
      {/* <WebGLCanvas /> */}
    </div>
  );
}

// Using the ReactDOM.render() function to render the App component into the DOM
// The second argument is the DOM element where the App component should be rendered.
// In this case, it's the element with the id 'root'
ReactDOM.render(<App />, document.getElementById("root"));
