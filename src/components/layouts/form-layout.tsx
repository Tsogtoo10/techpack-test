const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white p-3 rounded-lg w-full">
      <div className="flex flex-col md:flex-row">{children}</div>
    </div>
  );
};

export default FormLayout;
