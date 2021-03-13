import React from "react";
import "./main-layout.scss";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { CurrentTime } from "../current-time/current-time";
import { Icon, Icons } from "../icon/icon";

export interface IMainLayoutProps {}

/**
 * Main layout
 */
export const MainLayout: React.FunctionComponent<IMainLayoutProps> = () => {
  return (
    <div className="hmi-main">
      <div className="hmi-header">
        <Breadcrumbs className="hmi-header-left" items={breadcrumbs}/>
        <div className="hmi-header-right">
          <CurrentTime/>
        </div>
      </div>
      <div className="hmi-content">

      </div>
      <div className="hmi-footer">

      </div>
    </div>
  );
};

const breadcrumbs = [
  {
    label: <Icon name={Icons.HOME}/>
  },
  {
    label: "Programmes"
  },
  {
    label: "Favorites"
  }
];