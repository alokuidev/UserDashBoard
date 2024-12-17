const Dashboard = () =>{
    return(
        <>
            {/* <!-- Header Section --> */}
  <header>
    <h1>ADMIN TABLE</h1>
    <p>One Destination for Complete Web Development</p>
  </header>

  {/* <!-- Navigation --> */}
  <nav>
    <ul>
      <li><a href="#">HOME</a></li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">PROJECTS</a></li>
      <li><a href="#">CODE</a></li>
      <li><a href="#">CONTACT</a></li>
    </ul>
  </nav>

  {/* <!-- Main Content --> */}
  <main>
    <div className="user-table">
      <h2>List of User Details</h2>
      <button className="add-user-btn">Add new users</button>
      
      {/* <!-- User List --> */}
      <ul className="user-list">
        <li>Willie Patterson, U.S. Virgin Islands <button className="delete-btn">🗑</button></li>
        <li>Rose Bell, Sri Lanka <button className="delete-btn">🗑</button></li>
        <li>Nina Chambers, Macau SAR China <button className="delete-btn">🗑</button></li>
        <li>Dorothy Fleming, Central African Republic <button className="delete-btn">🗑</button></li>
      </ul>

      {/* <!-- Clear All Button --> */}
      <button className="clear-all-btn">Clear All Users</button>
    </div>
  </main>
        </>
    )
}

export default Dashboard;