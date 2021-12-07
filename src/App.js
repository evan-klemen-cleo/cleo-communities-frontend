import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './app.scss';

import RouteManager from './pages/RouteManager';

function App() {
  return (
    <Router>
      <div className="App">
        <RouteManager />
      </div>
    </Router>
  );
}

export default App;
