import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import logo from "../Images/UWL-Logo.png";
import { Link, useHistory } from "react-router-dom";
import {
  toggleAccountLogin,
  changeDetails,
} from "../Redux/Actions/accountActions";
import logo_big from "../Assets/Images/logo-big.png";
import axios from "axios";

const Register = (props) => {
  // the main Products page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const history = useHistory();
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    init: false,
    first_name: { value: "", validate: false, message: "" },
    last_name: { value: "", validate: false, message: "" },
    email: { value: "", validate: false, message: "" },
    password: { value: "", validate: false, message: "" },
    id: { value: "", validate: false, message: "" },
    location: {
      address1: { value: "", validate: false, message: "" },
      address2: { value: "", validate: false, message: "" },
      address3: { value: "", validate: false, message: "" },
    },
    is_admin: false,
  });

  useEffect(() => {}, []);

  const validation = () => {
    // validate username and password
    let tempDetails = { ...details };
    if (tempDetails.first_name.value === "") {
      tempDetails.first_name.validate = true;
      tempDetails.first_name.message = "First name is blank";
      tempDetails.init = true;
    } else {
      tempDetails.first_name.validate = false;
    }
    if (tempDetails.last_name.value === "") {
      tempDetails.last_name.validate = true;
      tempDetails.last_name.message = "Last name is blank";
      tempDetails.init = true;
    } else {
      tempDetails.last_name.validate = false;
    }
    if (tempDetails.email.value === "") {
      tempDetails.email.validate = true;
      tempDetails.email.message = "Email is blank";
      tempDetails.init = true;
    } else {
      tempDetails.email.validate = false;
    }
    if (tempDetails.password.value === "") {
      tempDetails.password.validate = true;
      tempDetails.password.message = "Password is blank";
      tempDetails.init = true;
    } else if (tempDetails.password.value.length < 8) {
      tempDetails.password.validate = true;
      tempDetails.password.message = "Password is too short";
      tempDetails.init = true;
    } else {
      tempDetails.password.validate = false;
    }
    if (tempDetails.location.address1.value === "") {
      tempDetails.location.address1.validate = true;
      tempDetails.location.address1.message = "Address 1 is blank";
      tempDetails.init = true;
    } else {
      tempDetails.location.address1.validate = false;
    }
    if (tempDetails.location.address2.value === "") {
      tempDetails.location.address2.validate = true;
      tempDetails.location.address2.message = "Address 2 is blank";
      tempDetails.init = true;
    } else {
      tempDetails.location.address2.validate = false;
    }
    setDetails(tempDetails);
    if (tempDetails.init === false) {
      registerUser();
    }
  };

  const forceNextScreen = () => {
    history.push("/");
  };

  const registerUser = async () => {
    let user = {
      id: 1231456789,
      token: "askl;dfjaskl;",
      first_name: details.first_name.value,
      last_name: details.last_name.value,
      email: details.email.value,
      password: details.password.value,
      address1: details.location.address1.value,
      address2: details.location.address2.value,
      address3: details.location.address3.value,
      is_admin: false,
    };
    console.log(JSON.stringify(user));

    axios
      .post("http://localhost:4001/user/create", {
        // POST to insert new student into database
        data: user, // send data to insert
      })
      .then((res) => {
        // success
        console.log(res.data.message);
        dispatch(toggleAccountLogin(true));
        forceNextScreen();
        //setSubmitted({ status: true, loading: false, error: false }); // set the state of submitted data
      })
      .catch((error) => {
        // there was a problem
        console.log("ERROR");
        console.error(error.data.message);
        //setSubmitted({ status: false, loading: false, error: true }); // set the state of submitted data
      });
  };

  return (
    <div class="flex flex-col h-auto pb-56 w-full content-center items-center bg-primary">
      <img
        className="flex font-bold text-black text-4xl h-40 rounded-md"
        src={logo_big}
      />
      <div class="flex flex-col w-1/2 rounded-lg justify-evenly items-center mt-10 p-3 from-blue-900 to-blue-700 bg-gradient-to-br">
        <div className="flex font-bold text-white text-4xl mb-4 text-right ">
          Register
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 mb-5">
          <div>
            <input
              type="text"
              class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
              placeholder={"First Name"} // this doesn't do anything, just for filler
              onChange={({ target }) =>
                setDetails({
                  ...details,
                  first_name: { ...details.first_name, value: target.value },
                })
              }
            />
            {details.init && details.first_name.validate && (
              <a class="flex text-red-700 font-bold text-sm">
                {details.first_name.message}
              </a>
            )}
          </div>
          <div>
            <input
              type="text"
              class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
              placeholder={"Last Name"} // this doesn't do anything, just for filler
              onChange={({ target }) =>
                setDetails({
                  ...details,
                  last_name: { ...details.last_name, value: target.value },
                })
              }
            />
            {details.init && details.last_name.validate && (
              <a class="flex text-red-700 font-bold text-sm">
                {details.last_name.message}
              </a>
            )}
          </div>
          <div>
            <input
              type="text"
              class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
              placeholder={"Email"} // this doesn't do anything, just for filler
              onChange={({ target }) =>
                setDetails({
                  ...details,
                  email: { ...details.email, value: target.value },
                })
              }
            />
            {details.init && details.email.validate && (
              <a class="flex text-red-700 font-bold text-sm">
                {details.email.message}
              </a>
            )}
          </div>
          <div>
            <input
              type="text"
              class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
              placeholder={"Password"} // this doesn't do anything, just for filler
              onChange={({ target }) =>
                setDetails({
                  ...details,
                  password: { ...details.password, value: target.value },
                })
              }
            />
            {details.init && details.password.validate && (
              <a class="flex text-red-700 font-bold text-sm">
                {details.password.message}
              </a>
            )}
          </div>
          <div>
            <input
              type="text"
              class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
              placeholder={"Address 1"} // this doesn't do anything, just for filler
              onChange={({ target }) =>
                setDetails({
                  ...details,
                  location: {
                    ...details.location,
                    address1: {
                      ...details.location.address1,
                      value: target.value,
                    },
                  },
                })
              }
            />
            {details.init && details.location.address1.validate && (
              <a class="flex text-red-700 font-bold text-sm">
                {details.location.address1.message}
              </a>
            )}
          </div>
          <div>
            <input
              type="text"
              class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
              placeholder={"Address 2"} // this doesn't do anything, just for filler
              onChange={({ target }) =>
                setDetails({
                  ...details,
                  location: {
                    ...details.location,
                    address2: {
                      ...details.location.address2,
                      value: target.value,
                    },
                  },
                })
              }
            />
            {details.init && details.location.address2.validate && (
              <a class="flex text-red-700 font-bold text-sm">
                {details.location.address2.message}
              </a>
            )}
          </div>
          <div>
            <input
              type="text"
              class="focus:ring-indigo-500 focus:ring-2 ring-2 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-xl ring-black rounded-sm"
              placeholder={"Address 3"} // this doesn't do anything, just for filler
              onChange={({ target }) =>
                setDetails({
                  ...details,
                  location: {
                    ...details.location,
                    address1: {
                      ...details.location.address3,
                      value: target.value,
                    },
                  },
                })
              }
            />
          </div>
        </div>
        <div class="flex self-start text-sm flex-row">
          <input type="checkbox" class="form-checkbox mr-2"></input>
          <p>I agree to share my data with Kompany</p>
        </div>
        <div class="flex self-start text-sm flex-row">
          <input type="checkbox" class="form-checkbox mr-2"></input>
          <p>
            I would like to recieve emails about advertisements and new stock
          </p>
        </div>
        <div class="flex self-start text-sm flex-row">
          <input type="checkbox" class="form-checkbox mr-2"></input>
          <p>I agree to the terms and conditions</p>
        </div>
        <p class="cursor-pointer self-start text-indigo-700 text-sm underline">
          Already Registerd? Log In
        </p>

        <button
          class="cursor-pointer flex w-3/4 text-xl font-bold border-black border-2 bg-white rounded-xl mb-5"
          onClick={(e) => validation()}
        >
          <p class="w-full text-center">Register</p>
        </button>
      </div>
    </div>
  );
};

export default Register;
