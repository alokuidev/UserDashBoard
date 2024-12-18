import React from "react";
import { fakeUserData } from "../Api";
import { useDispatch } from "react-redux";
import { addUser } from "../Action/Store/UserSlice";
const Dashboard = () => {

  const disptach = useDispatch();

  const addNewUser = (payload) =>{
    console.log(payload)
    disptach(addUser(payload))
  }
  return (
    <>
      {/* <!-- Main Content --> */}
      <main>
        <div className="user-table">
          <h2>List of User Details</h2>
          <button className="add-user-btn" onClick={() => addNewUser(fakeUserData())}>Add New User</button>

          {/* <!-- User List --> */}
          <ul className="user-list">
            <li>
              Willie Patterson, U.S. Virgin Islands{" "}
              <button className="delete-btn">&#x1F5D1;</button>
            </li>
            <li>
              Rose Bell, Sri Lanka{" "}
              <button className="delete-btn">&#x1F5D1;</button>
            </li>
            <li>
              Nina Chambers, Macau SAR China{" "}
              <button className="delete-btn">&#x1F5D1;</button>
            </li>
            <li>
              Dorothy Fleming, Central African Republic{" "}
              <button className="delete-btn">&#x1F5D1;</button>
            </li>
          </ul>

          {/* <!-- Clear All Button --> */}
          <button className="clear-all-btn">Clear All Users</button>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
