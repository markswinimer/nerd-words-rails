import React from 'react';
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import HomeContainer from './containers/HomeContainer.js'
import NavBar from './components/NavBar.js'

const App = props => {
  return(
    <div className="appContainer">
    <Router history={browserHistory}>
      <Route path='/' component={NavBar} >
          <IndexRoute component={HomeContainer} />
      </Route>
    </Router>
    </div>
  )
}
export default App
