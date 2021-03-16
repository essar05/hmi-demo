import React from "react";
import "./scrollbar.scss";

export interface IScrollbarProps {
  /**
   * The scrollbar progress in percentages from 0 to 100
   */
  progress: number;
  /**
   * The progress bar width as a percentage of the scrollbar's width
   */
  progressBarWidth?: number;
}

/**
 * Scrollbar
 */
export const Scrollbar: React.FunctionComponent<IScrollbarProps> = ({progress, progressBarWidth = 20}) => {
  const leftOffset = progress / (100 / (100 - progressBarWidth));

  return (
    <div className="hmi-scrollbar">
      <div
        className="hmi-scrollbar-progress"
        style={{
          width: `${progressBarWidth}%`,
          left: `${leftOffset}%`
        }}
      />
    </div>
  );
};
