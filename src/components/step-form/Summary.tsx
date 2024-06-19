const Summary = ({
  nextStep,
  unStep,
}: {
  nextStep: () => void;
  unStep: () => void;
}) => {
  return (
    <>
      <h3 className="text-primary font-bold text-2xl">Finishing up</h3>
      <span className="text-primary-foreground text-sm">
        Double-checkeverything looks OK before confirming.
      </span>
      <div className="bg-[#f0f6ff] rounded-lg p-6 mt-8">
        <div className="flex items-center justify-between border-b border-solid border-b-primary-foreground pb-4">
          <div>
            <h3 className="text-primary font-semibold">Arcade (Yearly)</h3>
            <span className="underline text-primary-foreground font-medium">
              Change
            </span>
          </div>
          <span className="text-primary font-bold">$90/yr</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-primary-foreground font-normal">
            Online Service
          </h3>
          <span className="text-primary font-normal">+10$/yr</span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-primary-foreground font-normal">
            Larger storage
          </h3>
          <span className="text-primary font-normal">+20$/yr</span>
        </div>
      </div>
      <div className="flex justify-between mt-6 px-4">
        <h3 className="text-primary-foreground font-normal">
          Total (per year)
        </h3>
        <span className="text-primary font-bold text-lg">+120$/yr</span>
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
          Confirm
        </button>
      </div>
    </>
  );
};

export default Summary;
