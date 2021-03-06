import React from 'react';
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import MainContainer from './containers/MainContainer.js'
import CreateContainer from './containers/CreateContainer.js'
import PlayContainer from './containers/PlayContainer.js'
import ShareContainer from './containers/ShareContainer.js'
import GameContainer from './containers/GameContainer.js'

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

          <Route path='/'>
          <IndexRoute component={MainContainer} />

          <Route path='/library/new'
          component={CreateContainer}/>

          <Route path='/share'
          component={ShareContainer}/>

          <Route path='/play'
          component={PlayContainer}/>

          <Route path='/gameplay/:id'
          component={GameContainer}/>

        </Route>
      </Router>
    </div>
    )
  }
}
export default App
