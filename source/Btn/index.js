import React from 'react'

export default class Btn extends React.Component {
  getBtnCSSClasses () {
    const classes = [this.props.classes || 'defaultBtnClass']

    return classes
  }

  getBtnLabelCSSClasses () {
    const classes = [this.props.btn_classes || 'defaultBtnLabelClass']

    return classes
  }

  handleClick = (event) => {
    this.props.onClick(event)
  }

  render () {
    return (
      <div
        id={this.props.id}
        className={this.getBtnCSSClasses()}
        onClick={(event) => this.handleClick(event)}
      >
        <div
          className={this.getBtnLabelCSSClasses()}
        >
          {this.props.label}
        </div>

      </div>
    )
  }
}
