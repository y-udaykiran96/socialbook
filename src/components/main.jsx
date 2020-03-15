import React, { Component } from 'react'
import LeftSidePanel from './left-side-panel'
import CenterPanel from './center-panel'
import RightSidePanel from './right-side-panel'

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <LeftSidePanel />
                  <CenterPanel />
                  <RightSidePanel />
                </div>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    )
  }
}
