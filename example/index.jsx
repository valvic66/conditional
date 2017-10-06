import React from 'react'
import ReactDOM from 'react-dom'

import Conditional from '../source'

class App extends React.Component {
  render () {
    const options = [
      { id: 'tag1', imgSrc: '../example/assets/search.svg', label: 'SEARCH1' },
      { id: 'tag2', imgSrc: '../example/assets/zoom-in.svg', label: 'ZOOM IN1' },
      { id: 'tag3', imgSrc: '../example/assets/zoom-out.svg', label: 'ZOOM OUT1' },
      { id: 'tag4', imgSrc: '../example/assets/zoom-in.svg', label: 'ZOOM IN2' },
      { id: 'tag5', imgSrc: '../example/assets/zoom-out.svg', label: 'ZOOM OUT2' },
      { id: 'tag6', imgSrc: '../example/assets/search.svg', label: 'SEARCH2' }
    ]

    return (
      <div className='presentationDiv'>
        <Conditional
          id='conditional1'
          classes='defaultConditionalClass'
          itemsPerSlide={4}
          options={options}

        />
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
