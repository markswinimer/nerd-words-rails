import React from 'react';
import { Route, IndexRoute, Router, browserHistory} from 'react-router';
import HomeContainer from './containers/HomeContainer.js'
import CreateLibraryContainer from './containers/CreateLibraryContainer.js'
import PlayContainer from './containers/PlayContainer.js'
import ShareContainer from './containers/ShareContainer.js'

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
          <IndexRoute component={HomeContainer} />

          <Route path='/library/new'
          component={CreateLibraryContainer}/>

          <Route path='/share'
          component={ShareContainer}/>

          <Route path='/play'
          component={PlayContainer}/>
        </Route>
      </Router>
    </div>
    )
  }
}
export default App
