import React, { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { SignupInput } from "@sahilxdev/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: ""
  });

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postInputs);
      // const jwt = response.data;
      // localStorage.setItem("token", jwt);
      const jwtValue = response.data.jwt;
      localStorage.setItem("token", jwtValue);
      navigate('/blogs');
    } catch(e) {
      const errorMessage = type === "signin" ? "Signing In" : "Signing Up";
      alert(`Error While ${errorMessage}`);
    }

  }

  return (
    <div className="h-screen flex justify-center flex-col items-center">
      <div className="text-3xl font-extrabold">Create an account</div>
      <div className="mb-7 text-lg font-light text-slate-400">
        {type === "signup" ? "Already have an account?" : "Don't have an account?"}
        <Link className="pl-2 underline hover:text-blue-500" to={type === "signup" ? "/signin" : "/signup"}>
        {type === "signup" ? "Sign in" : "Sign up"}
        </Link>
        </div>

        {type === "signup" ? <LabelledInput label="Name" placeholder="Enter your name..." onchangefunc={(e) => {
          setPostInputs({...postInputs,
          name: e.target.value
        })
        }} /> : null}
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
        
      <button onClick={sendRequest} type="button" className="w-96 mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 ">{type === "signup" ? "Sign Up" : "Sign In"}</button>
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
