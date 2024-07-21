import React from "react";

const PopUpForm = () => {
  return (
    <section className="fixed left-0 top-0 flex justify-center items-center w-full h-screen bg-black/80 transition-all z-10">
      <div className="w-[480px] bg-white py-10 px-14 rounded-lg">
        <div className="mb-6">
          <h4 className="text-center text-2xl font-semibold">
            Sign in with your account
          </h4>
        </div>

        <div>
          <form action="">
            <div>
              <input className="input-field" type="email" placeholder="Email" />
            </div>
            <div>
              <input
                className="input-field"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              className="w-full py-3 px-6 rounded-lg capitalize text-white font-semibold bg-slate-400"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PopUpForm;
