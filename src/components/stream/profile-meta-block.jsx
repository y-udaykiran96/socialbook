import React, { Component } from 'react'
import userImage from '../../assets/images/resources/user2.png'
import msgImage from '../../assets/images/envelop.png'

export default class ProfileMetaBlock extends Component {
  render() {
    return (
      <div>
        <div className="user-profy slick-cloned" /*  slick-slide */ tabindex="0" style={{ width: '153px' }} data-slick-index="-2" aria-hidden="false">
           <img src={userImage} alt="" /> 
          <h3>John Doe</h3>
          <span>Graphic Designer</span>
          <ul>
            <li key="1"><a href="#abc" title="" className="followw" tabindex="0">Follow</a></li>
            <li key="2"><a href="#abc" title="" className="envlp" tabindex="0">
              <img src={msgImage} alt="" />
              </a></li>
            <li key="3"><a href="#abc" title="" className="hire" tabindex="0">hire</a></li>
          </ul>
          <a href="#abc" title="" tabindex="0">View Profile</a>
        </div>
      </div>
    )
  }
}
