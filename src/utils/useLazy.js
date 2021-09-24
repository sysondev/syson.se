import { useEffect } from "react";
import "intersection-observer"; // Polyfill for IOS Safari

export default function useLazy(ref, load) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            load();
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100%" }
    );
    observer.observe(ref.current);
  }, [ref, load]);
}
