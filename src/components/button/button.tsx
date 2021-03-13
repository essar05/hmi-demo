import React from "react";
import "./button.scss";

export interface IButtonProps {
  /**
   * The button label
   */
  label: string;
}

/**
 * Button
 */
export const Button: React.FunctionComponent<IButtonProps> = ({label}) => {
  return (
    <button>{label}</button>
  );
};
