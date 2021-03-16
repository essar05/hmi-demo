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
  /**
   * Custom click handler
   */
  onClick?: () => void;
}

/**
 * Button
 */
export const Button: React.FunctionComponent<IButtonProps> = ({
  label,
  disabled,
  className,
  onClick
}) => {
  const buttonClass = classnames(
    "hmi-button",
    className
  );

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
    >{label}</button>
  );
};
