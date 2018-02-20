import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import SongIndex from '../../queries/SongIndex'
import LyricCreate from '../LyricCreate/LyricCreate'


class SongDetail extends Component {
  render() {
    const { song } = this.props.data

    if (!song) { return <div>Loading...</div> }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <LyricCreate />
      </div>
    )
  }
}

// the props first go into the GraphQL helper
// and then the GraphQL helper passes them along to the SongDetail component
export default graphql(SongIndex, {
  options: (props) => ({ variables: { id: props.match.params.id } }),
})(SongDetail)
