import React, { Component } from 'react'
import userPic from '../../assets/images/resources/user-pic.png'

export default class PostTopBar extends Component {
  render() {
    return (
      <div className="post-topbar">
        <div className="user-picy">
          <img src={userPic} alt="" />
        </div>
        <div className="post-st">
          <ul>
            <li><a className="post_project" href="#" title="">Post a Project</a></li>
            <li><a className="post-jb active" href="#" title="">Post a Job</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
