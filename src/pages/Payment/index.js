import { useState } from "react";
import BasePlans from "~/pages/Payment/components/BasePlans";
import BundleSave from "~/pages/Payment/components/BundleSave";
import HeaderPayment from "./components/HeaderPayment";
import FooterPayment from "./components/FooterPayment";

const tabs = ["BASE PLANS", "BUNDLE / SAVE"];
function Payment() {
  const [type, setType] = useState("BASE PLANS");

  return (
    <div className="wrapper ">
      {/* header */}
      <HeaderPayment />

      <div className="bg-[#f7f7f9] px-5 md:px-10">
        {/* body top */}
        <div className="text-center pt-[32px] mb-20">
          <h1 className="text-[28px] md:text-[38px] xl:text-[48px] font-bold text-[#040405]">
            Choose Your Plan
          </h1>
          <p className="text-[#636E85] text-[15px] lg:text-[17px] mt-[5px]">
            Switch plans or cancel anytime.
          </p>
          {/* Button tabs */}
          <div>
            {tabs.map((tab) => (
              <button
                className="mx-5 mt-10 text-[#B9BFC8] text-[14px] font-semibold tracking-widest border-b-[4px] pb-2 border-b-[#ccc]"
                onClick={() => setType(tab)}
                style={
                  type === tab
                    ? {
                        color: "#272c35",
                        borderBottom: "4px solid #000",
                        transition: "all 0.5s linear",
                      }
                    : {}
                }
                key={tab}
              >
                {tab}
              </button>
            ))}
            <div style={type === "BASE PLANS" ? {} : { display: "none" }}>
              <BasePlans
                // title
                titleCol1="Hulu (No Ads)"
                titleCol2="Hulu"
                titleCol3="Hulu + Live TV"
                //
                amount="MOST POPULAR"
                // offer
                offerCol12="Get First Month Free, Then"
                offerCol3="Now with Disney+ and ESPN+"
                // price
                priceCol1="$12.99"
                priceCol2="$6.99"
                priceCol3="$69.99"
                // desc
                descCol1="Our ad-free plan lets you watch exclusive series, hit movies, Originals, kids shows, and tons more with no ad interruptions."
                descCol2="Our ad-supported plan lets you watch exclusive series, hit movies, Originals, kids shows, and tons more."
                descCol3="Access 75+ channels with Live TV, Unlimited DVR, endless, ad-free entertainment with Disney+, live sports with ESPN+, and award-winning Hulu originals with Hulu (ad-supported)."
                // button
                btn="SELECT"
              />
            </div>
            <div style={type === "BUNDLE / SAVE" ? {} : { display: "none" }}>
              <BundleSave
                // title
                title2Col1="Hulu (No Ads)"
                title2Col2="Hulu"
                title2Col3="Hulu (No Ads) + Live TV"
                //
                amount2="SAVE 36% · $7.98 OFF*"
                // image
                image="https://signup.hulu.com/static/images/superbundle-logo-color.svg"
                // price
                price2Col1="$19.99"
                price2Col2="$13.99"
                price2Col3="$75.99"
                // desc
                desc2Col1="Access live sports with ESPN+, endless, ad-free entertainment with Disney+, and award-winning Hulu Originals with Hulu (No Ads)."
                desc2Col2="Access live sports with ESPN+, endless, ad-free entertainment with Disney+, and award-winning Hulu Originals with Hulu (ad-supported). *In monthly savings."
                desc2Col3="Access 75+ channels with Live TV, Unlimited DVR, endless, ad-free entertainment with Disney+, live sports with ESPN+, and award-winning Hulu originals with Hulu (No Ads)."
                // btn
                btn2="SELECT"
              />
            </div>
          </div>
        </div>
        {/* footer */}
        <FooterPayment />
      </div>
    </div>
  );
}

export default Payment;
