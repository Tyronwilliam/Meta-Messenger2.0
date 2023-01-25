import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";
async function SignInPage() {
  const providers = await getProviders();
  return (
    <div className="grid justify-center">
      <div>
        <Image
          src="/meta.png"
          alt="Logo"
          width={250}
          height={250}
          className="rounded mx-auto object-cover"
        />
      </div>
      <SignInComponent provider={providers} />
    </div>
  );
}

export default SignInPage;
