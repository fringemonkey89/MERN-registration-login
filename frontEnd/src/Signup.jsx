import { useState }  from "react";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
             <div className ="bg-white p-3 rounded w-25">
                <h2>Register</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email">Name</label>
                        <input
                        type="text"
                        placeholder="enter name"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        placeholder="enter email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Password</label>
                        <input
                        type="password"
                        placeholder="enter password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-0"
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                   
                    <p>Already Have an Account?</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
                
            </div>
        </div>
    )


}

export default Signup