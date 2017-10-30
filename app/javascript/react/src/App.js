import React from 'react';
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import HomeContainer from './containers/HomeContainer.js'


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
          <Route path='/' component={HomeContainer} />
        </Router>
      </div>
    )
  }
}
export default App
