import React from "react";

interface IButtonProps {
  name: string | undefined;
  disabled: boolean | undefined;
  label: string;
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button name={props.name} disabled={props.disabled}>
      <h4>{props.label}</h4>
    </button>
  );
};
export default Button;
