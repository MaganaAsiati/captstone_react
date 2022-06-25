import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/cases/case';
import Info from './components/country/country';
import Nav from './components/Nav/nav';

function App() {
  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Info/:countryId" element={<Info />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
