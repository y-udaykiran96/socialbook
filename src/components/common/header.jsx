import React, { Component } from 'react'
import './header.css';

export default class Header extends Component {

  constructor() {
    super();

    this.state = {
      menuItems: [
        { href: 'ca', title: 'Lorem', text: 'Complexity Analysis' },
        { href: 'ds', title: 'Ipsum', text: 'Data Structures' },
        { href: 'la', title: 'Dolor', text: 'Linear Algorithms' },
        { href: 'dp', title: 'Sit', text: 'Design Patterns' }
      ]
    }
  }

  render() {

    return (
      <div className="header-container">

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">

            {getLogo()}

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {withList(this.state.menuItems)}
              {getSearchBar()}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

const getLogo = () => {
  const styles = {
    width: 30,
    height: 30
  }
  const logoUrl = "https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"
  return (
    <a class="navbar-brand" href="/index.html">
      <img src={logoUrl} style={styles} alt="" />
    </a>
  )
}

const getSearchBar = () => {
  return (
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  )
}

const menuItem = (opts) => {

  return (
    <li className="nav-item">
      <a className="nav-link" href={opts.href}>
        {/* <span>
          <i className="fa fa-home"></i>
        </span> */}
        {opts.title}
      </a>
    </li>);
}

const withList = (list) => {
  return (
    <ul className="navbar-nav mr-auto">{list.map(e => menuItem(e))}</ul>
  )
}

