
import React, { useState } from "react";
import { toast } from "react-toastify";
import { registerApi } from "../apis/Api";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate(); // Create the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password);
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    // Call the register API
    registerApi(data).then((res) =>{
            if(res.data.success == true){
                toast.success(res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message)
            }
        }).catch((err) =>{
            console.log(err)
            toast.error('Internal Server Error!')
        })
          };
  return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f3f2f4' }}>
          <div style={{ width: '400px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', margin: '0 0 20px' }}>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="firstName" style={{ display: 'block', marginBottom: '5px' }}>First Name</label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={changeFirstName}
                  style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="lastName" style={{ display: 'block', marginBottom: '5px' }}>Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={changeLastName}
                  style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={changeEmail}
                  style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                  required
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={changePassword}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                  required
                />
              </div>
              <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#6c5ce7', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                SIGN UP
              </button>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <a href="/login" style={{ color: '#6c5ce7', textDecoration: 'none' }}>Already have an account? Log In</a>
              </div>
            </form>
          </div>
        </div>
      );
  
};

export default Register;
