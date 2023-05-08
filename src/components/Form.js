import React from "react";
import Login from "./Login";
import Register from "./Register";

const Form = () => {
  return (
    <div>
      <h1 className="text-[32px] leading-[35px] py-3 font-hel font-medium text-[#333]">
        Login / Register
      </h1>
      <div className="flex md:flex-row flex-col gap-4 ">
        <div className="md:w-[40%]">
          {" "}
          <Login />
        </div>

        <div className="md:w-[55%]">
          <Register className="flex-1.5" />
        </div>
      </div>
    </div>
  );
};

export default Form;
