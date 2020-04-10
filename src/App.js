import React, { Component } from 'react'
// import logo from './logo.svg';
// import './App.css';
import Main from './components/main'
import Header from './components/header'

// import $ from 'jquery';
// import Popper from 'popper.js';


export default class App extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "http://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";

    document.head.appendChild(script);  
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    )
  }
}
