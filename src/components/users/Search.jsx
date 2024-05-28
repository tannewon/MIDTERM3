// Search.js
import axios from "axios";
import React, { useState } from "react";
import Users from "./Users";
const Search = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const searchUsers = async (text) => {
    // .. Rest of the code
  };
  const clearUsers = () => {
    setUsers([]);
  };
  const onSubmit = (e) => {
    // ... rest of the code
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        {/*<!..> ... The rest of the form */}
      </form>
      {/*Adding Clear button */}
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};
export default Search;
