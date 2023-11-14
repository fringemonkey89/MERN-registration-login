import { useState }  from "react";

function Signup() {
    return (
        <div>
             <div>
                <h2>Register</h2>
                <form>
                    <div>
                        <label htmlFor="email">Name</label>
                        <input
                        type="text"
                        placeholder="enter name"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        placeholder="enter email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        />
                    </div>
                    <div>
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
                        <Register></Register>
                    </button>
                </form>
            </div>
        </div>
    )


}
