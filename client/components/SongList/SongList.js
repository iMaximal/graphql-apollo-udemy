import React, { Component } from 'react'

// a helper to allow us to write queries inside of a component
import gql from 'graphql-tag'

// helper library, glue layer between React and the Apollo data source
// to help us bond a component with an actual query
import { graphql } from 'react-apollo'

class SongList extends Component {

  renderSongs() {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    })
   }

  render() {

    if(this.props.data.loading) {
      return <div>Loading...</div>
    }

    return (
      <ul className="collection">
        {this.renderSongs()}
      </ul>
      )
  }
}

const query = gql`
  {
    songs {
        id
        title
    }
  }
`


export default graphql(query)(SongList)
