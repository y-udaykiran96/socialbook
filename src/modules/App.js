import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router'

import Header from '../components/common/header'
import LeftSideBar from '../components/common/leftSidebar'
import Home from '../components/home/home';
import Content from '../components/common/content'
import RightSideBar from '../components/common/rightSideBar'

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
      <div className="App fdc">
          <Header />
        <div className="wrapper fl1 fdr">
        <LeftSideBar />
          {/* <Switch>
          <Route path="/" component={Home} />
        </Switch> */}
          <Content />
        <RightSideBar />
        </div>
      </div>
    )
  }
}

// const loadScript = (url) => {
//   const script = document.createElement("script");
//   script.src = url;

//   document.body.appendChild(script);
// }
