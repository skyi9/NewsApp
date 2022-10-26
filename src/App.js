import './App.css';

import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const pageSize = 5;


  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<News key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/general" element={<News key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science" />} />
        </Routes>
      </Router>
    </div>
  )

}

export default App;