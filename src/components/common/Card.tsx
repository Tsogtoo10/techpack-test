const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: any;
}) => {
  return <div className={className}>{children}</div>;
};
export default Card;
