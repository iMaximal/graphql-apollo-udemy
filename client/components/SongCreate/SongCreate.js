import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import fetchSongs from '../../queries/fetchSongs'

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

    // mutation is async func
    this.props.addSong({
      variables: { title },
      refetchQueries: [{ query: fetchSongs }],
    })
      .then(() => this.props.history.push('/'))
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
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="song-title">Song Title:</label>
          <input
            id="song-title"
            name="title"
            onChange={this.inputHandler}
            value={this.state.title}
            autoComplete="off"
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
