import React from 'react'

import BrowserTag from '../BrowserTag'

export default class Browser extends React.Component {
  getBrowserCSSClasses () {
    const classes = [this.props.classes || 'defaultBrowserClass']
    return classes
  }

  render () {
    var slideIndex = this.props.slideIndex

    var tagList = []
    var slidesNo = this.props.slidesNo
    for (var i = 1; i <= slidesNo; i++) {
      tagList.push(
        <BrowserTag
          key={i}
          classes={slideIndex === i ? 'defaultBrowserTagClassSelected' : 'defaultBrowserTagClass'}
        />)
    }

    return (
      <div
        id={this.props.id}
        className={this.getBrowserCSSClasses()}
      >
        { tagList }
      </div>
    )
  }
}
