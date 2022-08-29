import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, memo } from "react";

function BtnGoToTop() {
  const [showGoToTop, setShowGoToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showGoToTop && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="fixed text-[22px] bottom-10 right-10 bg-primary hover:bg-[#04cd6a] px-3 py-[6px] rounded-md"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      )}
    </>
  );
}

export default memo(BtnGoToTop);
