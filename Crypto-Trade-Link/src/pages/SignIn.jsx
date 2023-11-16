import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

import { useSelector, useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInError,
} from "../redux/user/userSlice.js";
import OAuth from "./OAuth.jsx";

function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        dispatch(signInError(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
      // console.log(data);
    } catch (error) {
      dispatch(signInError(error));
      console.log(error);
    }
  };

  console.log(formData);
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-500 ">
      <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
            <div className="g-0 lg:flex lg:flex-wrap">
              <div className="px-8 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">
                  <div className="text-center">
                    <img
                      className="mx-auto w-55"
                      src="./src/assets/logo.png"
                      alt="logo"
                    />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      We Are The Sllers of Bitcoin
                    </h4>
                  </div>

                  <form
                    className="gap-4 p-5 text-white"
                    onSubmit={handleSubmit}>
                    <p className="mb-4 ">Please connect your account</p>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="mb-4 rounded-lg p-2 w-full text-black"
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="mb-4 rounded-lg p-2 w-full text-black"
                      onChange={handleChange}
                    />

                    <div className="mb-12 pb-1 pt-1 text-center">
                      <button
                        style={{
                          background:
                            "linear-gradient(to right, #706c0c, #181702, #706c0c )",
                          justifyContent: "center",
                        }}
                        className="bg-slate-700 text-white w-full p-2 rounded-lg text-center uppercase hover:opacity-95 disabled:opacity-95">
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            size: "100%",
                          }}>
                          {" "}
                          {loading ? <Spinner /> : "Sign In"}
                        </p>
                      </button>
                      <OAuth />

                      <a className="pt-3" href="#!">
                        Terms and conditions
                      </a>
                    </div>

                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Have an account?</p>
                      {error && <p className="text-red-500 pt-5">{error}</p>}

                      <Link
                        to="/sign-up"
                        style={{
                          background:
                            "linear-gradient(to right, #706c0c, #181702 )",
                        }}
                        type="Link"
                        className=" rounded-lg px-6 p-1 pt-2 text-m font-medium uppercase text-slate-100">
                        Sign Up
                      </Link>
                    </div>
                  </form>
                </div>
              </div>

              <div
                className="p-5 flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                style={{
                  background:
                    "linear-gradient(to right, #181702, #706c0c, #706c0c, #181702 )",
                }}>
                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                  <h4 className="mb-6 text-xl font-semibold">
                    We are more than just a networking platform
                  </h4>
                  <p className="text-sm">
                    Join CryptoTraderLink and start your digital financial
                    journey today. Quickly fill out your information or simplify
                    the process by signing in with Google. Connect with a
                    passionate community of cryptocurrency traders. Get started
                    in the exciting world of Bitcoin trading with ease and
                    security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
