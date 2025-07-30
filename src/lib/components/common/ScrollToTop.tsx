import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // For modern browsers (reset scroll position before unmount)
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    };
  }, [pathname]);

  return null;
};
