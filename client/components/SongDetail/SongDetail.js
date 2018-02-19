import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import SongIndex from '../../queries/SongIndex'

class SongDetail extends Component {
  render() {
    const { song } = this.props.data

    if (!song) { return <div>Loading...</div> }

    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    )
  }
}

// the props first go into the GraphQL helper
// and then the GraphQL helper passes them along to the SongDetail component
export default graphql(SongIndex, {
  options: (props) => ({ variables: { id: props.match.params.id } }),
})(SongDetail)
