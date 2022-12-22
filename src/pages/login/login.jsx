import React, { useRef } from "react";
import "./login.css";

const Login = () => {
  let username = useRef("");
  let password = useRef("");

  const handleSubmit = () => {
    console.log(username.current.value)
    console.log(password.current.value)
   }
  return (
    <div className="login">
      <div className="background-image">
        <form onSubmit= {handleSubmit}>
          <div>
            {/* First Name */}
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Username
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  // id="username"
                  type="text"
                  ref={username}
                  placeholder="Username"
                  required
                  //  required
                  onKeyPress={(event) => {
                    if (/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </div>

              {/* Last Name */}
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                 // id="password"
                  type="password"
                  placeholder="********"
                  required
                  //   required
                  ref={password}
                  onKeyPress={(event) => {
                    if (/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
              </div>
            </div>

            <button
              className="w-2/5 mx-2 mb-6 mt-3 h-10 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <br />
            <a href="newuser">
              <button
                className="w-2/5 mx-2 mb-2 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Register
              </button>
            </a>
            <a href="guest">
              <button
                className="w-2/5 mx-2 mb-2 h-10 ml-6 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login as guest
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

  /* const catchUsername = (e) => {
    username = username.current(e.target.value);
  };
  const catchPassword = (e) => {
    password = password.current(e.target.value);
  }; */