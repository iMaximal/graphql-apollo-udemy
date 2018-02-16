import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import SongList from './components/SongList/SongList'
import SongCreate from './components/SongCreate/SongCreate'


const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={SongList} />
        <Route path="/song/new" component={SongCreate} />
      </Switch>
    </div>
  )
}

export default withRouter(App)
