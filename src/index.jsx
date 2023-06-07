import React from 'react';
import ReactDOM from 'react-dom';
import WebGLCanvas from './WebGLCanvas';

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <WebGLCanvas />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
