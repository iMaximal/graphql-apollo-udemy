import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class LyricCreate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    const { title } = this.state

    // mutation is async func
    this.props.addLyric({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      },
    })
      .then(() => this.setState({ content: '' }))
      .catch((error) => console.error(error))
  }

  inputHandler = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="lyric-add">Add a Lyric</label>
        <input
          name="content"
          onChange={this.inputHandler}
          id="lyric-add"
          type="text"
          value={this.state.content}
        />
      </form>
    )
  }
}

const ADD_LYRIC = gql`
  mutation AddLyricToSong ($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`

export default graphql(ADD_LYRIC, { name: 'addLyric' })(LyricCreate)
