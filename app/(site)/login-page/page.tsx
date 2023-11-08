"use client";
import React, { useState } from "react";
import {ClerkProvider} from "@clerk/nextjs";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onButtonClick = () => {};

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <div className={"flex flex-col items-center justify-center h-screen"}>
      <div
        className={
          "flex flex-col text-4xl font-bold items-center justify-center"
        }
      >
        <div>Login</div>
      </div>
      <br />
      <div className={"flex flex-col items-start justify-center"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"h-12 w-96 text-lg rounded-md border border-gray-300 pl-2"}
        />
        <label className="text-red-500 text-sm">{emailError}</label>
      </div>
      <br />
      <div className={"flex flex-col items-start justify-center"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"h-12 w-96 text-lg rounded-md border border-gray-300 pl-2"}
        />
        <label className="text-red-500 text-sm">{passwordError}</label>
      </div>
      <br />
      <div className={"flex flex-col items-start justify-center"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log in"}
        />
      </div>
    </div>
    </ClerkProvider>
  );
};

export default Login;
