import React from 'react';
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import HomeContainer from './containers/HomeContainer.js'
import NavBar from './components/NavBar.js'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
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
}
export default App
