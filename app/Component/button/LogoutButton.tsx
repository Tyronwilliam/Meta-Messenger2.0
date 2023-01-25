"use client";
import { signOut } from "next-auth/react";
import React from "react";

function LogoutButton() {
  return (
    <button
      onClick={() => {
        signOut();
      }}
      className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded font-bold"
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
