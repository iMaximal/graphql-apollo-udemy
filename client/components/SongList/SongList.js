import React, { Component } from 'react'
// a helper to allow us to write queries inside of a component
import gql from 'graphql-tag'

class SongList extends Component {
  render() {
    return (
      <div>
        SongList
      </div>
      )
  }
}

const query = gql`
  {
    songs {
        title
    }
  }
`


export default  SongList
