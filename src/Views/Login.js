import React, { useEffect, useState, useCallback } from "react";
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
import axios from "axios";
const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [status, setStatus] = useState({ message: "" });
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const history = useHistory();
  const login = useSelector((state) => state.account.login);
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("login status: " + login.toString());
  }, []);

  const forceNextScreen = (view) => {
    history.push("/" + view);
  };

  const validation = () => {
    // validate username and password
    if (username === "") {
      setStatus({ message: "Username is blank" });
      return false;
    }
    if (password === "") {
      setStatus({ message: "Password is blank" });
      return false;
    }
    if (password.length < 8) {
      setStatus({ message: "Password is too short" });
      return false;
    }
    return true;
  };

  const genUserData = async () => {
    let users = [];
    for (let i = 0; i < 5; i++) {
      // Send GET request to 'product/all'
      await axios
        .get("https://randomuser.me/api/", {
          headers: { "Access-Control-Allow-Origin": "*" },
          responseType: "json",
        })
        .then((response) => {
          // set product state
          let data = response.data.results[0];

          let user = {
            first_name: data.name.first,
            last_name: data.name.last,
            password: data.login.password,
            token: "sdlfjkksdlfasdkf",
            userId: data.id.value,
            email: data.email,
            address1:
              data.location.street.number + " " + data.location.street.name,
            address2: data.location.city,
            address3: data.location.postcode,
            is_admin: false,
          };
          users.push(user);
          setUser(user);
        })
        .catch((error) =>
          console.error(
            `There was an error retrieving the product list: ${error}`
          )
        );
    }
  };

  const simulateLogin = (userN, passW) => {
    let response = { data: {} };
    if (userN === "Rhys" && passW === "Password") {
      response.status = {
        success: true,
        message: "Successfully logged in",
        code: 200,
      };
      response.data = {
        first_name: "Rhys",
        last_name: "St Romaine",
        password: "Password",
        token: "sdlfjkksdlfasdkf",
        userId: "21412818",
        email: "rhys@test.com",
        address1: "742 Evergreen Terrace",
        address2: "Springfield",
        address3: "192005",
        is_admin: false,
      };
    } else {
      response.status = {
        success: false,
        message: "Login unsuccessful, username/password didn't match",
        code: 200,
      };
    }

    return response;
  };

  const sendLoginAttempt = useCallback(() => {
    // Send GET request to 'user/login' endpoint, attempt login
    axios
      .get("http://localhost:4001/user/login", {
        params: { email: username, password: password },
      }) // path and parameters
      .then((res) => {
        if (res.data.status.success === true) {
          dispatch(toggleAccountLogin(true));
          dispatch(changeDetails(res.data.data));
          localStorage.setItem("user", JSON.stringify(res.data.data));
          console.log(res.data.data);
          if (res.data.data.is_admin) {
            forceNextScreen("admin");
          } else {
            forceNextScreen("");
          }
        } else {
          setStatus({ message: res.data.status.message });
        }
      })
      .catch((error) => {
        console.error(error.data.message); // on error display message
      });
  }, [username, password]);

  const loginAttempt = async () => {
    let temp = validation();
    if (!temp) {
      return null;
    }
    //let response = simulateLogin(); // TODO change this to get server response
    sendLoginAttempt();
  };

  return (
    <div class="flex flex-col h-screen w-full content-center items-center bg-primary">
      <img
        className="flex font-bold text-black text-4xl h-40 rounded-md"
        src={logo_big}
      />
      {/* <button onClick={() => genUserData()}>Gen Data</button> */}
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
            defaultValue={password}
          />
          <div class="flex fill-current text-black bg-green-200 justify-center items-center">
            <div class="flex fill-current text-black bg-white rounded-3xl p-3 absolute">
              <FontAwesomeIcon icon={faLock} size="lg" />
            </div>
          </div>
        </div>
        <div class="flex w-full justify-center">
          <a class="text-red-500 font-bold">{status.message}</a>
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
