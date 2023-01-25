"use client";
import React from "react";
import { getProviders, signIn } from "next-auth/react";

type Props = {
  provider: Awaited<ReturnType<typeof getProviders>>;
};
function SignInComponent({ provider }: Props) {
  return (
    <div className="flex justify-center">
      {Object.values(provider!).map((provide) => {
        return (
          <div key={provide.name}>
            <button
              className="text-white bg-blue-500  hover:bg-blue-700 py-2 px-4 rounded font-bold"
              onClick={() => {
                console.log("hey");
                signIn(provide.id, {
                  callbackUrl:
                    process.env.VERCEL_URL || "http://localhost:3000/",
                });
              }}
            >
              Sign in with {provide.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default SignInComponent;
