import React from "react";

const Login = () => {
  return (
    <div className="md:pr-[50px] md:border-r md:border-0 border-b">
      <div className="border-b">
        <h2 className="text-[21px] leading-[30px] text-primary">
          Sign in to your Account
        </h2>
      </div>
      <div className="py-8">
        <form action="" className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-[14px] leading-[20px]"> Email Address</label>
            <input
              type="text"
              className="focus:border-[#66afe9]  h-[2.75em] text-[.89em]  px-[0.375em] py-[0.75em] focus:boxShadow border border-black outline-none "
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] leading-[20px]"> Password</label>
            <input
              type="password"
              className="focus:border-[#66afe9]  h-[2.75em] text-[.89em]  px-[0.375em] py-[0.75em] focus:boxShadow border border-black outline-none "
            />
          </div>
          <div className="text-end w-full">
            <button class="uppercase md:w-[70px] w-full py-[0.4em] px-[0.8em] bg-black text-white rounded-full">
              Login
            </button>
          </div>
        </form>
        <div className="md:text-left text-right mt-3 md:mt-0">
          <button className="text-[#943579]  hover:underline">
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
