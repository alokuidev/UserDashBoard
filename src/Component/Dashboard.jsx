import React from "react";
import { fakeUserData } from "../Api";
import { useDispatch, useSelector } from "react-redux";
import { addUser,removeUser } from "../Action/Store/UserSlice";
const Dashboard = () => {

  const disptach = useDispatch();
  const data = useSelector((state) =>{
      return state.users;
  });

  //
  
  const addNewUser = (payload) =>{
    //console.log(payload)
    disptach(addUser(payload))
  }

  const deleteUser = (index) =>{
    disptach(removeUser(index))
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
            {data.map((currElem,index) =>(
            <li key={index}>
              {currElem}
              <button className="delete-btn" onClick={() => deleteUser(index)}>&#x1F5D1;</button>
            </li>
            ))}
          </ul>

          {/* <!-- Clear All Button --> */}
          <button className="clear-all-btn">Clear All Users</button>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
