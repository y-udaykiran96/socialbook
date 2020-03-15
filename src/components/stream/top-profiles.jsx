import React, { Component } from 'react'
import ProfileMetaBlock from './profile-meta-block'

export default class TopProfiles extends Component {
  render() {
    return (
      <div className="top-profiles">
        <div class="pf-hd">
          <h3>Top Profiles</h3>
          <i class="la la-ellipsis-v"></i>
        </div>
        <div className="profiles-slider slick-initialized slick-slider">
          <div className="slick-list-draggable">
            <div className="slick-track">
              <ProfileMetaBlock />
              <ProfileMetaBlock />
              <ProfileMetaBlock />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
