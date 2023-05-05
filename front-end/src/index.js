import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'
import Leaderboard from './routes/Leaderboard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Leaderboard" element={<Leaderboard />} />
    </Routes>
  </Router>
);