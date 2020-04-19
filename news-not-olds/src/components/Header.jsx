import React from "react";

export default function Header({ username }) {
  return (
    <header className="app-header">
      <h1>News not Olds</h1>
      <p>Logged in as : {username}</p>
    </header>
  );
}
