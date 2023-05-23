// import React, { useEffect } from 'react';
import Fruits from './ShoppingCart'
// import logo from './logo.svg';
import './App.css';
import { choice, remove } from './helper.js';
// import cats from './cats';
// import WebSocketClient from './WebSocketClient';
let myFruit= choice(Fruits);
function App (){

console.log(Fruits);
console.log('Id like one RANDOMFRUIT, please');

console.log(`Here you go random ${myFruit}`);
console.log("Here you . May I have another");
let remainingFruit = remove(myFruit, Fruits);
console.log(`Sorry were all out we have ${remainingFruit.length} left.`);

}

export default App;