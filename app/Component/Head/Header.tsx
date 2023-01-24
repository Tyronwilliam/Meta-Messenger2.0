import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "../button/LogoutButton";

function Header() {
  const session = false;

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2 items-center">
          <Image
            src="/homme.png"
            alt="Profile Picture"
            height={10}
            width={50}
            className="rounded-full mx-2 object-contain"
          />
          <div>
            <p className="text-blue-400">Logged in as: </p>
            <p className=" font-bold text-xl">Tyron Chanu</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image src="/meta.png" alt="Logo" height={10} width={50} />
          <p className="text-blue-400">Welcome to Meta Messenger </p>
        </div>
        <Link
          href="/auth/signin"
          className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded font-bold"
        >
          Sign In
        </Link>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
