import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav/nav';

function App() {
  return (
    <Router>
      <Nav />
    </Router>
  );
}

export default App;
