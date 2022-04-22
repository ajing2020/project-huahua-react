import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Money from './views/Money'
import Statistics from './views/Statistics'
import Tags from './views/Tags'
import EditTag from './views/EditTag'
import NoMatch from './views/NoMatch'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags/:tag" exact>
          <EditTag />
        </Route>
        <Route path="/tags" exact>
          <Tags />
        </Route>
        <Route path="/money" exact>
          <Money />
        </Route>
        <Route path="/statistics" exact>
          <Statistics />
        </Route>
        <Redirect from="/" to="/money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
