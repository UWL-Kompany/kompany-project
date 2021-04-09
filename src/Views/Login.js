import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons"; // the icons used
import {
  toggleAccountLogin,
  changeDetails,
} from "../Redux/Actions/accountActions";
import { Link, useHistory } from "react-router-dom";

import logo_big from "../Assets/Images/logo-big.png";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const history = useHistory();
  const login = useSelector((state) => state.account.login);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("login status: " + login.toString());
  }, []);

  const forceNextScreen = () => {
    history.push("/");
  };

  const loginAttempt = () => {
    dispatch(toggleAccountLogin(true));
    let response = { data: {} }; // TODO change this to get server response
    response.data = {
      name: "Rhys",
      password: "test",
      token: "aaaaaaaaaaaaaaaaaaaa",
      userId: "123456",
    };
    localStorage.setItem("user", JSON.stringify(response.data));
    forceNextScreen();
  };

  return (
    <div class="flex flex-col h-screen w-full content-center items-center bg-primary">
      <img
        className="flex font-bold text-black text-4xl h-40 rounded-md"
        src={logo_big}
      />
      <div class="flex flex-col w-1/3 rounded-lg justify-evenly items-center mt-10 p-3 from-blue-900 to-blue-700 bg-gradient-to-br">
        <div className="flex font-bold text-white text-4xl mr-5 mb-4 text-right ">
          Login
        </div>
        <div class="flex flex-row items-center mb-5 w-3/4">
          <div class="flex fill-current text-black bg-green-200 justify-center items-center">
            <div class="flex fill-current text-black bg-white rounded-3xl p-3 absolute">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </div>
          </div>
          <input
            type="text"
            class="flex w-full bg-opacity-30 bg-white focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block pl-7 pr-12 sm:text-xl ring-black rounded-lg"
            placeholder={"Username/Email"} // this doesn't do anything, just for filler
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div class="flex flex-row items-center mb-1 w-3/4">
          <input
            type="password"
            class="flex w-full bg-opacity-30 bg-white focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block pl-7 pr-12 sm:text-xl ring-black rounded-lg"
            placeholder={"Password"} // this doesn't do anything, just for filler
            onChange={({ target }) => setPassword(target.value)}
          />
          <div class="flex fill-current text-black bg-green-200 justify-center items-center">
            <div class="flex fill-current text-black bg-white rounded-3xl p-3 absolute">
              <FontAwesomeIcon icon={faLock} size="lg" />
            </div>
          </div>
        </div>
        <p class="cursor-pointer text-white text-sm underline mb-1 ">
          Forgot Usename/Password
        </p>
        <div class="flex text-sm flex-row mb-5 ">
          <input type="checkbox" class="form-checkbox mr-2"></input>
          <p class="text-white">Remember Me</p>
        </div>
        <button
          class="cursor-pointer flex w-3/4 text-xl font-bold border-black border-2 bg-white rounded-xl mb-5"
          onClick={(e) => loginAttempt()}
        >
          <p class="w-full text-center">Login</p>
        </button>
        <Link
          to="/register"
          class="cursor-pointer flex w-3/4 text-xl font-bold border-black border-2 bg-white rounded-xl mb-5"
        >
          <p class="w-full text-center">Register</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
