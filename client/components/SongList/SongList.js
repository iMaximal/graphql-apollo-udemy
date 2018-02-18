import React, { Component } from 'react'

// a helper to allow us to write queries inside of a component
// import gql from 'graphql-tag'

// helper library, glue layer between React and the Apollo data source
// to help us bond a component with an actual query
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import query from '../../queries/fetchSongs'

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map((song) => (
      <li key={song.id} className="collection-item">
        {song.title}
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


export default graphql(query)(SongList)
