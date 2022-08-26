import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import VideoIntro from "~/assets/videos";
import Details from "~/pages/Home/components/Details";
import Episodes from "./components/Episodes";
import Extras from "~/pages/Home/components/Extras";
import SelectYourPlan from "~/components/SelectYourPlan";
import YouMayLAlsoLike from "~/components/YouMayLAlsoLike";

const tabs = ["EPISODES", "EXTRAS", "DETAILS"];
// this is homepage
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
      <VideoIntro />
      <section className="mx-5 md:mx-5 lg:mx-10 mt-8 md:mt-0 mb-[50px]">
        {/* button tabs */}
        <div className="border-b border-b-[#ccc]">
          {tabs.map((tab) => (
            <button
              className="text-[#777] hover:text-textBlue mr-8 md:mr-10 pb-3 md:pb-5 text-[14px] font-bold tracking-widest border-b-[4px] border-b-transparent"
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
          className="border-b border-[#ddd] pb-20"
          style={type === "EPISODES" ? {} : { display: "none" }}
        >
          <Episodes />
        </div>

        {/* content 2*/}
        <div
          className=" border-b border-[#ddd] pb-20"
          style={type === "EXTRAS" ? {} : { display: "none" }}
        >
          <Extras />
        </div>

        {/* content 3*/}
        <div
          className=" border-b border-[#ddd] pb-20"
          style={type === "DETAILS" ? {} : { display: "none" }}
        >
          <Details />
        </div>
      </section>

      {/* YOU MAY ALSO LIKE */}
      <section>
        <YouMayLAlsoLike />
      </section>
      {/*  */}
      <SelectYourPlan />
      {showGoToTop && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="fixed text-[22px] bottom-10 right-10 bg-primary hover:bg-[#04cd6a] px-3 py-[6px] rounded-xl"
        >
          <FontAwesomeIcon icon={faAngleUp} />
        </button>
      )}
    </div>
  );
}

export default Home;
