import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Login.css"; 

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function submitForm() {
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
    const userExist = existingUser.find(user => user.mobile === mobile);

    if (userExist) {
      alert('Mobile number already registered.');
      return;
    }

    const newUser = { name, mobile, password };
    localStorage.setItem('users', JSON.stringify([...existingUser, newUser]));

    alert('Registration successful, Please log in');
    navigate('/');
    setName('');
    setMobile('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center vl d-none d-sm-block">
          <FontAwesomeIcon icon={faUser} size="10x" color="black" className="mb-4" style={{ marginTop: "150px" }}/>
        </div>
        <div className="col-md-6 d-md-flex justify-content-center">
          <div>
            <div className="text-center mt-4">
              <h2>Register Here</h2>
            </div>

            <form className="align-items-center myform">
              <div className="form-outline">
                <label className="form-label mt-3" htmlFor="formName">Name</label>
                <input type="text" className="form-control" id="formName" onChange={(e) => setName(e.target.value)} value={name}/>
              </div>

              <div className="form-outline">
                <label className="form-label mt-3" htmlFor="formMobile">Mobile Number</label>
                <input type="number" className="form-control" id="formMobile" onChange={(e) => setMobile(e.target.value)} value={mobile}/>
              </div>

              <div className="form-outline">
                <label className="form-label mt-3" htmlFor="formPassword">Password</label>
                <input type="text" className="form-control" id="formPassword" onChange={(e) => setPassword(e.target.value)} value={password}/>
              </div>

              <div className="form-outline">
                <label className="form-label mt-3" htmlFor="formConfirmPassword">Confirm Password</label>
                <input type="text" className="form-control" id="formConfirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
              </div>

              <button type="button" id="btn" className="form-control btn-block mt-4" onClick={submitForm} style={{ backgroundColor: 'black', color: 'white' }}>Register</button>
            </form>

            <div className="text-center my-3">
              <p>
                Already have an account? <a href="/">Login here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
