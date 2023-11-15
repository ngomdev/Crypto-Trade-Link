import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success == false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
      // console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  console.log(formData);

  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
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

                    <form className="gap-4 text-white" onSubmit={handleSubmit}>
                      <p className="mb-4 ">Please register an account</p>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        className="mb-4 rounded-lg p-2 w-full text-black"
                        onChange={handleChange}
                      />
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
                          }}
                          className="bg-slate-700 text-white w-full p-2 rounded-lg  uppercase hover:opacity-95 disabled:opacity-95">
                          {loading ? "Loading..." : "Sign Up"}
                        </button>

                        <a href="#!">Terms and conditions</a>
                      </div>

                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Have an account?</p>
                        {error && <p className="text-red-500 pt-5">{error}</p>}

                        <button
                          style={{
                            background:
                              "linear-gradient(to right, #706c0c, #181702 )",
                          }}
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 text-slate-50">
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
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
                      journey today. Quickly fill out your information or
                      simplify the process by signing in with Google. Connect
                      with a passionate community of cryptocurrency traders. Get
                      started in the exciting world of Bitcoin trading with ease
                      and security.
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

{
  /* <select className="mb-4 rounded-lg p-1 bg-white text-black w-full">
                      <option className="rounded-lg p-1 ">Trader</option>
                      <option className="rounded-lg p-1 ">User</option>                  
                    </select> */
}
