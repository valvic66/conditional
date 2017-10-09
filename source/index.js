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
      slidesNo: slidesNo,
      selected: [],
      isNextVisible: true,
      isEndVisible: false,
      isTagsVisible: true,
      isBrowserVisible: true
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
      this.setState({
        isNextVisible: false,
        isEndVisible: true,
        isTagsVisible: false,
        isBrowserVisible: false
      })
    } else {
      slideIndex += 1
    }
    this.setState({ slideIndex })
  }

  handleClickEnd (event) {
    this.props.onSelect(this.state.selected)
  }

  handleSelect (value) {
    const { selected, slideIndex } = this.state
    const selectedLen = selected.length

    if (selectedLen !== slideIndex) {
      selected.push(value)
      this.setState({
        selected
      })
    } else {
      selected.pop()
      this.setState({
        selected
      })
      selected.push(value)
      this.setState({
        selected
      })
    }
  }

  getOptions () {
    const options = this.state.options
    const itemsPerSlide = this.state.itemsPerSlide
    const slideIndex = this.state.slideIndex

    var temp = options.slice((slideIndex - 1) * itemsPerSlide, slideIndex * itemsPerSlide)

    return temp
  }

  render () {
    return (
      <div className={this.getCSSClasses()}>
        <p>SELECT USER TYPE</p>

        <Tags
          id='tags1'
          options={this.getOptions()}
          isVisible={this.state.isTagsVisible}
          classes='defaultTagsClass'
          onSelect={(value) => { this.handleSelect(value) }}
        />

        <Button
          id='btn1'
          label='NEXT STEP'
          isVisible={this.state.isNextVisible}
          classes='defaultButtonClass'
          onClick={(event) => { this.handleClick(event) }}
        />

        <Button
          id='btn2'
          label='SEND'
          isVisible={this.state.isEndVisible}
          classes='defaultButtonClass'
          onClick={(event) => { this.handleClickEnd(event) }}
        />

        <Browser
          id='browser1'
          isVisible={this.state.isBrowserVisible}
          classes='defaultBrowserClass'
          slidesNo={this.state.slidesNo}
          slideIndex={this.state.slideIndex}
        />

      </div>

    )
  }
}
