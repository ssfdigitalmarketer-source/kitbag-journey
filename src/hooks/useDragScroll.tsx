// hooks/useDragScroll.ts
import { useRef } from "react";

export const useDragScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    isDown = true;
    ref.current.classList.add("drag-scroll");
    startX = e.pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft;
  };

  const stopDragging = () => {
    if (!ref.current) return;
    isDown = false;
    ref.current.classList.remove("drag-scroll");
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  return {
    ref,
    handlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp: stopDragging,
      onMouseLeave: stopDragging,
    },
  };
};
