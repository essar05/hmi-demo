import React from "react";
import "./icon.scss";
import classnames from "classnames";

export enum Icons {
  HOME = "home",
  AIRPLANE = "airplane",
  PEOPLE = "people",
  UMBRELLA = "umbrella",
  FLAG = "flag"
}

export interface IIconProps {
  /**
   * Unicode of the Font Awesome icon
   */
  name: Icons;
  /**
   * Custom CSS class
   */
  className?: string;
}

/**
 * Icon
 */
export const Icon: React.FunctionComponent<IIconProps> = ({name, className}) => {
  return (
    <i className={classnames("fa", "fa-" + name, className)}/>
  );
};
