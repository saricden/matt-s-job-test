import React from 'react';
import ReactDOM from 'react-dom';

// Views
import Home from './views/Home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;

if (document.getElementById('app')) {
  ReactDOM.render(<App />, document.getElementById('app'));
}
