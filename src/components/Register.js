import React, { useState } from "react";

const Register = () => {
  const [fName, setFnmae] = useState(null);
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passShow, setPassShow] = useState(false);

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
              className={`${
                fName?.length > 1
                  ? "focus:border-[#66afe9]"
                  : "focus:border-red-500"
              } md:w-[250px] h-[2.75em] text-[.89em]  px-[0.375em]  py-[0.75em] focus:boxShadow border border-black outline-none `}
              onChange={(e) => setFnmae(e.target.value)}
            />
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <label className="text-[14px] leading-[20px]">
              {" "}
              Last Name<span className="text-red-500">*</span>{" "}
            </label>
            <input
              type="text"
              value={lName}
              className={`${
                lName?.length > 1
                  ? "focus:border-[#66afe9]"
                  : "focus:border-red-500"
              } md:w-[250px] h-[2.75em] text-[.89em]  px-[0.375em]  py-[0.75em] focus:boxShadow border border-black outline-none `}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <label className="text-[14px] leading-[20px]">
              {" "}
              Email Address<span className="text-red-500">*</span>{" "}
            </label>
            <input
              type="text"
              className={`${
                email?.length > 1
                  ? "focus:border-[#66afe9]"
                  : "focus:border-red-500"
              } md:w-[250px] h-[2.75em] text-[.89em]  px-[0.375em]  py-[0.75em] focus:boxShadow border border-black outline-none `}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-between md:flex-row flex-col">
            <div className="flex justify-between ">
              <label className=" cursor-pointer text-[14px] leading-[20px]">
                {" "}
                Password<span className="text-red-500">*</span>{" "}
              </label>
              <div className="md:hidden bolck">
                {passShow ? (
                  <span
                    onClick={() => setPassShow(!passShow)}
                    className="text-[12px] text-[#c30000] cursor-pointer   leading-[17px]"
                  >
                    (Hide Password)
                  </span>
                ) : (
                  <span
                    onClick={() => setPassShow(!passShow)}
                    className="text-[12px] text-[#c30000] cursor-pointer  leading-[17px]"
                  >
                    (Show Password)
                  </span>
                )}
              </div>
            </div>
            <input
              type={`${passShow ? "text" : "password"}`}
              className={`${
                password?.length > 7
                  ? "focus:border-[#66afe9]"
                  : "focus:border-red-500"
              } md:w-[250px] h-[2.75em] text-[.89em]  px-[0.375em]  py-[0.75em] focus:boxShadow border border-black outline-none `}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          {password?.length <= 7 && (
            <span className="text-[#c30000] text-right text-[13px] leading-[18px] ">
              Your password must be at least 8 characters long
            </span>
          )}
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
