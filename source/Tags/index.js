import React from 'react'
import Tag from '../Tag'
export default class Tags extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedValue: ''
    }
  }

  getTagsCSSClasses () {
    const classes = [this.props.classes || 'defaultTagsClass']
    return classes
  }

  handleSelect (event, option, index) {
    // console.log(event.type, option.label, index)
    var selectedValue = this.state.selectedValue
    selectedValue = option.id

    this.props.onSelect(option.label)

    this.setState({
      selectedValue: selectedValue
    })
  }

  render () {
    return (
      <div
        id={this.props.id}
        className={this.getTagsCSSClasses()}
      >
        {this.props.options.map((option, index) => (
          <Tag
            key={index}
            id={option.id}
            classes='defaultTagClass'
            img_classes={this.state.selectedValue === option.id ? 'defaultTagImgClassSelected' : 'defaultTagImgClass'}
            imgSrc={option.imgSrc}
            label={option.label}
            onClick={(event) => this.handleSelect(event, option, index)}
          />))
        }
      </div>
    )
  }
}
