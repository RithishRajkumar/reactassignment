import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddEvent from './pages/AddEvent';
import ViewEvents from './pages/ViewEvents';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-event" element={<AddEvent />} />
            <Route path="/view-events" element={<ViewEvents />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
