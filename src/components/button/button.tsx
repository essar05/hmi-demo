import React from "react";
import "./button.scss";
import classnames from "classnames";

export interface IButtonProps {
  /**
   * The button label
   */
  label: string;
  /**
   * Specify if the button can be clicked
   */
  disabled?: boolean;
  /**
   * Custom CSS class
   */
  className?: string;
}

/**
 * Button
 */
export const Button: React.FunctionComponent<IButtonProps> = ({
  label,
  disabled,
  className
}) => {
  const buttonClass = classnames(
    "hmi-button",
    className,
    { "hmi-button--disabled": disabled }
  );

  return (
    <button
      className={buttonClass}
      disabled={disabled}
    >{label}</button>
  );
};
