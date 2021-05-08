import React, { useEffect, useState, useCallback } from "react";
// import logo from "../Images/UWL-Logo.png";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const AdminUsers = (props) => {
  // the main Users page, displays some about infomation along with a logo for UWL
  // also includes links to other pages
  // uses Tailwind CSS for styling
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = useCallback(() => {
    // Send GET request to 'courses/all'
    axios
      .get("http://localhost:4001/user/all")
      .then((response) => {
        // set product state
        console.log(response.data);
        let tempUsers = response.data.filter((user) => user.is_admin === 0);
        console.log(tempUsers);
        setUsers(tempUsers);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the product list: ${error}`
        )
      );
  }, []);

  const userDelete = useCallback(({ id }) => {
    // Send PUT request to 'user/user_delete'
    axios
      .put("http://localhost:4001/user/user_delete", { id: id })
      .then(() => {
        // set product state
        let tempUsers = users.filter((user) => user.id !== id);
        setUsers(tempUsers);
      })
      .catch((error) =>
        console.error(
          `There was an error retrieving the product list: ${error}`
        )
      );
  }, []);

  function Users() {
    // component to display mapped requirements
    if (users.length < 1) {
      return null;
    }
    const listItems = users.map((item) => (
      <tr class="border-t-2 border-black">
        <td class="flex justify-center mt-1 mb-1">
          <div
            class="w-1/3 cursor-pointer bg-primary p-1 rounded-xl"
            onClick={() => {
              userDelete(item.id);
            }}
          >
            Remove
          </div>
        </td>
        <td>{item.id}</td>
        <td class="">
          <a>{item.first_name}</a>
        </td>
        <td class="">
          <a>{item.last_name}</a>
        </td>
        <td class="">{item.email}</td>
      </tr>
    ));

    return (
      <table class={"table-auto"}>
        <thead>
          <tr class="">
            <th class="w-1/6">Remove?</th>
            <th class="w-1/6">ID</th>
            <th class="w-1/6">First Name</th>
            <th class="w-1/6">Last Name</th>
            <th class="w-1/6">Email</th>
          </tr>
        </thead>
        <tbody class="">{listItems}</tbody>
      </table>
    ); // return all list items in a unordered list
  }

  return (
    <div class="flex flex-col h-full w-full content-center items-center pb-60">
      <div className="flex font-bold text-black text-4xl mb-4 text-right ">
        User Accounts
      </div>
      <Users />
    </div>
  );
};

export default AdminUsers;
