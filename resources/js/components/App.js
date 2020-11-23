import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'react-image-lightbox/style.css';

// Views
import PhotographerList from './views/PhotographerList';
import AlbumList from './views/AlbumList';
import Album from './views/Album';

// Return our router, so that we can map paths to views
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <PhotographerList />
          </Route>

          <Route exact path="/:photographerID">
            <AlbumList />
          </Route>

          <Route exact path="/:photographerID/:albumID">
            <Album />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// Bind the <App /> (root) component to our DOM
if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
