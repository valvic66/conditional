import React from 'react'

import Tags from './Tags'
import Button from './Button'
import Browser from './Browser'

export default class Conditional extends React.Component {
  constructor (props) {
    super(props)
    const { options, itemsPerSlide } = this.props
    const optionsNo = options.length
    const slidesNo = Math.ceil(optionsNo / itemsPerSlide)
    
    this.state = {
      options: options.slice(),
      slideIndex: 1,
      itemsPerSlide: itemsPerSlide,
      optionsNo: options,
      slidesNo: slidesNo
    }
  }

  getCSSClasses () {
    const classes = [this.props.classes || 'defaultConditionalClass']

    return classes
  }

  handleClick (event) {
    var slideIndex = this.state.slideIndex
    var slidesNo = this.state.slidesNo

    if (slideIndex === slidesNo) {
      slideIndex = 1
    } else {
      slideIndex += 1
    }
    this.setState({ slideIndex })
  }

  getOptions () {
    const options = this.state.options
    const itemsPerSlide = this.state.itemsPerSlide
    const slideIndex = this.state.slideIndex

    var temp = options.slice((slideIndex - 1) * itemsPerSlide, slideIndex * itemsPerSlide)

    return temp
  }

  render () {
    // var selectedFromSlide = this.selectFromSlide()
    console.log(this.state.slideIndex)
    return (
      <div className={this.getCSSClasses()}>
        <p>SELECT USER TYPE</p>

        <Tags
          id='tags1'
          options={this.getOptions()}
          classes='defaultTagsClass'
          onSelect={(value) => { console.log(`Selected value => ${value}`) }}
        />

        <Button
          id='btn1'
          label='NEXT STEP'
          classes='defaultButtonClass'
          onClick={(event) => { this.handleClick(event) }}
        />

        <Browser
          id='browser1'
          classes='defaultBrowserClass'
          slidesNo={this.state.slidesNo}
          slideIndex={this.state.slideIndex}
        />

      </div>

    )
  }
}
