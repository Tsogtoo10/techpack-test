const Step = ({
  step,
  setStep,
}: {
  step: number;
  setStep: (step: number) => void;
}) => {
  const steps = [
    { number: 1, label: "Your Info" },
    { number: 2, label: "Select Plan" },
    { number: 3, label: "Add-Ons" },
    { number: 4, label: "Summary" },
  ];

  return (
    <div className="rounded-lg w-full h-auto md:w-[60%] md:h-[520px]">
      <div
        className="bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: 'url("/images/bg-sidebar-mobile.svg")',
        }}
      >
        <div className="flex flex-row md:flex-col justify-center py-5 gap-4 sm:pl-8 sm:pt-8">
          {steps.map(({ number, label }) => (
            <div
              key={number}
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setStep(number)}
            >
              <div
                className={`border border-solid border-white rounded-full w-8 h-8 flex justify-center items-center ${
                  step === number ? "bg-active" : "bg-transparent"
                }`}
              >
                <h4
                  className={`text-sm ${
                    step === number ? "text-black" : "text-white"
                  }`}
                >
                  {number}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="hidden md:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/images/bg-sidebar.svg")',
          height: "100%",
        }}
      >
        <div className="flex flex-col gap-4 sm:pl-8 sm:pt-8">
          {steps.map(({ number, label }) => (
            <div
              key={number}
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setStep(number)}
            >
              <div
                className={`border border-solid border-white rounded-full w-8 h-8 flex justify-center items-center ${
                  step === number ? "bg-active" : "bg-transparent"
                }`}
              >
                <h4
                  className={`text-sm ${
                    step === number ? "text-black" : "text-white"
                  }`}
                >
                  {number}
                </h4>
              </div>
              <div>
                <span className="text-primary-foreground font-normal uppercase text-xs">
                  Step {number}
                </span>
                <h3 className="text-white font-semibold uppercase text-sm">
                  {label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step;
