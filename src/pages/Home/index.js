import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Details from "~/components/Details";
import Episodes from "~/components/Episodes";
import Extras from "~/components/Extras";
import SelectYourPlan from "~/components/SelectYourPlan";

const tabs = ["EPISODES", "EXTRAS", "DETAILS"];
function Home() {
  const [type, setType] = useState("EPISODES");
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
    <div className="wrapper">
      <div className="mx-5 md:mx-5 lg:mx-10 mt-8 md:mt-0 mb-[50px]">
        {/* button tabs */}
        <div className="border-b border-b-[#ccc]">
          {tabs.map((tab) => (
            <button
              className="text-[#777] hover:text-[#176ee1] mr-8 md:mr-10 pb-3 md:pb-5 text-[14px] font-bold tracking-widest border-b-[4px] border-b-transparent"
              onClick={() => setType(tab)}
              style={
                type === tab
                  ? {
                      color: "#16181D",
                      borderBottom: "4px solid #FF3333",
                      transition: "all .6s linear",
                    }
                  : {}
              }
              key={tab}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* content 1*/}
        <div
          className=" border-b border-[#ddd] pb-20"
          style={
            type === "EPISODES" ? { backgroundColor: "" } : { display: "none" }
          }
        >
          <Episodes />
        </div>

        {/* content 2*/}
        <div
          className=" border-b border-[#ddd] pb-20"
          style={
            type === "EXTRAS" ? { backgroundColor: "" } : { display: "none" }
          }
        >
          <Extras />
        </div>

        {/* content 3*/}
        <div
          className=" border-b border-[#ddd] pb-20"
          style={
            type === "DETAILS" ? { backgroundColor: "" } : { display: "none" }
          }
        >
          <Details />
        </div>
      </div>
      <SelectYourPlan />
      {showGoToTop && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="fixed text-[22px] bottom-10 right-10 bg-primary hover:bg-[#04cd6a] px-3 py-2 rounded-xl"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      )}
    </div>
  );
}

export default Home;
