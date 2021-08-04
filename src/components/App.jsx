import React from "react";
import Login from "./Login";

var isLoggedIn = true;

function renderCondition() {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else {
    return;
  }
}

function App() {
  return (
    <div className="container">
      {
        // Ternary Operator
        isLoggedIn === true ? <h1>Hello</h1> : <Login />
      }
    </div>
  );
}

export default App;
