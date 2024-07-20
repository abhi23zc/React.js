import React, { useContext, useEffect } from "react";
import UserContext from "./context/UserContext";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const { user, setuser } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
  }, [user]);

  

  return (
    <>
    <Login/>
    <Profile/>
    </>
  );
}

export default App;
