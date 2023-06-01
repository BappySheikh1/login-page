import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="lg:flex items-center lg:w-[1280px] lg:h-[609px] bg-[#FFFFFF]">
      <div className="w-1/2 text-center mx-auto">
        <h1 className="text-5xl font-bold">This is Login page image</h1>
      </div>

      <div className="w-1/2 text-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Welcome <span className="text-[#08A593]">Back!</span>{" "}
          </h2>
          <p className="text-[#667085] mt-3 mb-6">Glad to see, Again!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border  border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
            type="email"
            placeholder="Enter your email"
            {...register("example")}
          />

          <input
            className="border my-5 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
            type="password"
            placeholder="Enter your password"
            {...register("exampleRequired", {
              required: "This is required.",
              minLength: {
                value: 4,
                message: "Min length is 8",
              },
            })}
          />
          <br />
          {errors.exampleRequired && (
            <span className="">This field is required</span>
          )}
          <br />
          <input
            className="bg-[#020100] w-[360px] h-[53px] rounded-[10px] p-[20px] gap-[10px] text-white font-bold cursor-pointer "
            type="submit"
            value="Log In"
          />
        </form>

        <p className="mt-24">
          <span className="text-[#667085]"> Don't have an account yet?</span>
          <span className="text-semibold text-[#08A593] cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
