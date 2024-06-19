"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Нэрээ оруулна уу" })
    .max(50, { message: "Нэр 50 тэмдэгтээс ихгүй байна" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Зөвхөн үсэг оруулна уу",
    }),
  email: z.string().min(1, { message: "Имэйл хаягаа оруулна уу" }).email({
    message: "Имэйл хаягаа зөв оруулна уу. Жишээ нь: tsogtbaatar.e13@gmail.com",
  }),
  phone: z
    .string()
    .min(8, { message: "Утасны дугаар хамгийн багадаа 8 тэмдэгт байх ёстой" })
    .max(8, { message: "Утасны дугаар хамгийн ихдээ 8 тэмдэгт байх ёстой" })
    .regex(/^[0-9]+$/, { message: "Зөвхөн цифр оруулна уу" }),
});
const LOCAL_STORAGE_KEY = "formState";

const Form = ({ nextStep }: { nextStep: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    nextStep();
  };

  // Retrieve form state from local storage on component mount
  useEffect(() => {
    const savedFormState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedFormState) {
      const parsedFormState = JSON.parse(savedFormState);
      for (const key in parsedFormState) {
        setValue(key as keyof z.infer<typeof formSchema>, parsedFormState[key]);
      }
    }
  }, [setValue]);

  // Watch form state and save to local storage on change
  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <h3 className="text-primary font-bold text-2xl">Personal info</h3>
      <span className="text-primary-foreground text-sm">
        Please provide your name, email address, and phone number.
      </span>
      <form className="md:mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 mb-6 md:grid-cols-1">
          <div>
            <label className="block mb-2 text-sm font-medium text-primary">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className={`bg-white w-full border border-gray-300 text-primary text-sm rounded-lg p-2 placeholder-gray-500 focus:ring-primary focus:border-primary ${
                errors.name ? "border-red-500" : ""
              }`}
              placeholder="e.g. Stephen King"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-primary">
              Email Address
            </label>
            <input
              type="text"
              {...register("email")}
              className={`bg-white w-full border border-gray-300 text-primary text-sm rounded-lg p-2 placeholder-gray-500 focus:ring-primary focus:border-primary ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="e.g. stephenking@lorem.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-primary">
              Phone Number
            </label>
            <input
              type="text"
              {...register("phone")}
              className={`bg-white w-full border border-gray-300 text-primary text-sm rounded-lg p-2 placeholder-gray-500 focus:ring-primary focus:border-primary ${
                errors.phone ? "border-red-500" : ""
              }`}
              placeholder="e.g. +1 234 567 890"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="flex justify-end mt-20">
            <button
              type="submit"
              className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center md:w-[35%]"
            >
              Next Step
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
