import React, { Component } from 'react'
import PostTopBar from './stream/post-top-bar'
import PostSection from './stream/post-section'
import TopProfiles from './stream/top-profiles'

export default class CenterPanel extends Component {
  render() {
    return (
        <div className="col-lg-6 col-md-8 no-pd">
          <div className="main-ws-sec">
            <PostTopBar />
            <PostSection />
          </div>
        </div>
    )
  }
}
