import { useEffect, useRef } from "react";

export function useCloseModalOutsideClick(Handler, listenCapturing = true) {
  const ref = useRef(null);
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          Handler();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);
      return function () {
        document.removeEventListener("click", handleClick, listenCapturing);
      };
    },
    [Handler, listenCapturing]
  );
  return ref;
}
