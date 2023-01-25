import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "../button/LogoutButton";
import { unstable_getServerSession } from "next-auth";

async function Header() {
  const session = await unstable_getServerSession();

  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2 items-center">
          <Image
            src={session?.user?.image!}
            alt="Profile Picture"
            height={10}
            width={50}
            className="rounded-full mx-2 object-contain"
          />
          <div>
            <p className="text-blue-400">Logged in as: </p>
            <p className=" font-bold text-xl">{session?.user?.name}</p>
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
          href="/auth/signIn"
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
