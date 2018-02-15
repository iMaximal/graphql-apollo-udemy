import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SongList from './components/SongList/SongList'
import SongCreate from './components/SongCreate/SongCreate'

export default () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/song/new" component={SongCreate} />
        <Route path="/" exact component={SongList} />
      </Switch>
    </div>
  )
}
