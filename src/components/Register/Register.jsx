import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Register!</h1>
        <form>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* Password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Already Have an account? Please{" "}
            <Link
              className=" text-blue-400 hover:text-blue-900 underline"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
