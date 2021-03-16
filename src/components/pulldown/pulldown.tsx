import React, { ReactNode, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./pulldown.scss";
import { Button } from "../button/button";
import { animated, useSpring } from "react-spring";
import { useElementSize } from "../../helpers/useElementSize";
import { useDrag } from "react-use-gesture";
import classnames from "classnames";

export interface IPulldownProps {
  /**
   * The pulldown content
   */
  children?: ReactNode;
}

/**
 * Pulldown
 */
export const Pulldown: React.FunctionComponent<IPulldownProps> = ({children}) => {
  const [ bindSizeListener, {height} ] = useElementSize();

  const [ {y: offset, top}, setSpring ] = useSpring(() => ({y: 0, top: "-100%"}));

  const [ isOpen, setOpen ] = useState<boolean>(false);

  const open = useCallback((immediate = false) => {
    setOpen(true);
    setSpring({y: 0, top: "0", immediate});
  }, [setOpen, setSpring]);

  const close = useCallback((immediate = false) => {
    setOpen(false);
    setSpring({y: - height, top: "0", immediate});
  }, [setOpen, setSpring, height]);

  const handleClickHandler = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, close, open]);

  const bindDragGesture = useDrag(
    (state) => {
      let offset = state.movement[1];

      if (Math.abs(offset) > height / 2) {
        if (!state.down) {
          offset = -height;
        }

        setOpen(false);
      } else {
        if (!state.down) {
          offset = 0;
        }

        setOpen(true);
      }

      setSpring({y: offset});
    },
    {
      rubberband: true,
      bounds: () => ({
        top: - height,
        bottom: 0
      }),
      initial: () => [0, offset.get()],
      delay: 200, // wait 200ms before triggering the handler
      filterTaps: true
    }
  );

  useEffect(() => {
    if (height) {
      close(true);
    }
  }, [height]);

  return ReactDOM.createPortal(
    (
      <div className={classnames("hmi-overlay", { "hmi-overlay--active": isOpen })}>
        <animated.div
          className="hmi-pulldown"
          style={{
            y: offset,
            top: top
          }}
        >
          <div {...bindSizeListener} className="hmi-pulldown-box-container">
            <div  className="hmi-pulldown-box">
              <div className="hmi-pulldown-box-inner">
                <div className="hmi-pulldown-content">
                  {children}
                </div>
                <div className="hmi-pulldown-footer">
                  <Button label="Close" onClick={close}/>
                </div>
              </div>
            </div>
          </div>

          <animated.div {...bindDragGesture()} className="hmi-pulldown-handle-container" onClick={handleClickHandler}>
            <div className="hmi-pulldown-handle"/>
          </animated.div>
        </animated.div>
      </div>
    ),
    document.body
  );
};
