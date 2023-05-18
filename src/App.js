import React, { useEffect } from 'react';
import ShoppingCart from './ShoppingCart'
// import logo from './logo.svg';
import './App.css';
// import { sum, multiply } from './helper.js';
// import cats from './cats';
import WebSocketClient from './WebSocketClient';
import items from './items';

function App() {
  useEffect(() => {
    const wsClient = new WebSocketClient('ws://localhost:3000/ws');
    wsClient.connect();

    // Example: Sending a message
    wsClient.send('Hello, WebSocket server!');

    return () => {
      wsClient.close();
    };
  }, []);
  return (
    <ShoppingCart items= {items}/>
  



  );

  {/* // console.log(cats);
  // console.log(multiply(3, 4));
  // console.log(sum(3, 4));

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         I made a change Ah to the code ah
  //       </p>
  //       <p>
  //         LOL
  //       </p>
  //       <a */}
  {/* //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  {/* //     </header> */}
  //   </div>
  //;
}

export default App;