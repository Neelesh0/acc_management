import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const [userData, setUserData] = useState({ name: '', mobile: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (location.state) {
      setUserData(location.state); 
    }
  }, [location.state]);

  const handleEditClick = () => {
    setIsEditing(!isEditing); 
  };

  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value }); 
  };

  const handleSaveClick = () => {
    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUser = existingUser.map(user => user.mobile === userData.mobile ? userData : user);

    localStorage.setItem('users', JSON.stringify(updatedUser));
    alert('Name updated successfully');
    setIsEditing(false); 
  };


  return (
    <div className="container">
      <h2 className="my-4">Profile</h2>
      <div className="card shadow p-4">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            {isEditing ? (
            <input type="text" id="name" className="form-control" onChange={handleNameChange}/>
            ) : (
            <input type="text" id="name" className="form-control" value={userData.name} readOnly/>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile
            </label>
            <input type="mobile" id="mobile" className="form-control" value={userData.mobile} />
          </div>
          <button className="btn btn-primary mt-3" onClick={isEditing ? handleSaveClick : handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
