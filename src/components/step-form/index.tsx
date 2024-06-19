"use client";
import { useState } from "react";
import Step from "@/components/step-form/Step";
import FormLayout from "../layouts/form-layout";
import Form from "@/components/step-form/Form";
import Plan from "./Plan";
import Ons from "./Ons";
import Summary from "./Summary";
import Confirm from "./Confirm";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const unStep = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : 1));
  };
  return (
    <FormLayout>
      <Step step={step} setStep={setStep} />
      <div className="w-full mt-8 md:mx-20">
        {" "}
        {step === 1 && <Form nextStep={nextStep} />}
        {step === 2 && <Plan nextStep={nextStep} unStep={unStep} />}
        {step === 3 && <Ons nextStep={nextStep} unStep={unStep} />}
        {step === 4 && <Summary nextStep={nextStep} unStep={unStep} />}
        {step === 5 && <Confirm />}
      </div>
    </FormLayout>
  );
};

export default StepForm;
