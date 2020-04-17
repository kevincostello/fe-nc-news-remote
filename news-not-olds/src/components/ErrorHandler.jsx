import React from "react";

export default function ErrorHandler({ status, msg }) {
  return (
    <main>
      <h2>Status: {status}</h2>
      <p>{msg}</p>
    </main>
  );
}
