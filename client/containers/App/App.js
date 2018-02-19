import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import SongList from '../../components/SongList/SongList'
import SongCreate from '../../components/SongCreate/SongCreate'
import SongDetail from '../../components/SongDetail/SongDetail'


const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={SongList} />
        <Route path="/songs/new" component={SongCreate} />
        <Route path="/songs/:id" component={SongDetail} />
      </Switch>
    </div>
  )
}

export default withRouter(App)
