import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import "./carousel.scss";
import { useDrag, useWheel } from "react-use-gesture";
import { animated, useSpring } from "react-spring";
import { Scrollbar } from "../scrollbar/scrollbar";
import classnames from "classnames";

export interface ICarouselProps {
  children?: ReactNode;
  /**
   * Custom CSS class
   */
  className?: string;
}

interface IItemMetadata {
  width: number;
  offset: number;
}

const RUBBERBAND_WIDTH = 50;

const AnimatedScrollbar = animated(Scrollbar);

/**
 * Display children as a carousel. Use the scroll wheel or click + drag to scroll it
 */
export const Carousel: React.FunctionComponent<ICarouselProps> = ({children, className}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [itemsMetadata, setItemsMetadata] = useState<IItemMetadata[]>([]);

  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const [lowerBound, setLowerBound] = useState<number>(0);
  const [upperBound] = useState<number>(0);

  const [{x: carouselOffset}, setCarouselOffset] = useSpring(() => ({x: 0}));

  // returns the html element corresponding to the item at the requested index
  const getItemElement = useCallback((index: number): HTMLElement => {
    return carouselRef.current?.children[index] as HTMLElement;
  }, [carouselRef]);

  // returns the left side offset of the closest item to the current offset
  const getSnapOffset = useCallback((currentOffset: number): number => {
    if (lowerBound === 0) {
      return 0;
    }

    const snapToItemIndex = itemsMetadata.findIndex(itemMetadata => {
      return Math.abs(currentOffset) <= itemMetadata.offset + itemMetadata.width / 2;
    });

    if (snapToItemIndex !== -1) {
      return -itemsMetadata[snapToItemIndex].offset;
    }

    return currentOffset;
  }, [itemsMetadata, lowerBound]);

  // returns the lower offset of the scrolling bounds
  const getLowerBound = useCallback((): number => {
    const bound = - Math.max(carouselWidth - containerWidth, 0);

    if (bound === 0) {
      return bound;
    }

    let availableWidth = containerWidth;

    for (let itemIndex = itemsMetadata.length - 1; itemIndex >= 0; itemIndex--) {
      const itemWidth = itemsMetadata[itemIndex].width;

      if (availableWidth < itemWidth) {
        break;
      }

      availableWidth -= itemsMetadata[itemIndex].width;
    }

    return bound - availableWidth;
  }, [carouselWidth, containerWidth, itemsMetadata]);

  // (re)initializes state
  const initialize = useCallback(() => {
    const itemCount = React.Children.count(children);
    const metadata: IItemMetadata[] = [];

    for (let itemIndex = 0; itemIndex < itemCount; itemIndex++) {
      const item = getItemElement(itemIndex);

      metadata[itemIndex] = {
        width: item ? item.clientWidth : 0,
        offset: item ? (item.offsetLeft) : 0
      };
    }

    setCarouselOffset({x: 0});

    setItemsMetadata(metadata);

    containerRef.current && setContainerWidth(containerRef.current.clientWidth);
    carouselRef.current && setCarouselWidth(carouselRef.current?.clientWidth);
  }, [children, setItemsMetadata, containerRef, carouselRef]);

  const bindDragGesture = useDrag(
    (state) => {
      let offset = state.movement[0];

      // snap to the closest item when the user has stopped dragging
      if (!state.down) {
        offset = getSnapOffset(offset);
      }

      return setCarouselOffset({x: offset});
    },
    {
      rubberband: true,
      bounds: () => ({
        left: lowerBound,
        right: upperBound
      }),
      initial: () => [carouselOffset.get(), 0], // will calculate movement starting from the current carousel offset
      delay: 200, // wait 200ms before triggering the handler
      filterTaps: true
    }
  );

  const bindWheelGesture = useWheel(
    (state) => {
      let offset = state.movement[1];

      // must handle the lower bound manually for the wheel gesture (the config option seems to be broken)
      if (offset < lowerBound - RUBBERBAND_WIDTH) {
        offset = lowerBound - RUBBERBAND_WIDTH;
      }

      // must handle the upper bound manually for the wheel gesture (the config option seems to be broken)
      if (offset > upperBound + RUBBERBAND_WIDTH) {
        offset = upperBound + RUBBERBAND_WIDTH;
      }

      // snap to the closest item when the user has stopped wheeling
      if (!state.wheeling) {
        offset = getSnapOffset(offset);
      }

      return setCarouselOffset({x: offset});
    },
    {
      initial: () => [0, carouselOffset.get()]
    }
  );

  useEffect(() => {
    // reinitialize state when the children change or the carousel width changes
    initialize();
  }, [children, carouselRef.current?.clientWidth]);

  useEffect(() => {
    // recalculate the lower bound when the container or carousel widths change
    setLowerBound(getLowerBound());
  }, [containerWidth, carouselWidth]);

  useEffect(() => {
    const resizeListener = () => {
      initialize();
    };

    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div className={classnames("hmi-carousel-container", className)} ref={containerRef}>
      <animated.div
        className="hmi-carousel"
        {...bindDragGesture()}
        {...bindWheelGesture()}
        style={{
          x: carouselOffset
        }}
        ref={carouselRef}
      >
        {React.Children.map(children, child => (
          <div>
            {child}
          </div>
        ))}
      </animated.div>

      <AnimatedScrollbar progress={carouselOffset.to((offset) => offset / lowerBound * 100)} />
    </div>
  );
};
