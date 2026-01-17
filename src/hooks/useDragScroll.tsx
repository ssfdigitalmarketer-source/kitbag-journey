// hooks/useDragScroll.ts
import { useRef } from "react";

export const useDragScroll = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!ref.current) return;
    isDown.current = true;
    ref.current.classList.add("drag-scroll");
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };

  const stopDragging = () => {
    if (!ref.current) return;
    isDown.current = false;
    ref.current.classList.remove("drag-scroll");
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  return {
    ref,
    isDragging: isDown, // 👈 expose this
    handlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp: stopDragging,
      onMouseLeave: stopDragging,
    },
  };
};
