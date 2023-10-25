import './Sign_Up.css'
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState('');

    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        // API Call
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            // phone and email
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect to home page
            navigate("/");   //on directing to home page you need to give logic to change login and signup buttons with name of the user and logout button where you have implemented Navbar functionality
            window.location.reload();
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg);
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    return(
      <div className="SignUpPane" style={{marginTop:'5%'}}>
      <div className="SignUpText">Sign Up</div>
      <div className="AlreadyAMemberLogin"><span className="alreadyamember">Already a member? <a href="/Login">Login</a></span></div>
      <form method="POST" onSubmit={register}>
      <div className="form_area">
        <label className="label" for="role">Role</label>
      <select id="role" required name="role" type="role" className="select-control">
        <option value="" disabled selected>Please Choose...</option>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
      </div>
      <div className="form_area">
        <label className="label" for="name">Name</label>
        <input autocomplete="off" type="name" name="name" id="name" required className="form-control" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} aria-describedby="helpId"/>
      </div>   
      <div className="form_area">
        <label className="label" for="phone">Phone (10 digits)</label>
        <input type="tel" required pattern="[0-9]{10}" name="phone" id="phone" className="form-control" autocomplete="off"  placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)} aria-describedby="helpId"/>
        </div>
      </div>
      <div className="form_area">
        <label className="label" for="email">Email (name@example.com)</label>
        <input type="email" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}" name="email" id="email" className="form-control" autocomplete="off"  placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="helpId"/>
        {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
      </div>
      <div className="form_area">
        <label className="label" for="password">Password</label>
        <div className="password_input">
        <input autocomplete="none" type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} aria-describedby="helpId"/>
        <i className="far fa-eye" id="togglePassword"></i>
        </div>
      </div>  
      <div className="button_area">
        <button type="reset" className="reset_btn">Reset</button>
        <button type="submit" className="submit_btn">Submit</button>
      </div>
    </form>
  </div>
    );
}

export default Sign_Up;