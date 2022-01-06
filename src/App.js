import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsers] = useState([]);
  const addUserHandler = (prevUser) => {
    const NewUser = { ...prevUser, id: Math.trunc(Math.random() * 100) };
    setUsers([...usersList, NewUser]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
