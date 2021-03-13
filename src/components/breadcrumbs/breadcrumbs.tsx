import React, { ReactNode } from "react";
import "./breadcrumbs.scss";
import classnames from "classnames";

export interface IBreadcrumb {
  label: ReactNode;
}

export interface IBreadcrumbsProps {
  /**
   * A list of breadcrumb items
   */
  items: IBreadcrumb[];
  /**
   * Custom CSS class
   */
  className?: string;
}

/**
 * Breadcrumbs
 */
export const Breadcrumbs: React.FunctionComponent<IBreadcrumbsProps> = ({items, className}) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={classnames("hmi-breadcrumbs", className)}>
      {items.map((item, itemIndex) => (
        <div key={itemIndex} className="hmi-breadcrumb">
          {item.label}
        </div>
      ))}
    </div>
  );
};
