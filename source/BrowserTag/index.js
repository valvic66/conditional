import React from 'react'

export default class BrowserTag extends React.Component {
  getBrowserTagCSSClasses () {
    const classes = [this.props.classes || 'defaultBrowserTagClass']

    return classes
  }

  render () {
    return (
      <div
        id={this.props.id}
        className={this.getBrowserTagCSSClasses()}
      />
    )
  }
}
