import React, { ReactNode } from "react";
import "./content.scss";

export interface IContentProps {
  /**
   * The actual content
   */
  children?: ReactNode;
}

/**
 * Main layout content wrapper
 */
export const Content: React.FunctionComponent<IContentProps> = ({children}) => {
  return (
    <div className="hmi-content">
      {children}
    </div>
  );
};
