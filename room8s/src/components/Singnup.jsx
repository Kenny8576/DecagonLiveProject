
import React from "react";
import Input from "./Input";
import { GoogleSignUp, RegisterSignup } from "./Button";

function Signup() {
  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white rounded-md">
        <form className="text-center">
          <div className="top-container mb-8">
            <h2 className="text-green-500 text-3xl font-bold">Room8s</h2>
            <h3 className="text-gray-900 text-xl font-semibold">Create an Account</h3>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-600">Name</label>
            <Input
              type="text"
              placeholder="Username"
              className="mb-4"
            />
            <label className="block mb-2 text-gray-600">Email Address</label>
            <Input
              type="email"
              placeholder="Enter your email address"
              className="mb-4"
            />
            <label className="block mb-2 text-gray-600">Password</label>
            <Input
              label="Password"
              type="password"
              placeholder="***********"
              className="mb-4"
            />
            <label className="block mb-2 text-gray-600">How did you hear about us?</label>
            <Input
              label="How did you hear about us?"
              type="text"
              placeholder="Instagram"
              className="mb-4"
            />
          </div>

          <div className="line-container mb-8">
            <div className="line w-1/3 bg-gray-300"></div>
            <p className="or mx-4 text-gray-500">OR</p>
            <div className="line w-1/3 bg-gray-300"></div>
          </div>

          <div className="btn-container flex flex-col space-y-4">
            <GoogleSignUp
              type="submit"
              text="Signin with Google"
              className="btn"
            />

            <RegisterSignup
              type="submit"
              text="Signup"
              className="btn bg-green-500 text-white"
            />
          </div>

          <div className="bottom-container">
            <p className="text-gray-500">Already have an account?</p>
            <p><h4 className="inline-block cursor-pointer text-blue-500">Login</h4></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
