import React, { Component } from 'react'
import PostBar from './post-bar'
import TopProfiles from './top-profiles'
import CommentSection from './comment-section'

export default class PostSection extends Component {
  render() {
    return (
      <div className="posts-section">
        <PostBar />
        <TopProfiles />
        <PostBar />
        <CommentSection />
      </div>
    )
  }
}
