import React from 'react'
import ReactDOM from 'react-dom'

import Conditional from '../source'

class App extends React.Component {
  render () {
    const options = [
      { id: 'tag1', imgSrc: 'https://cdn.rawgit.com/valvic66/conditional/20a2cb22/example/assets/search.svg', label: 'SEARCH1' },
      { id: 'tag2', imgSrc: 'https://cdn.rawgit.com/valvic66/conditional/20a2cb22/example/assets/zoom-in.svg', label: 'ZOOM IN1' },
      { id: 'tag3', imgSrc: 'https://cdn.rawgit.com/valvic66/conditional/20a2cb22/example/assets/zoom-out.svg', label: 'ZOOM OUT1' },
      { id: 'tag4', imgSrc: 'https://cdn.rawgit.com/valvic66/conditional/20a2cb22/example/assets/zoom-in.svg', label: 'ZOOM IN2' },
      { id: 'tag5', imgSrc: 'https://cdn.rawgit.com/valvic66/conditional/20a2cb22/example/assets/zoom-out.svg', label: 'ZOOM OUT2' },
      { id: 'tag6', imgSrc: 'https://cdn.rawgit.com/valvic66/conditional/20a2cb22/example/assets/search.svg', label: 'SEARCH2' }
    ]

    return (
      <div className='presentationDiv'>
        <Conditional
          id='conditional1'
          classes='defaultConditionalClass'
          itemsPerSlide={2}
          options={options}
          onSelect={(values) => { console.log(values) }}
        />
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
