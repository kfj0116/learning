import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './index.js';

ReactDOM.render(
    <Hello />,
    document.getElementById('demo')
);

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <p>This is a React Demo</p>
//       <p>It is {new Date().toLocaleTimeString()}.</p>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('demo')
//   );
// }

// setInterval(tick, 1000);
