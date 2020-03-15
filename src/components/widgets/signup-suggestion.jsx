import React, { Component } from 'react'
import wdLogo from '../../assets/images/wd-logo.png'

export default class SignupSuggestion extends Component {
  render() {
    return (
      <div class="widget widget-about">
        <img src={wdLogo} alt="" />
        <h3>Track Time on Workwise</h3>
        <span>Pay only for the Hours worked</span>
        <div class="sign_link">
          <h3><a href="sign-in.html" title="">Sign up</a></h3>
          <a href="#" title="">Learn More</a>
        </div>
      </div>
    )
  }
}
