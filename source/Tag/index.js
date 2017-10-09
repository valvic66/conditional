
import React from 'react'

export default class Tag extends React.Component {
  getTagCSSClasses () {
    const classes = [this.props.classes || 'defaultTagClass']
    return classes
  }

  getTagImgCSSClasses () {
    const classes = [this.props.img_classes || 'defaultTagImgClass']
    // if (this.props.isSelected) {
    //   classes.push('defaultTagImgClassSelected')
    // }

    return classes.join(' ')
  }

  getTagLabelCSSClasses () {
    const classes = ['defaultTagLabelClass']
    return classes
  }

  handleClick = (event) => {
    const { onClick } = this.props

    if (typeof onClick === 'function') {
      onClick(event)
    }
  }

  render () {
    return (
      <div
        id={this.props.id}
        className={this.getTagCSSClasses()}
      >
        <div
          className={this.getTagImgCSSClasses()}
          onClick={(event) => this.handleClick(event)}
        >
          <img src={this.props.imgSrc} width='25' height='25' />
        </div>

        <div
          className={this.getTagLabelCSSClasses()}
        >
          {this.props.label}
        </div>

      </div>
    )
  }
}
