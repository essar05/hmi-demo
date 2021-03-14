import React from "react";
import "./footer.scss";
import { Button } from "../../../components/button/button";

export interface IFooterProps {}

/**
 * Main layout footer
 */
export const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className="hmi-footer">
      <Button label="Back" />
      <Button label="Inactive Button" disabled />
    </div>
  );
};