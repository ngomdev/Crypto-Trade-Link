import {  Input } from "@material-tailwind/react";

function SignUp() {
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
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

                    <form>
                      <p className="mb-4">Please register an account</p>
                      {/* <!--Username input--> */}
                      <Input
                        type="text"
                        placeholder="Username"
                        className="mb-4 rounded-lg p-3"
                      ></Input>
                      <Input
                        type="text"
                        placeholder="Email"
                        className="mb-4 rounded-lg p-3"
                      ></Input>

                      {/* <!--Password input--> */}
                      <Input
                        type="password"
                        placeholder="Password"
                        className="mb-4 rounded-lg p-3"
                      ></Input>
                      <Input
                        type="password"
                        placeholder="Conf Password"
                        className="mb-4 rounded-lg p-3"
                      ></Input>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        {/* <Button rippleColor="light" className="w-full"> */}
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          style={{
                            background:
                            "linear-gradient(to right, #706c0c, #181702, #706c0c )",
                          }}
                        >
                          Sign up
                        </button>
                        

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Terms and conditions</a>
                      </div>

                      {/* <!--Register button--> */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Have an account?</p>
                        
                          <button
                          style={{
                            background:
                            "linear-gradient(to right, #706c0c, #181702 )",
                          }}
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-slate-50"
                          >
                            Sign in
                          </button>
                        
                      </div>
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and descripti#181702on--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #181702, #706c0c, #706c0c, #181702 )",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                    We are more than just a networking platform
                    </h4>
                    <p className="text-sm">
                    Join CryptoTraderLink and start your digital financial journey today. Quickly fill out your information or simplify the process by signing in with Google.
                    Connect with a passionate community of cryptocurrency traders. Get started in the exciting world of Bitcoin trading with ease and security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
