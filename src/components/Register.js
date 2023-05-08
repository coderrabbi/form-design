import React from "react";

const Register = () => {
  return (
    <div className="md:pl-[35px] pl-0">
      <div className="border-b">
        <h2 className="text-[21px] leading-[30px] text-primary">
          Create a New Account
        </h2>
      </div>
      <div className="py-8">
        <form action="" className="flex flex-col gap-2">
          <div className="flex justify-between md:flex-row flex-col">
            <label className="text-[14px] leading-[20px]">
              {" "}
              First Name<span className="text-red-500">*</span>{" "}
            </label>
            <input
              type="text"
              className="focus:border-[#66afe9] md:w-[250px] h-[2.75em] text-[.89em]  px-[0.375em] py-[0.75em] focus:boxShadow border border-black outline-none "
            />
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <label className="text-[14px] leading-[20px]">
              {" "}
              Last Name<span className="text-red-500">*</span>{" "}
            </label>
            <input
              type="text"
              className="focus:border-[#66afe9] md:w-[250px] h-[2.75em] text-[.89em]  px-[0.375em] py-[0.75em] focus:boxShadow border border-black outline-none "
            />
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <label className="text-[14px] leading-[20px]">
              {" "}
              Email Address<span className="text-red-500">*</span>{" "}
            </label>
            <input
              type="text"
              className="focus:border-[#66afe9] md:w-[250px] h-[2.75em] text-[.89em]  px-[0.375em] py-[0.75em] focus:boxShadow border border-black outline-none "
            />
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <label className="text-[14px] leading-[20px]">
              {" "}
              Password<span className="text-red-500">*</span>{" "}
            </label>
            <input
              type="text"
              className="focus:border-[#66afe9] md:w-[250px] h-[2.75em] text-[.89em]  px-[0.375em] py-[0.75em] focus:boxShadow border border-black outline-none "
            />
          </div>
          <p className="text-[16px] leading-[23px] mt-3">
            Be the first to find out about all of our great deals and specials.
            We will send you coupons so you can get discounts on our already
            discounted prices.
            <br />
            By creating an account, you agree to receive promotional emails and
            consent to our{" "}
            <a href="" className=" underline">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="" className="underline">
              Privacy Policy.
            </a>
          </p>
          <div className="text-end mt-4 md:mt-0">
            <button class="uppercase md:w-[100px] w-full py-[0.4em] px-[0.8em] bg-black text-white rounded-full">
              register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
