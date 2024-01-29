/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";

const useHover = () => {
  const ref = useRef<any>(null);
  const [hovered, setHover] = useState(false);

  const handleMouseHover = useCallback(() => {
    setHover(!hovered);
  }, [hovered]);

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.addEventListener("mouseover", handleMouseHover);
      ref.current.addEventListener("mouseout", handleMouseHover);
    }
    return () => {
      ref.current.addEventListener("mouseover", handleMouseHover);
      ref.current.addEventListener("mouseout", handleMouseHover);
    };
  }, [ref, hovered]);

  return { hovered, ref };
};

export default useHover;
