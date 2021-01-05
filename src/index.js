import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import './style.css'
import ParallaxBackground from './components/backgroundParallax'
import CardSection from './components/cardSection'
import Site from './Site'
import { Switch, Route, Link } from 'react-router-dom';

//Babel compiles this down to React.createElement- this is why we
//  must import React
//  Currently it is a part of the virtual DOM
//const element = <h1>Hello World</h1>;

//To update the real DOM, need ReactDOM module
//  'root' is the div in index.html
//Eventually, we will render entire component to the DOM

//ReactDOM.render(<Site/>, document.getElementById('root'));
ReactDOM.render(<ParallaxBackground/>, document.getElementById('root'));
ReactDOM.render(<CardSection/>, document.getElementById('links'));



//Automatically restarted- hot module reloading
