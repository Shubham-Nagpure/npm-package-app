import React from "react";

interface IButtonProps {
  id: any;
  type: "button" | "submit" | "reset" | undefined;
  name: string | undefined;
  value: string | number | readonly string[] | undefined;
  disabled: boolean | undefined;
  label: string;
  kind: any;
  props: any[];
}

const Button: React.FC<IButtonProps> = (props) => {
  return (
    <button
      className={`btn btn--${props.kind} CTA`}
      data-id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      disabled={props.disabled}
    >
      <h4>{props.label}</h4>
    </button>
  );
};
export default Button;
