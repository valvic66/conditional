import React from 'react'

export default class Button extends React.Component {
  getCSSClasses () {
    const classes = [this.props.classes || 'defaultButtonClass']
    if (this.props.isVisible) {
      classes.push('show')
    } else {
      classes.push('hide')
    }
    return classes.join(' ')
  }

  getLabelCSSClasses () {
    const classes = [this.props.btn_classes || 'defaultButtonLabelClass']
    if (this.props.isVisible) {
      classes.push('show')
    } else {
      classes.push('hide')
    }
    return classes.join(' ')
  }

  handleClick = (event) => {
    this.props.onClick(event)
  }

  render () {
    return (
      <div
        id={this.props.id}
        className={this.getCSSClasses()}
        onClick={(event) => this.handleClick(event)}
      >
        <div
          className={this.getLabelCSSClasses()}
        >
          {this.props.label}
        </div>

      </div>
    )
  }
}
