import React, { Component } from 'react'

export default class PostTopBar extends Component {
  render() {
    return (
      <div className="post-topbar">
        <div className="user-picy">
          <img src={process.env.PUBLIC_URL + "/assets/images/resources/user-pic.png"} alt="" />
        </div>
        <div className="post-st">
          <ul>
            <li><a className="post_project" href="#main" title="">Post a Project</a></li>
            <li><a className="post-jb active" href="#main" title="">Post a Job</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
