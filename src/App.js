import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import ONama from './components/ONama';
import Ishrana from './components/Ishrana';
import Trening from './components/Trening';
import Glavna from './components/Glavna';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Glavna />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/o-nama" element={<ONama />} />
          <Route exact path="/ishrana" element={<Ishrana />} />
          <Route exact path="/trening" element={<Trening />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
