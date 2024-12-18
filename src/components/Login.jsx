import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser  } from "@fortawesome/free-solid-svg-icons";
import "./Login.css"

function Login() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function submitForm() {
    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUser.find(user => user.mobile === mobile && user.password === password);

    if (user) {
      alert('Logged in');
      navigate('/profile', { state: user });
    } else {
      alert('Invalid mobile number or password');
    }
  }

  return (
    <>
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 text-center vl d-none d-sm-block">
            <FontAwesomeIcon icon={faUser } size="10x" color="black" className="mb-4" style={{ marginTop: "150px" }}/>
          </div>
          <div className="col-md-6 d-md-flex justify-content-center">
            <div>
              <div className='text-center mt-4'>
                <h2>{('Account Login')}</h2>
              </div>

              <form className='align-items-center myform'>
                <div className="form-outline">
                  <label className="form-label mt-3" htmlFor="form2Example11">{('Mobile Number')}</label>
                  <input type="number" className="form-control" onChange={e => setMobile(e.target.value)} />
                </div>

                <div className="form-outline">
                  <label className="form-label mt-3" htmlFor="form2Example22">{('Password')}</label>
                  <div className="input-group">
                    <input type="text" className="form-control" onChange={e => setPassword(e.target.value)} />
                  </div>
                </div>
                
                <button type="button" id='btn' className="form-control btn-block mt-4" onClick={submitForm} style={{ backgroundColor: 'black', color: 'white' }}>{('Login')}</button>
              </form>
              <div className="text-center my-3">
                <p>
                  Don't have an account? <a href="/register">Register here</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Login;
