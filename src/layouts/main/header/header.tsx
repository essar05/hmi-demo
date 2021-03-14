import React from "react";
import "./header.scss";
import { Breadcrumbs } from "../../../components/breadcrumbs/breadcrumbs";
import { CurrentTime } from "../../../components/current-time/current-time";
import { Icon, Icons } from "../../../components/icon/icon";

export interface IHeaderProps {}

/**
 * Main layout header
 */
export const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <div className="hmi-header">
      <Breadcrumbs className="hmi-header-left" items={breadcrumbs}/>
      <div className="hmi-header-right">
        <CurrentTime/>
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