import SelectYourPlan from "~/components/SelectYourPlan";
import YouMayLAlsoLike from "~/components/YouMayLAlsoLike";
import { useEffect, useState } from "react";
import DetailsFightTheFuture from "./components/DetailsFightTheFuture";
import ItemsFightTheFuture from "./components/ItemsFightTheFuture";
import Footer from "~/Layouts/components/Footer";
import HeaderFightTheFuture from "./components/HeaderFightTheFuture";
import BtnGoToTop from "~/components/BtnGoToTop";

const tabs = ["YOU MAY ALSO LIKE", "DETAILS"];
function FightTheFuture() {
  const [type, setType] = useState("YOU MAY ALSO LIKE");
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <HeaderFightTheFuture />
      <section className="mx-5 md:mx-5 lg:mx-10 mt-8 md:mt-0 mb-[50px]">
        <div className="border-b border-b-[#ccc]">
          {tabs.map((tab) => (
            <button
              className="text-[#777] hover:text-textBlue mr-8 md:mr-10 pb-3 md:pb-5 text-[14px] font-semibold tracking-widest border-b-[4px] border-b-transparent"
              onClick={() => setType(tab)}
              style={
                type === tab
                  ? {
                      color: "#16181D",
                      borderBottom: "4px solid #3377ff",
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
          style={type === "YOU MAY ALSO LIKE" ? {} : { display: "none" }}
        >
          <ItemsFightTheFuture />
        </div>

        {/* content 2*/}
        <div
          className=" border-b border-[#ddd] pb-20"
          style={type === "DETAILS" ? {} : { display: "none" }}
        >
          <DetailsFightTheFuture />
        </div>
      </section>
      <YouMayLAlsoLike />
      <SelectYourPlan />
      <BtnGoToTop />
      <Footer />
    </div>
  );
}

export default FightTheFuture;
