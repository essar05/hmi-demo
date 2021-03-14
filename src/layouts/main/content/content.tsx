import React from "react";
import "./content.scss";

export interface IContentProps {}

/**
 * Main layout content wrapper
 */
export const Content: React.FunctionComponent<IContentProps> = () => {
  return (
    <div className="hmi-content"></div>
  );
};
