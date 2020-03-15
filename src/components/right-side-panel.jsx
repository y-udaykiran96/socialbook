import React, { Component } from 'react'
import SignupSuggestion from './widgets/signup-suggestion'

export default class RightSidePanel extends Component {
  render() {
    return (
        <div className="col-lg-3 pd-right-none no-pd">
          <div className="right-sidebar">
            <SignupSuggestion />
          </div>
        </div>
    )
  }
}
