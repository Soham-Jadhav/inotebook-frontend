import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const host = "http://localhost:5000";
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.authToken);
            navigate("/");
            props.showAlert("Account created successfully!", "success");
            // redirect
        } else {
            props.showAlert("Please enter valid credentials!", "danger");
            // alert("Please enter appropriate credentials!");
            // alert(json.errors[0].msg);
        }
    };


    return (
        <div className='container my-3'>
            <div className="container mb-4">
                <h2>Create an account</h2>
            </div>
            <div className="container">
                <form onSubmit={handelSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' minLength={3} value={credentials.name} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" value={credentials.email} onChange={onChange} required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' id="password" minLength={5} value={credentials.password} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Confirm password</label>
                        <input type="password" className="form-control" name='cpassword' id="cpassword" minLength={5} value={credentials.cpassword} onChange={onChange} required />
                    </div>
                    <div className='container my-2' style={{ color: "red" }}>
                        {credentials.password !== credentials.cpassword && "Password and confirm password must be the same"}
                    </div>
                    {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                    <button disabled={credentials.password !== credentials.cpassword} type="submit" className="btn btn-primary">Submit</button>
                    {/* <button disabled={credentials.name < 3 || credentials.password < 5 || (credentials.password !== credentials.cpassword)} type="submit" className="btn btn-primary">Submit</button> */}
                </form>
            </div>
        </div>
    )
}

export default Signup
