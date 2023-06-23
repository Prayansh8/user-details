import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => setUsers(data.data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="appSerch">
        <h1 className="userListText">User List</h1>
        <div className="searchBar">
          <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        </div>
      </div>
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
