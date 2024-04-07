import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import { SignupInput } from "@sahilxdev/medium-common";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: ""
  });
  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <div>

      {
        postInputs.password
      }
      </div>


      <div className="text-3xl font-extrabold">Create an account</div>
      <div className="text-lg font-light text-slate-400">
        Already have an account?
        <Link className="pl-2 underline hover:text-blue-500" to={"/signin"}>
          Login
        </Link>

        <LabelledInput label="Name" placeholder="Enter your name..." onchangefunc={(e) => {
          setPostInputs({...postInputs,
          name: e.target.value
        })
        }} />
        <LabelledInput label="Username " placeholder="Enter your username..." onchangefunc={(e) => {
          setPostInputs({...postInputs,
          username: e.target.value
        })
        }} />
        <LabelledInput label="Password" type="password" placeholder="Enter your password..." onchangefunc={(e) => {
          setPostInputs({...postInputs,
          password: e.target.value
        })
        }} />
        
      </div>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">{type === "signup" ? "Sign Up" : "Sign In"}</button>
    </div>
  );
};

interface LabelledInputType {
    label: string;
    placeholder:string;
    onchangefunc: (e: ChangeEvent<HTMLInputElement>)=> void;
    type?: string;
}

function LabelledInput({ label, placeholder, onchangefunc, type}: LabelledInputType) {
  return <div>
  <label className="block mb-2 text-sm text-gray-900 font-bold pt-2">{label}</label>
  <input onChange={onchangefunc} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 " placeholder={placeholder} required />
</div>
}

export default Auth;
