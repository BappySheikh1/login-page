import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
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
      <div
        className="
        bg-[url(https://s3-alpha-sig.figma.com/img/4ee0/0006/3107c45a2adce01efe60a8d70e6ea4b2?Expires=1686528000&Signature=fKFWzA9lTvSQzhvVmEF-uTw9uCglvVRZgUNymHPaNERX9~UZQ5cfrjRrSf7pl2DoLnEK-aRY9rqyq1oYrJoEA4TKp~NVP4c~-1DONZUrBu8-z8-3A0qIq~Hn460Ooz7ibOdx8WMRKkogTEqLzF3guGna7WCm36~szrOwqLci07zeY2O6oiA6s1JRLI3ymy6Sb52puEed7z0tK-mjnSOgqHgO8hiPoigkaV3eTdRZRAvsV4nF68WWTb5F7kt8OF2QveG2HCfP4-rtIZK3-REMwP6cMXvEbwWv-P0-h89iX5W~O-rCBoUPrQY2JZ5mxaavZm7oxO-jr1TbortdXcDfjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)]
        lg:h-[555px] lg:w-[620px] rounded-xl
         text-center mx-auto
        "
      >
        <div></div>
        {/* middle */}
        <div></div>
        {/* bottom position*/}
        <div></div>
      </div>

      <div className="w-1/2 mx-auto text-center">
        <div className="text-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/6fdc/89e1/8c73671940a6f474158b15da4e60dcba?Expires=1686528000&Signature=mNfhH1DjBfNYqeEgUzwMUx4egTuaJ0zVS6zY3H-wMtNYvcdVAgVsDudmso-oeoYjgHanApNR~Lzqt~A2qW~KE1LTGZaVWTDFz8SzIz~Y5-IGtkluO4ygKVIe3OHX4zlump-ZfDTKNyBFbFXoqe3AQaK4IZFDW5DSrTEdRx5JhzeH71eUf7Eo-JeMjzNIeb8PNnw1kpf3lymGHZq8Nt-WUssvDSRhrE7PQ2CmAxFWJ~hsRlUW0Ozlt~JwQgHSuVB6b5ZnPPaMoar0S6qgnfahM6AMwZixysi3xWp5O3aZSsblKOr7K-EsgzPTzaoJ~2HO0-1sL4sWnyb~uNGCJAzLBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[62px] h-[49px] mx-auto"
          />
          <h2 className="text-4xl font-bold text-center">
            Welcome <span className="text-[#08A593]">Back!</span>{" "}
          </h2>
          <p className="text-[#667085] mt-3 mb-6">Glad to see, Again!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border  border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />

          <input
            className="border mt-5 border-[#464660] w-[360px] h-[49px] rounded-[10px] p-[20px] gap-[10px]  font-bold"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "This is required.",
              minLength: {
                value: 4,
                message: "Min length is 8",
              },
            })}
          />
          <br />
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}
          <br />
          <input
            className="bg-[#020100] mt-5 w-[360px] h-[53px] rounded-[10px] p-[20px] gap-[10px] text-white font-bold cursor-pointer "
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
