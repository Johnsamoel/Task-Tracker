import { useState } from "react";

import { useRouter } from "next/router";

import axios from "axios";
import { registerState } from "@/models/registerModel";
import { registerSchema } from "@/utils/validationRegisterForm";

const RegisterForm = () => {
  const initialState: registerState = {
    name: "",
    age: "",
    email: "",
    password: "",
    role: "",
  };
  const errorObj = {
    name: "",
    errorMessage: "",
  };
  const [state, setRegiterState] = useState<registerState>(initialState);
  const [error, setError] = useState(errorObj);
  const router = useRouter();
  const handleRegistorFormChange = (name: string, value: string) => {
    setRegiterState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleErrorObj = (name: string, errorMessage: string) => {
    setError((prevState) => ({
      ...prevState,
      name: name,
      errorMessage: errorMessage,
    }));
  };
  const submitRegisterForm = () => {
    const validationResult = registerSchema.validate(state);
    console.log(validationResult, "res");
    if (!validationResult.error) {
      handleErrorObj("","")
      axios
        .post("http://localhost:3001/auth/register", {
          name: state.name,
          role: state.role,
          password: state.password,
          email: state.email,
          age: parseInt(state.age),
        })
        .then(function (response) {
          // handle success
          if (response.status === 201) {
            router.push("/Login");
          }
          console.log(response, "response");
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    } else {
      const key = validationResult.error.details[0].path[0] as string;
      const errorMessage = validationResult.error.message;
      handleErrorObj(key, errorMessage);
    }
  };
  console.log(state, "state");
  return (
    <div className="container mx-auto px-4  h-full">
      <form className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className=" lg:w-4/12 w-7/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Create Your Account Now
                  </h6>
                </div>
                <div className="text-center flex flex-col justify-center items-center"></div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                {/* name and age */}
                <div className="flex justify-between items-center md:flex-nowrap sm:flex-wrap gap-2">
                  <div className="relative md:w-40 sm:w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      name="name"
                      required={true}
                      onChange={(e) => {
                        handleRegistorFormChange(e.target.name, e.target.value);
                      }}
                      value={state.name}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Enter Your Name"
                      style={{ transition: "all .15s ease" }}
                    />
                    {error.name === "name" && (
                      <span>
                        <small>{error.errorMessage}</small>
                      </span>
                    )}
                  </div>

                  <div className="relative md:w-2/5 xs:w-full sm:w-full mb-3  ">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      age
                    </label>
                    <input
                      onChange={(e) => {
                        handleRegistorFormChange(e.target.name, e.target.value);
                      }}
                      name="age"
                      value={state.age}
                      type="number"
                      required={true}
                      className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Enter Your age"
                      style={{ transition: "all .15s ease" }}
                    />
                    {error.name === "age" && (
                      <span>
                        <small>{error.errorMessage}</small>
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      handleRegistorFormChange(e.target.name, e.target.value);
                    }}
                    value={state.email}
                    required={true}
                    name="email"
                    type="email"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Email"
                    style={{ transition: "all .15s ease" }}
                  />
                  {error.name === "email" && (
                    <span>
                      <small>{error.errorMessage}</small>
                    </span>
                  )}
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      handleRegistorFormChange(e.target.name, e.target.value);
                    }}
                    name="password"
                    value={state.password}
                    required={true}
                    type="password"
                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Password"
                    style={{ transition: "all .15s ease" }}
                  />
                  {error.name === "password" && (
                    <span>
                      <small>{error.errorMessage}</small>
                    </span>
                  )}
                </div>

                <div className="relative w-full mb-3">
                  <p className="text-gray-700 text-xs font-bold mb-2">Role:</p>
                  <div className="mb-[0.125rem] inline-block min-h-[1.5rem] pl-[1.5rem] mr-3">
                    <input
                      className="relative float-left checked:bg-slate-600 bg-slate-100 -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="role"
                      required={true}
                      onChange={(e) => {
                        console.log(e);
                        handleRegistorFormChange(e.target.name, e.target.value);
                      }}
                      value="User"
                      id="User"
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer  text-gray-700 text-xs font-bold mb-2"
                      htmlFor="User"
                    >
                      User
                    </label>
                  </div>
                  <div className="mb-[0.125rem] inline-block  min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      value="Admin"
                      required={true}
                      className="relative float-left checked:bg-slate-600 bg-slate-100 -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      onChange={(e) => {
                        handleRegistorFormChange(e.target.name, e.target.value);
                      }}
                      name="role"
                      id="Admin"
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer  text-gray-700 text-xs font-bold mb-2"
                      htmlFor="Admin"
                    >
                      Admin
                    </label>
                  </div>
                  {error.name === "role" && (
                    <span>
                      <small>{error.errorMessage}</small>
                    </span>
                  )}
                </div>

                <div className="text-center mt-6">
                  <button
                    onClick={submitRegisterForm}
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
