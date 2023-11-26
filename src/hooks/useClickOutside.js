import { useEffect } from "react";
import { useRef } from "react";

const useClickOutside = (onClick, listenCapture = true) => {
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClick?.();
      }
    };
    document.addEventListener("click", handler, listenCapture);

    return () => document.removeEventListener("click", handler);
  }, [ref, listenCapture, onClick]);

  return ref;
};

export default useClickOutside;
