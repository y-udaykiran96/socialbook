import React, { Component } from 'react'

export default class Header extends Component {

  getLogo = () => {
    return <div className="logo">
      <a href="index.html" title=""><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></a>
    </div>
  }

  getSearchBar = () => {
    return <div className="search-bar">
      <form>
        <input type="text" name="search" placeholder="Search..." />
        <button type="submit"><i className="la la-search"></i></button>
      </form>
    </div>
  }

  getNavBar = () => {
    return <nav>
      <ul>
        {this.getNavIcon("Home", "index.html", "/assets/images/icon1.png")}
        {this.getNavIcon("Companies", "companies.html", "/assets/images/icon2.png")}
        {this.getNavIcon("Projects", "projects.html", "/assets/images/icon3.png")}
        {this.getNavIcon("Profiles", "profiles.html", "/assets/images/icon4.png", <ul>
          <li><a href="user-profile.html" title="">User Profile</a></li>
          <li><a href="my-profile-feed.html" title="">my-profile-feed</a></li>
        </ul>)}
        {this.getNavIcon("Jobs", "jobs.html", "/assets/images/icon5.png")}
        <li>
          <a href="#main" title="" className="not-box-openm">
            <span><img src={process.env.PUBLIC_URL + "/assets/images/icon6.png"} alt="" /></span>
									Messages
								</a>
          <div className="notification-box msg" id="message" >
            <div className="nt-title">
              <h4>Setting</h4>
              <a href="#main" title="">Clear all</a>
            </div>
            <div className="nott-list">
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src={process.env.PUBLIC_URL + "/assets/images/ny-img1.png"} alt="" />
                </div>
                <div className="notification-info">
                  <h3><a href="messages.html" title="">Jassica William</a> </h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.</p>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src={process.env.PUBLIC_URL + "/assets/images/ny-img2.png"} alt="" />
                </div>
                <div className="notification-info">
                  <h3><a href="messages.html" title="">Jassica William</a></h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src={process.env.PUBLIC_URL + "/assets/images/ny-img3.png"} alt="" />
                </div>
                <div className="notification-info">
                  <h3><a href="messages.html" title="">Jassica William</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.</p>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="view-all-nots">
                <a href="messages.html" title="">View All Messsages</a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#main" title="" className="not-box-open">
            <span><img src={process.env.PUBLIC_URL + "/assets/images/icon7.png"} alt="" /></span>
									Notification
								</a>
          <div className="notification-box noti" id="notification" >
            <div className="nt-title">
              <h4>Setting</h4>
              <a href="#main" title="">Clear all</a>
            </div>
            <div className="nott-list">
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src={process.env.PUBLIC_URL + "/assets/images/ny-img1.png"} alt="" />
                </div>
                <div className="notification-info">
                  <h3><a href="#main" title="">Jassica William</a> Comment on your project.</h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src={process.env.PUBLIC_URL + "/assets/images/ny-img2.png"} alt="" />
                </div>
                <div className="notification-info">
                  <h3><a href="#main" title="">Jassica William</a> Comment on your project.</h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src={process.env.PUBLIC_URL + "/assets/images/ny-img3.png"} alt="" />
                </div>
                <div className="notification-info">
                  <h3><a href="#main" title="">Jassica William</a> Comment on your project.</h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="notfication-details">
                <div className="noty-user-img">
                  <img src={process.env.PUBLIC_URL + "/assets/images/ny-img2.png"} alt="" />
                </div>
                <div className="notification-info">
                  <h3><a href="#main" title="">Jassica William</a> Comment on your project.</h3>
                  <span>2 min ago</span>
                </div>
              </div>
              <div className="view-all-nots">
                <a href="#main" title="">View All Notification</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  }

