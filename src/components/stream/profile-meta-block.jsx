import React, { Component } from 'react'

export default class ProfileMetaBlock extends Component {
  render() {
    return (
      <div>
        <div className="user-profy slick-cloned" /*  slick-slide */ tabIndex="0" style={{ width: '153px' }} dataSlickIndex="-2" ariaHidden="false">
          <img src={process.env.PUBLIC_URL + "/assets/images/resources/user2.png"} alt="" /> 
          <h3>John Doe</h3>
          <span>Graphic Designer</span>
          <ul>
            <li key="1"><a href="#abc" title="" className="followw" tabIndex="0">Follow</a></li>
            <li key="2"><a href="#abc" title="" className="envlp" tabIndex="0">
              <img src={process.env.PUBLIC_URL + "/assets/images/envelop.png"} alt="" />
              </a></li>
            <li key="3"><a href="#abc" title="" className="hire" tabIndex="0">hire</a></li>
          </ul>
          <a href="#abc" title="" tabIndex="0">View Profile</a>
        </div>
      </div>
    )
  }
}
