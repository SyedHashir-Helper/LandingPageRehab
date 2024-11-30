"use client"
import useSticky from "@/hooks/use-sticky";
import React, { useState, useEffect, useCallback } from "react"; 

type style_type = {
  style?: boolean
}
const ScrollToTop = ({style}: style_type) => {
  const { sticky }: { sticky: boolean } = useSticky();

  const [showScroll, setShowScroll] = useState(false);

  // Memoize the function with useCallback
  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  }, [showScroll]); // Add showScroll as a dependency

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [checkScrollTop]); // Use checkScrollTop in the dependency array

  return (
    <>

   
   <button onClick={scrollTop} className={`scroll-top scroll-to-target ${sticky && "open"}`} data-target="html">
        <i className="far fa-angle-double-up"></i>
    </button>

    </>
  );
};

export default ScrollToTop;
