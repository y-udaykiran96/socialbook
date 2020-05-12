import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Home from '../components/home/home';

export default class App extends Component {

  componentDidMount() {
    // loadScript(process.env.PUBLIC_URL + "/assets/js/jquery.min.js")
    // loadScript(process.env.PUBLIC_URL + "/assets/js/popper.js")
    // loadScript(process.env.PUBLIC_URL + "/assets/js/bootstrap.min.js")
    // loadScript(process.env.PUBLIC_URL + "/assets/js/jquery.mCustomScrollbar.js")
    // loadScript(process.env.PUBLIC_URL + "/assets/lib/slick/slick.min.js")
    // loadScript(process.env.PUBLIC_URL + "/assets/js/scrollbar.js")
    // loadScript(process.env.PUBLIC_URL + "/assets/js/script.js")
  }

  render() {
    return (
      <div>

        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    )
  }
}

// const loadScript = (url) => {
//   const script = document.createElement("script");
//   script.src = url;

//   document.body.appendChild(script);
// }
