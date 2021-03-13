import React from "react";
import "./button.scss";

export interface ButtonProps {
  /**
   * The button label
   */
  label: string;
}

/**
 * Button
 */
export const Button: React.FunctionComponent<ButtonProps> = ({label}) => {
  return (
    <button>{label}</button>
  );
};
