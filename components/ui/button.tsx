import React from "react";

const Button = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{children}</button>;
};

export default Button;
