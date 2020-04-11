import React, { Component } from 'react'

export default class SignupSuggestion extends Component {
  render() {
    return (
      <div className="widget widget-about">
        <img src={process.env.PUBLIC_URL + "/assets/images/wd-logo.png"} alt="" />
        <h3>Track Time on Workwise</h3>
        <span>Pay only for the Hours worked</span>
        <div className="sign_link">
          <h3><a href="sign-in.html" title="">Sign up</a></h3>
          <a href="#main" title="">Learn More</a>
        </div>
      </div>
    )
  }
}
