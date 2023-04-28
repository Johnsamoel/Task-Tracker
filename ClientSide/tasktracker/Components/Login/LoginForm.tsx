import { loginState } from "@/models/loginModel";
import { loginUser } from "@/store/middlewares/getUserInfoMiddleware";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link'
import { loginSchema } from "@/utils/validationLoginForm";


const LoginForm = () => {
  const loginIntialState: loginState = {
    email: "",
    password: "",
  };
  const errorObj = {
    name: "",
    errorMessage: "",
  };
  const [state, setLoginState] = useState<loginState>(loginIntialState);
  const [error, setError] = useState(errorObj);

  const dispatch = useDispatch();
  const store:any = useSelector((state) => state);
  const handleLoginFormChange = (name: string, value: string) => {
    setLoginState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(store, "store");
  const handleErrorObj = (name: string, errorMessage: string) => {
    setError((prevState) => ({
      ...prevState,
      name: name,
      errorMessage: errorMessage,
    }));
  };
  const login = () => {
    const validationResult= loginSchema.validate(state)
if(!validationResult.error){
  handleErrorObj("","")
  dispatch(loginUser(state) as any);
}else{
  const key = validationResult.error.details[0].path[0] as string;
  const errorMessage = validationResult.error.message;
  handleErrorObj(key, errorMessage);
}
    
  };
  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-around h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
            <div className="flex-auto px-4  lg:px-10 py-10 pt-8">
              <div className="text-gray-500 text-center mb-3 font-bold">
                <small>sign in with credentials</small>
              </div>
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    required
                    type="email"
                    value={state.email}
                    onChange={(e) => {
                      handleLoginFormChange(e.target.name, e.target.value);
                    }}
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
                    name="password"
                    required
                    value={state.password}
                    onChange={(e) => {
                      handleLoginFormChange(e.target.name, e.target.value);
                    }}
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

                <div className="text-center mt-6">
                  <button
                    onClick={login}
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                  >
                    Sign In
                  </button>
                  {(store.userAuthentication.errorMessage!==""&&!store.userAuthentication.Success)&&<span>
                        <small>{store.userAuthentication.errorMessage}</small>
                      </span>}
<Link href={'/Register'}>
<p>Do not have an account? Sign up now!!</p>
</Link>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginForm;
