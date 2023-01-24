"use client";
import React from "react";

function LogoutButton() {
  return (
    <button
      onClick={() => {
        console.log("Hello");
      }}
      className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded font-bold"
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
