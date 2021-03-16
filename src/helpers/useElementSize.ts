import { useEffect, useRef, useState } from "react";

export const useElementSize = (): [any, {width: number; height: number}] => {
  const ref = useRef<Element>();

  const [ size, setSize ] = useState({width: 0, height: 0});
  const [ resizeObserver ] = useState(() => new ResizeObserver(
    ([ entry ]) => setSize({
      width: entry.contentRect.width,
      height: entry.contentRect.height
    })
  ));

  useEffect(() => {
    ref.current && resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return [ {ref}, size ];
};