import { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  type?: "submit" | "button";
  //   variant?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = (props: PropTypes) => {
  const { children, type = "button" } = props;
  return <button type={type}>{children}</button>;
};

export default Button;
