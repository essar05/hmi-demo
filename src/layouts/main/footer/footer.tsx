import React from "react";
import "./footer.scss";

export interface IFooterProps {}

/**
 * Main layout footer
 */
export const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="hmi-footer"></div>
  );
};