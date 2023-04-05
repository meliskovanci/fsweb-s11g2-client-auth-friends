import React from "react";
import { useHistory } from "react-router-dom";
function Logout() {
  const history = useHistory();
  
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <>
      <button onClick={() => handleLogout()}>Logout</button>
    </>
  );
}
export default Logout;