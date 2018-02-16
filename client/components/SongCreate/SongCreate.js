import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class SongCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { title } = this.state
    this.props.addSong({
      variables: { title },
    })
    this.setState({ title: '' })
  }

  handleInput = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit}>
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

const ADD_SONG = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`

export default graphql(ADD_SONG, { name: 'addSong' })(SongCreate)
