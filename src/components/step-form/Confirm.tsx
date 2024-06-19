import Image from "next/image";

const Confirm = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center h-full">
      <Image
        src={"/images/icon-thank-you.svg"}
        width={100}
        height={100}
        alt="thank-you"
      />
      <h3 className="text-primary font-bold text-3xl">Thank you!</h3>
      <p className="text-center text-sm text-primary-foreground">
        Thanks for confirming your subscription! We hope you have fun using ur
        platform. If you ever needsupport, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Confirm;
