import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/actions/users";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="App">
      <div>
        <h1 className="header">USERS</h1>
        <div className="list">
          {users.length > 0 &&
            users.map((user) => <p key={user.id}>{user.name}</p>)}
          {users.length === 0 ? <p>No users</p> : null}
          {users.length === 0 && loading === true ? <p>Loading...</p> : null}
          {error ? <p>{error}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
