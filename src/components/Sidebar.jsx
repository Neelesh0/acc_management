import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser'); 
    alert('Logged out');
    navigate('/'); 
  };
  return (
    <div className="sidebar">
      <h2>Account Manager</h2>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button" 
            style={{ background: 'none', border: 'none', color: 'red', padding: '0'}}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
