import React from "react";
import { BgImg, LockCircle } from "@/assets/image";
import { Profile, Password, LockWhat, Tick, Recaptcha } from "@/assets/icons";
import Image from "next/image";

const Login = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImg.src})` }}
    >
      <div className="relative flex flex-col items-center gap-[25px] p-[25px] rounded-lg border-White border-[1.88px]">
        <div className="absolute top-[-61.5px]">
          <Image src={LockCircle} alt="LockCircle" />
        </div>

        <div className="flex flex-col gap-[15px] pt-[67px]">
          <div className="w-[290px] bg-White rounded-md flex gap-[15px] font-Outfit px-[15px] py-[12px]">
            <Image src={Profile} alt="Profile" />
            <input
              type="text"
              placeholder="Username"
              className="p-1 focus:outline-none text-GrayColor font-medium text-[15px] leading-[17.64px]"
            />
          </div>

          <div className="w-[290px] bg-White rounded-lg flex gap-[15px] font-Outfit px-[15px] py-[12px]">
            <Image src={Password} alt="Password" />
            <input
              type="text"
              placeholder="Username"
              className="p-1 focus:outline-none text-GrayColor font-medium text-[15px] leading-[17.64px]"
            />
          </div>
        </div>

        <div className="flex justify-between text-White gap-[45px]">
          <div className="flex gap-[10px] justify-between items-center cursor-pointer">
            <Image src={LockWhat} alt="LockWhat" />
            <div className="text-Quattrocento font-bold text-[14px] leading-[15.51px]">
              Forgot Password ?
            </div>
          </div>
          <div className="flex gap-[10px] justify-between items-center cursor-pointer">
            <div className="text-Quattrocento font-bold text-[14px] leading-[15.51px]">
              Remember Me
            </div>
            <Image src={Tick} alt="Tick" />
          </div>
        </div>

        <div className="w-[228px] flex gap-[37px] px-[15px] py-[10px] bg-White/35 rounded-md">
          <div class="flex items-center gap-[15px]">
            <div className="w-6 h-6 border-White border-[1px] rounded-sm cursor-pointer"></div>
            <span className="text-Quattrocento text-White font-bold text-[14px] leading-[15.51px]">
              I’m not a robot
            </span>
          </div>
          <Image src={Recaptcha} alt="Recaptcha" />
        </div>

        <div className="w-[290px] rounded-xl shadow-white bg-BlueColor text-Quattrocento text-center text-White font-bold text-[23px] leading-[25.48px] py-3 cursor-pointer">
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
