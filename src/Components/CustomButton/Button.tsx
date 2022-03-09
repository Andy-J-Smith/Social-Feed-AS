import React, { SyntheticEvent } from "react";
import "./Button.css";
const css = require("./Button.css");

type ButtonProps = {
  color: "primary" | "secondary";
  label: string;
  className?: string;
  text: string;
  onclick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  onKeydown?: (e: SyntheticEvent<HTMLButtonElement>) => void;
  onSubmit?: (e: SyntheticEvent<HTMLButtonElement>) => void;
};

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const { color, label, text, className, onclick, onKeydown, onSubmit } = props;

  return (
    <button className={`${css.Button} ${css[color]} ${css[className]} `}>
      {text}
    </button>
  );
};

export default Button;
