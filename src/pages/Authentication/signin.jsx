import React from "react";
import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import TextInput from "../../components/common/form/TextInput";

const signin = () => {
  return (
    <div className="h-full">
      <section className="flex h-full items-center justify-center overflow-y-scroll   px-2 py-11">
        <div
          className="w-[900px] rounded-lg p-9"
          style={{ boxShadow: "0px 3px 34px 0px rgba(0, 0, 0, 0.07)" }}
        >
          <div className="text-center text-black">
            <h1 className="mb-4 text-[38px] font-[900]">Minimind</h1>
            <h3 className="font-semibold ">Sign in to your account</h3>
          </div>
          <div className="my-5 flex flex-col justify-center gap-5 text-center sm:flex-row">
            <div className="flex items-center justify-center gap-3 rounded-md bg-[#F4F4F4] py-3 px-3 text-center">
              <FcGoogle className="text-[29px]" />
              <p className="text-lg font-medium text-black">
                Sign in with Google
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-md bg-[#F4F4F4] px-3 py-2 text-center">
              <BsApple className="text-[29px]" />
              <p className="text-lg font-medium text-black">
                Sign in with Apple
              </p>
            </div>
          </div>
          <p className="text-center font-medium text-black">Or use Email</p>
          <form className="py-2">
            <TextInput placeholder="Email address" />
            <TextInput placeholder="Password" />

            <div className="flex justify-between">
              <div className="flex gap-1.5">
                <input type="checkbox" />
                <p className="font-medium text-black">
                  Remember me on the device
                </p>
              </div>
              <div className="font-medium text-black underline">
                Forgot password?
              </div>
            </div>
            <button className="my-5 w-full rounded-lg bg-black py-3 font-medium text-white">
              Sign in
            </button>
          </form>
          <p className="text-center font-medium">
            Not a member?
            <span className="text-black">Start a 13-day free trail</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default signin;
