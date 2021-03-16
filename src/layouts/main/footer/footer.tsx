import React from "react";
import "./footer.scss";
import { Button } from "../../../components/button/button";

/**
 * Main layout footer
 */
export const Footer: React.VoidFunctionComponent = () => {
  return (
    <div className="hmi-footer">
      <Button label="Back" />
      <Button label="Inactive Button" disabled />
    </div>
  );
};