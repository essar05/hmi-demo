import React, { useCallback, useState } from "react";
import "./program.scss";
import { Icon, Icons } from "../icon/icon";
import classnames from "classnames";

export interface IProgramProps {
  icon: Icons;
  title: string;
  subtitle?: string;
  onClick?: (event: React.MouseEvent) => void;
}

/**
 * Program
 */
export const Program: React.FunctionComponent<IProgramProps> = ({
  icon, title, subtitle, onClick
}) => {
  const [isActive, setActive] = useState<boolean>(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();

  const clickHandler = useCallback((event: React.MouseEvent) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setActive(true);

    setTimeoutId(setTimeout(() => {
      setActive(false);
      setTimeoutId(undefined);
    }, 200));

    onClick && onClick(event);
  }, [onClick]);

  return (
    <div
      className={classnames("hmi-program", {"hmi-program--active": isActive})}
      onClick={clickHandler}
    >
      <Icon className="hmi-program-icon" name={icon}/>
      <div className="hmi-program-title">
        {title}
      </div>
      <div className="hmi-program-subtitle">
        {subtitle}
      </div>
    </div>
  );
};
