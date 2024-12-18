import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Sidebar from './components/Sidebar.jsx';
import Profile from './components/Profile.jsx';
import Register from './components/Register.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={
          <div style={{ display: 'flex' }}>
            <Sidebar /> 
            <div style={{ marginLeft: '250px', padding: '20px', width: '100%' }}>
              <Profile />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
