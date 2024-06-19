"use client";
import { useState } from "react";
import Image from "next/image";
import Card from "../common/Card";

const Plan = ({
  nextStep,
  unStep,
}: {
  nextStep: () => void;
  unStep: () => void;
}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <h3 className="text-primary font-bold text-2xl">Select your plan</h3>
      <span className="text-primary-foreground text-sm">
        You have the option of monthly or yearly billing.
      </span>
      <div className="grid gap-4 mb-6 md:grid-cols-3 mt-8">
        <Card
          className={
            "bg-white border border-gray-300 border-solid rounded-lg p-4 w-full h-[160px] hover:border-[#02295a] transition-colors duration-300"
          }
        >
          <Image
            src={"/images/icon-arcade.svg"}
            alt=""
            width={35}
            height={35}
          />
          <div className="mt-12">
            <h5 className="text-primary font-medium text-base">Arcade</h5>
            <span className="text-primary-foreground font-normal text-sm">
              $9/mo
            </span>
          </div>
        </Card>
        <Card
          className={
            "bg-white border border-gray-300 border-solid rounded-lg p-4 w-full h-[160px] hover:border-[#02295a] transition-colors duration-300"
          }
        >
          <Image
            src={"/images/icon-advanced.svg"}
            alt=""
            width={35}
            height={35}
          />
          <div className="mt-12">
            <h5 className="text-primary font-medium text-base">Advanced</h5>
            <span className="text-primary-foreground font-normal text-sm">
              $12/mo
            </span>
          </div>
        </Card>
        <Card
          className={
            "bg-white border border-gray-300 border-solid rounded-lg p-4 w-full h-[160px] hover:border-[#02295a]  transition-colors duration-300"
          }
        >
          <Image src={"/images/icon-pro.svg"} alt="" width={35} height={35} />
          <div className="mt-12">
            <h5 className="text-primary font-medium text-base">Pro</h5>
            <span className="text-primary-foreground font-normal text-sm">
              $15/mo
            </span>
          </div>
        </Card>
      </div>
      <div className="w-full bg-[#f0f6ff] rounded-lg p-2">
        <div className="flex items-center justify-center gap-4">
          <span
            className={`font-medium ${
              !isToggled ? "text-primary" : "text-[#d6d9e6]"
            }`}
          >
            Monthly
          </span>

          <div
            className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer transition-colors duration-300 bg-primary 
          `}
            onClick={handleToggle}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
                isToggled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </div>
          <span
            className={` font-medium ${
              isToggled ? "text-primary" : "text-[#d6d9e6]"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

      <div className="flex justify-between mt-20">
        <button
          onClick={() => unStep()}
          type="submit"
          className="text-primary-foreground bg-transparent font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center sm:w-[25%]"
        >
          Go Back
        </button>
        <button
          onClick={() => nextStep()}
          type="submit"
          className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center sm:w-[25%]"
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Plan;
