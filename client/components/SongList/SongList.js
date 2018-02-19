import React, { Component } from 'react'

// a helper to allow us to write queries inside of a component
import gql from 'graphql-tag'

// helper library, glue layer between React and the Apollo data source
// to help us bond a component with an actual query
import { graphql, compose } from 'react-apollo'
import { Link } from 'react-router-dom'
import fetchSongs from '../../queries/fetchSongs'

class SongList extends Component {
  onSongDelete(id) {
    this.props.deleteSong({
      variables: { id },
    })
      // this props.data provided by react-apollo
      // refetch function will automatically reexecute any queris that are associated with this SongList component
      .then(() => this.props.data.refetch())
      .catch((error) => console.error(error))
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        {title}
        <i
          className="material-icons"
          onClick={() => this.onSongDelete(id)}
        >
            delete
        </i>
      </li>
    ))
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`


export default compose(
  graphql(fetchSongs),
  graphql(DELETE_SONG, { name: 'deleteSong' }),
)(SongList)
