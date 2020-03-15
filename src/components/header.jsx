import React, { Component } from 'react'
import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'
import icon3 from '../assets/images/icon3.png'
import icon4 from '../assets/images/icon4.png'
import icon5 from '../assets/images/icon5.png'
import icon6 from '../assets/images/icon6.png'
import icon7 from '../assets/images/icon7.png'
import logo from '../assets/images/logo.png'

import nyImg1 from '../assets/images/resources/ny-img1.png'
import nyImg2 from '../assets/images/resources/ny-img2.png'
import nyImg3 from '../assets/images/resources/ny-img3.png'

import minProfilePic from '../assets/images/resources/user.png'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div class="container">
            <div class="header-data">
              <div class="logo">
                <a href="index.html" title=""><img src={logo} alt="" /></a>
              </div>
              <div class="search-bar">
                <form>
                  <input type="text" name="search" placeholder="Search..." />
                  <button type="submit"><i class="la la-search"></i></button>
                </form>
              </div>
              <nav>
                <ul>
                  <li>
                    <a href="index.html" title="">
                      <span><img src={icon1} alt="" /></span>
									Home
								</a>
                  </li>
                  <li>
                    <a href="companies.html" title="">
                      <span><img src={icon2} alt="" /></span>
									Companies
								</a>
                    <ul>
                      <li><a href="companies.html" title="">Companies</a></li>
                      <li><a href="company-profile.html" title="">Company Profile</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="projects.html" title="">
                      <span><img src={icon3} alt="" /></span>
									Projects
								</a>
                  </li>
                  <li>
                    <a href="profiles.html" title="">
                      <span><img src={icon4} alt="" /></span>
									Profiles
								</a>
                    <ul>
                      <li><a href="user-profile.html" title="">User Profile</a></li>
                      <li><a href="my-profile-feed.html" title="">my-profile-feed</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="jobs.html" title="">
                      <span><img src={icon5} alt="" /></span>
									Jobs
								</a>
                  </li>
                  <li>
                    <a href="#" title="" class="not-box-openm">
                      <span><img src={icon6} alt="" /></span>
									Messages
								</a>
                    <div class="notification-box msg" id="message" >
                      <div class="nt-title">
                        <h4>Setting</h4>
                        <a href="#" title="">Clear all</a>
                      </div>
                      <div class="nott-list">
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src={nyImg1} alt="" />
                          </div>
                          <div class="notification-info">
                            <h3><a href="messages.html" title="">Jassica William</a> </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src={nyImg2} alt="" />
                          </div>
                          <div class="notification-info">
                            <h3><a href="messages.html" title="">Jassica William</a></h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src={nyImg3} alt="" />
                          </div>
                          <div class="notification-info">
                            <h3><a href="messages.html" title="">Jassica William</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.</p>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="view-all-nots">
                          <a href="messages.html" title="">View All Messsages</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#" title="" class="not-box-open">
                      <span><img src={icon7} alt="" /></span>
									Notification
								</a>
                    <div class="notification-box noti" id="notification" >
                      <div class="nt-title">
                        <h4>Setting</h4>
                        <a href="#" title="">Clear all</a>
                      </div>
                      <div class="nott-list">
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src={nyImg1} alt="" />
                          </div>
                          <div class="notification-info">
                            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src={nyImg2} alt="" />
                          </div>
                          <div class="notification-info">
                            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src={nyImg3} alt="" />
                          </div>
                          <div class="notification-info">
                            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="notfication-details">
                          <div class="noty-user-img">
                            <img src={nyImg2} alt="" />
                          </div>
                          <div class="notification-info">
                            <h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
                            <span>2 min ago</span>
                          </div>
                        </div>
                        <div class="view-all-nots">
                          <a href="#" title="">View All Notification</a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div class="menu-btn">
                <a href="#" title=""><i class="fa fa-bars"></i></a>
              </div>
              <div class="user-account">
                <div class="user-info">
                  <img src={minProfilePic} alt="" />
                  <a href="#" title="">John</a>
                  <i class="la la-sort-down"></i>
                </div>
                <div class="user-account-settingss" id="users" style={{ "display": "none" }}>
                  <h3>Online Status</h3>
                  <ul class="on-off-status">
                    <li>
                      <div class="fgt-sec">
                        <input type="radio" name="cc" id="c5" />
                        <label for="c5">
                          <span></span>
                        </label>
                        <small>Online</small>
                      </div>
                    </li>
                    <li>
                      <div class="fgt-sec">
                        <input type="radio" name="cc" id="c6" />
                        <label for="c6">
                          <span></span>
                        </label>
                        <small>Offline</small>
                      </div>
                    </li>
                  </ul>
                  <h3>Custom Status</h3>
                  <div class="search_form">
                    <form>
                      <input type="text" name="search" />
                      <button type="submit">Ok</button>
                    </form>
                  </div>
                  <h3>Setting</h3>
                  <ul class="us-links">
                    <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
                    <li><a href="#" title="">Privacy</a></li>
                    <li><a href="#" title="">Faqs</a></li>
                    <li><a href="#" title="">Terms &amp; Conditions</a></li>
                  </ul>
                  <h3 class="tc"><a href="sign-in.html" title="">Logout</a></h3>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}
