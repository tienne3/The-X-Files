import { useEffect, useState } from "react";
import VideoIntro from "~/assets/videos";
import Details from "~/pages/Home/components/Details";
import Episodes from "./components/Episodes";
import Extras from "~/pages/Home/components/Extras";
import SelectYourPlan from "~/components/SelectYourPlan";
import YouMayLAlsoLike from "~/components/YouMayLAlsoLike";
import BtnGoToTop from "~/components/BtnGoToTop";

const tabs = ["EPISODES", "EXTRAS", "DETAILS"];
// this is homepage
function Home() {
  const [type, setType] = useState("EPISODES");
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="wrapper">
      <VideoIntro />
      <section className="mx-5 md:mx-5 lg:mx-10 mt-8 md:mt-0 mb-[50px]">
        {/* button tabs */}
        <div className="border-b border-b-[#ccc]">
          {tabs.map((tab) => (
            <button
              className="text-[#777] hover:text-textBlue mr-8 md:mr-10 pb-3 md:pb-5 text-[14px] font-semibold tracking-widest border-b-[4px] border-b-transparent"
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
      <YouMayLAlsoLike />
      {/*  */}
      <SelectYourPlan />
      <BtnGoToTop />
    </div>
  );
}

export default Home;
