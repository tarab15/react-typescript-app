import React from "react";

interface Props {
  label: string;
  //   color?: string; //question marks suggest that prop is optional
  color?: "primary" | "secondary" | "danger" | 'success';
  onButtonClick: () => void;
}

const Button = ({ label, color = "primary", onButtonClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn m-1 btn-" + color}
      onClick={onButtonClick}
    >
      {label}
    </button>
  );
};

export default Button;
