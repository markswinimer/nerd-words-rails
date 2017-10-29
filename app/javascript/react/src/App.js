import React from 'react';
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import HomeContainer from './containers/HomeContainer.js'

const App = props => {
  return(
    <div className="appContainer">
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={HomeContainer} />
      </Route>
    </Router>
    </div>
  )
}
export default App