  getNotifList = () => {
    return <div className="nott-list">
      {this.getNotifMsg("Jassica William", "Comment on your project.", "2 min ago", "/assets/images/ny-img1.png")}
      <div className="notfication-details">
        <div className="noty-user-img">
          <img src={process.env.PUBLIC_URL + "/assets/images/ny-img1.png"} alt="" />
        </div>
        <div className="notification-info">
          <h3><a href="#main" title="">Jassica William</a> Comment on your project.</h3>
          <span>2 min ago</span>
        </div>
      </div>
      <div className="notfication-details">
        <div className="noty-user-img">
          <img src={process.env.PUBLIC_URL + "/assets/images/ny-img2.png"} alt="" />
        </div>
        <div className="notification-info">
          <h3><a href="#main" title="">Jassica William</a> Comment on your project.</h3>
          <span>2 min ago</span>
        </div>
      </div>
      <div className="notfication-details">
        <div className="noty-user-img">
          <img src={process.env.PUBLIC_URL + "/assets/images/ny-img3.png"} alt="" />
        </div>
        <div className="notification-info">
          <h3><a href="#main" title="">Jassica William</a> Comment on your project.</h3>
          <span>2 min ago</span>
        </div>
      </div>
      <div className="notfication-details">
        <div className="noty-user-img">
          <img src={process.env.PUBLIC_URL + "/assets/images/ny-img2.png"} alt="" />
        </div>
        <div className="notification-info">
          <h3><a href="#main" title="">Jassica William</a> Comment on your project.</h3>
          <span>2 min ago</span>
        </div>
      </div>
      <div className="view-all-nots">
        <a href="#main" title="">View All Notification</a>
      </div>
    </div>

  }

  getNotifMsg = (name, txt, time, iconUrl) => {
    return <div className="notfication-details">
      <div className="noty-user-img">
        <img src={process.env.PUBLIC_URL + iconUrl} alt="" />
      </div>
      <div className="notification-info">
        <h3><a href="#main" title="">{name}</a> {txt}</h3>
        <span>{time}</span>
      </div>
    </div>

  }

  getNavIcon = (optionTitle, redirectTo, iconUrl, childContent) => {
    return <li>
      <a href={redirectTo} title="">
        <span><img src={process.env.PUBLIC_URL + iconUrl} alt="" /></span>
        {optionTitle}
      </a>
      {childContent ? childContent : ''}
    </li>
  }

  getUserMenu = () => {
    return <div className="user-account">
      <div className="user-info">
        <img src={process.env.PUBLIC_URL + "/assets/images/resources/user.png"} alt="" />
        <a href="#main" title="">John</a>
        <i className="la la-sort-down"></i>
      </div>
      <div className="user-account-settingss" id="users" style={{ "display": "none" }}>
        <h3>Online Status</h3>
        <ul className="on-off-status">
          <li>
            <div className="fgt-sec">
              <input type="radio" name="cc" id="c5" />
              <label for="c5">
                <span></span>
              </label>
              <small>Online</small>
            </div>
          </li>
          <li>
            <div className="fgt-sec">
              <input type="radio" name="cc" id="c6" />
              <label for="c6">
                <span></span>
              </label>
              <small>Offline</small>
            </div>
          </li>
        </ul>
        <h3>Custom Status</h3>
        <div className="search_form">
          <form>
            <input type="text" name="search" />
            <button type="submit">Ok</button>
          </form>
        </div>
        <h3>Setting</h3>
        <ul className="us-links">
          <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
          <li><a href="#main" title="">Privacy</a></li>
          <li><a href="#main" title="">Faqs</a></li>
          <li><a href="#main" title="">Terms &amp; Conditions</a></li>
        </ul>
        <h3 className="tc"><a href="sign-in.html" title="">Logout</a></h3>
      </div>
    </div>
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <div className="container">
            <div className="header-data">
              {this.getLogo()}
              {this.getSearchBar()}
              {this.getNavBar()}
              <div className="menu-btn">
                <a href="#main" title=""><i className="fa fa-bars"></i></a>
              </div>
              {this.getUserMenu()}
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}
