import React, { Component } from 'react'
import ProfileBlock from './profile/profile-block'

export default class LeftSidePanel extends Component {
  render() {
    return (
        <div className="col-lg-3 col-md-4 pd-left-none no-pd">
          <div className="main-left-sidebar no-margin">
            <ProfileBlock />
          </div>
        </div>
    )
  }
}
