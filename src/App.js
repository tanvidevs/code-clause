import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Card from './card/Card';
import PaymentSuccess from './PaymentSuccess/PaymentSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
