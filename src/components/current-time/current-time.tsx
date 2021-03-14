import React, { useEffect, useState } from "react";
import "./current-time.scss";
import { getCurrentTime } from "../../helpers/dateTime";

export interface CurrentTimeProps {}

/**
 * Component displaying current current-time
 */
export const CurrentTime: React.FunctionComponent<CurrentTimeProps> = () => {
  const [time, setTime] = useState<string>(getCurrentTime());

  useEffect(() => {
    setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
  }, []);

  return (
    <div>
      {time}
    </div>
  );
};
