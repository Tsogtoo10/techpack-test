import Image from "next/image";
import Card from "../common/Card";
const Ons = ({
  nextStep,
  unStep,
}: {
  nextStep: () => void;
  unStep: () => void;
}) => {
  return (
    <>
      <h3 className="text-primary font-bold text-2xl">Pick add-ons</h3>
      <span className="text-primary-foreground text-sm">
        Add-ons help enhanceyour gaming experience.
      </span>
      <div className="grid gap-4 mb-6 md:grid-cols-1 mt-8">
        <Card
          className={
            "bg-white border border-gray-300 border-solid rounded-lg p-4 w-full hover:border-[#02295a] transition-colors duration-300"
          }
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
              ></input>
              <div>
                <h3 className="text-primary font-semibold">Online Service</h3>
                <span className="text-primary-foreground font-normal text-sm">
                  Access to multiplayer games
                </span>
              </div>
            </div>
            <span>+1$/mo</span>
          </div>
        </Card>
        <Card
          className={
            "bg-white border border-gray-300 border-solid rounded-lg p-4 w-full hover:border-[#02295a] transition-colors duration-300"
          }
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
              ></input>
              <div>
                <h3 className="text-primary font-semibold">Larger Storage</h3>
                <span className="text-primary-foreground font-normal text-sm">
                  Extra 1TB of cloud save
                </span>
              </div>
            </div>
            <span>+2$/mo</span>
          </div>
        </Card>
        <Card
          className={
            "bg-white border border-gray-300 border-solid rounded-lg p-4 w-full hover:border-[#02295a] transition-colors duration-300"
          }
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded"
              ></input>
              <div>
                <h3 className="text-primary font-semibold">
                  Customizable profile
                </h3>
                <span className="text-primary-foreground font-normal text-sm">
                  Custom theme on your profile
                </span>
              </div>
            </div>
            <span>+2$/mo</span>
          </div>
        </Card>
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

export default Ons;
