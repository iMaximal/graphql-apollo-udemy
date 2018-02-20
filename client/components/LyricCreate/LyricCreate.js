import React, { Component } from 'react'

class LyricCreate extends Component {
  render() {
    return (
      <form>
        <label htmlFor="lyric-add">Add a Lyric</label>
        <input id="lyric-add" type="text" />
      </form>
    )
  }
}

export default LyricCreate
