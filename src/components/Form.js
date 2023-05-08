import React from "react";
import Login from "./Login";
import Register from "./Register";

const Form = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 ">
      <div className="md:w-[40%]">
        {" "}
        <Login />
      </div>

      <div className="md:w-[55%]">
        <Register className="flex-1.5" />
      </div>
    </div>
  );
};

export default Form;
