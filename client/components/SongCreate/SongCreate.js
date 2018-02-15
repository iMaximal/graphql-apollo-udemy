import React, { Component } from 'react'

class SongCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  handleInput(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form>
          <label>Song Title:</label>
          <input
            name="title"
            onChange={this.handleInput}
            value={this.state.title}
          />
        </form>
      </div>
    )
  }
}

export default SongCreate
