import React, { Component } from 'react'

export default class CreditBar extends Component {
  render() {
    return (
      <div className="tags-sec full-width">
        <ul>
          <li><a href="#main" title="">Help Center</a></li>
          <li><a href="#main" title="">About</a></li>
          <li><a href="#main" title="">Privacy Policy</a></li>
          <li><a href="#main" title="">Community Guidelines</a></li>
          <li><a href="#main" title="">Cookies Policy</a></li>
          <li><a href="#main" title="">Career</a></li>
          <li><a href="#main" title="">Language</a></li>
          <li><a href="#main" title="">Copyright Policy</a></li>
        </ul>
        <div className="cp-sec">
          <img src={process.env.PUBLIC_URL + "/assets/images/logo2.png"} alt="" />
          <p><img src={process.env.PUBLIC_URL + "/assets/images/cp.png"} alt="" />Copyright 2019</p>
        </div>
      </div>
    )
  }
}
