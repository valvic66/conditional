
<h1>React-Conditional Demo</h1>

Description: A Conditional React component that receives options via an array of objects, itemsPerSlide and returns an array with the selected values.

Live Example: http://htmlpreview.github.io/?https://github.com/valvic66/conditional/blob/master/example/index.html

Usage

    const options = [
      { id: 'tag1', imgSrc: 'https://cdn.rawgit.com/valvic66/conditional/20a2cb22/example/assets/search.svg', label: 'SEARCH1' },
      { id: 'tag2', imgSrc: 'https://cdn.rawgit.com/valvic66/conditional/20a2cb22/example/assets/zoom-in.svg', label: 'ZOOM IN1' },
      { id: 'tag3', imgSrc: 'https://cdn.rawgit.com/valvic66/conditional/20a2cb22/example/assets/zoom-out.svg', label: 'ZOOM OUT1' },
    ]

API

    <Conditional
      id='conditional1'
      classes='defaultConditionalClass'
      itemsPerSlide={3}
      options={options}
      selected={(values) => {this.handleSelect(values)}
    />


License: Micu Valentin - 2017
