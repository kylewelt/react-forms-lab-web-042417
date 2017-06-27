import React from 'react'

class PoemWriter extends React.Component {
  constructor () {
    super()

    this.state = {
      value: '',
      valid: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  validPoem (poem) {
    poem = poem.split('\n')

    if (poem.length === 3) {
      const line1 = poem[0].split(' ').filter(word => word)
      const line2 = poem[1].split(' ').filter(word => word)
      const line3 = poem[2].split(' ').filter(word => word)

      if (line1.length === 5 && line2.length === 3 && line3.length === 5) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  handleChange (event) {
    const poem = event.target.value

    this.setState({
      value: poem,
      valid: this.validPoem(poem)
    })
  }

  render () {
    return (
      <div>
        <textarea
          rows='3'
          cols='60'
          value={this.state.value}
          onChange={this.handleChange}
        />
        {this.state.valid ? '' : <div id='poem-validation-error' style={{color: 'red'}}>This poem is not written in the right structure!</div>}
      </div>
    )
  }
}

export default PoemWriter
