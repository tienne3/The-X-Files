import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = ["BASE PLANS", "BUNDLE / SAVE"];
function SelectYourPlan() {
  const [type, setType] = useState("BASE PLANS");

  return (
    <div className="mt-10 mb-20">
      {/* top */}
      <div className="text-center pb-10">
        {/* title */}
        <p className="text-[#272c34] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-bold">
          Select Your Plan
        </p>
        {/* desc */}
        <p className="text-[16px] md:text-[17px] lg:text-[18px] mt-2 tracking-wide">
          No hidden fees, equipment rentals, or installation appointments.
        </p>
        <p className="text-[16px] md:text-[17px] lg:text-[18px] font-bold tracking-wide">
          Switch plans or cancel anytime.^^
        </p>
      </div>

      {/* body */}
      <div className="max-w-[976px] mx-auto flex flex-col lg:flex-row mt-4 pb-6 border-b border-[#ddd]">
        <div className="md:w-full lg:w-[400px]">
          {/* button tabs */}
          <div>
            {tabs.map((tab) => (
              <button
                className="mx-5 lg:mt-8 text-[#B9BFC8] text-[14px] font-bold tracking-widest border-b-[4px] pb-2 border-b-[#ccc]"
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
            <div className="flex justify-around items-center mt-2 md:mx-5 mb-10">
              <svg
                className="mt-[12px]"
                viewBox="0 -2 61 24"
                height="20"
                width="51"
                role="img"
                aria-labelledby="logoTitle"
                fill="#1ce783"
              >
                <title id="logoTitle">hulu</title>
                <path
                  d="M9.57046613 6.24096927h-3.1015504c-1.0875017 
                      0-1.63435327.29263768-1.63435327.29263768V0H0v20h4.83456246v-8.0704467c0-.7137436.58067743-1.29171 
                      1.2958127-1.29171h2.81374862c.7162628 0 1.29524892.5779664 1.29524892 
                      1.29171V20h4.8359719v-8.6950777c0-3.65670596-2.4444829-5.06395303-5.50487847-5.06395303zm46.48012787 0v8.06932223c0 
                      .714868-.579268 1.2931156-1.294967 1.2931156h-2.8134668c-.7162628 0-1.2952489-.5782476-1.2952489-1.2931156V6.24096927h-4.8368175V14.712844c0 
                      3.4627386 2.2220777 5.287156 5.5062878 5.287156h4.7347762v-.0247379c3.0245965 0 4.8354081-2.1465718 
                      4.8354081-5.2624181V6.24096927H56.050594zM28.7728487 14.3102915c0 .714868-.5798318 1.2931156-1.2955308 
                      1.2931156h-2.8137486c-.7162628 0-1.2955308-.5782476-1.2955308-1.2931156V6.24096927h-4.8359719V14.712844c0 
                      3.4627386 2.2220778 5.287156 5.506006 5.287156h4.7347761v-.0247379c3.0248785 0 4.8359719-2.1465718 
                      4.8359719-5.2624181V6.24096927h-4.8359719v8.06932223zM37.294431 20h4.8365357V0H37.294431v20z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <img
                src="https://www.hulu.com/static/hitch/static/logos/bundles.svg"
                alt="brand"
              />
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex-1">
          {/* BASE PLANS */}
          <div className="grid grid-cols-2 w-full text-center">
            {/* col1 */}
            <div
              className="relative px-2"
              style={
                type === "BASE PLANS"
                  ? { backgroundColor: "" }
                  : { display: "none" }
              }
            >
              <div className="flex justify-center my-5">
                <button className="absolute top-0 bg-[#04cd6a] text-[#16181D] text-[10px] tracking-wider font-semibold px-4 py-[6px] rounded-full">
                  MOST POPULAR
                </button>
              </div>
              <p className="text-[#888888] text-[14px] font-semibold tracking-wider mt-4 mb-[3px]">
                30 DAY FREE TRIAL
              </p>
              <p className="text-[#272c34] font-bold text-[14px] sm:text-[16px] md:text-[18px]">
                Hulu
              </p>
              <Link to={"/register"}>
                <button className="bg-textColorPrimary font-semibold hover:bg-[#3c3d3f] duration-300 tracking-normal sm:tracking-wider text-[14px] text-white w-full h-[40px] sm:h-[48px] rounded-md mt-3">
                  $6.99 / MONTH
                </button>
              </Link>
            </div>
            {/* col2 */}
            <div
              className="px-1 sm:px-2 mt-6"
              style={
                type === "BASE PLANS"
                  ? { backgroundColor: "" }
                  : { display: "none" }
              }
            >
              <p className="text-[#888888] text-[14px] font-semibold tracking-wider mt-4 mb-[3px]">
                30 DAY FREE TRIAL
              </p>
              <p className="text-[#272c34] font-bold text-[14px] sm:text-[16px] md:text-[18px]">
                Hulu
              </p>
              <Link to={"/register"}>
                <button className="bg-textColorPrimary font-semibold hover:bg-[#3c3d3f] duration-300  tracking-normal sm:racking-wider text-[12px] sm:text-[13px] md:text-[14px] text-white w-full h-[40px] sm:h-[48px] rounded-md mt-3">
                  $12.99 / MONTH
                </button>
              </Link>
            </div>
          </div>
          {/* BUNDLE / SAVE */}
          <div className="grid grid-cols-3 w-full text-center">
            {/* col 1 */}
            <div
              className="relative px-1 sm:px-2"
              style={
                type === "BUNDLE / SAVE"
                  ? { backgroundColor: "" }
                  : { display: "none" }
              }
            >
              <div className="flex justify-center my-5">
                <button className="absolute top-0 bg-[#04cd6a] text-[#16181D] text-[10px] tracking-wider font-semibold px-3 md:px-4 py-[6px] rounded-full">
                  MOST POPULAR
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://www.hulu.com/static/hitch/static/logos/plan-bundle.svg"
                  alt="logo"
                />
              </div>
              <p className="text-[#272c34] font-bold text-[14px] sm:text-[16px] lg:text-[18px]">
                Hulu
              </p>
              <Link to={"/register"}>
                <button className="bg-textColorPrimary font-semibold hover:bg-[#3c3d3f] duration-300  tracking-normal sm:racking-wider text-[12px] sm:text-[13px] md:text-[14px] text-white w-full h-[40px] sm:h-[48px] rounded-md mt-3">
                  $13.99 / MONTH
                </button>
              </Link>
            </div>

            {/* col 2 */}
            <div
              className="px-1 sm:px-2 mt-6"
              style={
                type === "BUNDLE / SAVE"
                  ? { backgroundColor: "" }
                  : { display: "none" }
              }
            >
              <div className="flex justify-center">
                <img
                  className="mt-4"
                  src="https://www.hulu.com/static/hitch/static/logos/plan-bundle.svg"
                  alt="logo"
                />
              </div>
              <p className="text-[#272c34] font-bold text-[14px] sm:text-[16px] lg:text-[18px]">
                Hulu (No Ads)
              </p>
              <Link to={"/register"}>
                <button className="bg-textColorPrimary font-semibold hover:bg-[#3c3d3f] duration-300  tracking-normal sm:racking-wider text-[12px] sm:text-[13px] md:text-[14px] text-white w-full h-[40px] sm:h-[48px] rounded-md mt-3">
                  $19.99 / MONTH
                </button>
              </Link>
            </div>

            {/* col 3 */}
            <div
              className="px-1 sm:px-2 mt-6"
              style={
                type === "BUNDLE / SAVE"
                  ? { backgroundColor: "" }
                  : { display: "none" }
              }
            >
              <div className="flex justify-center">
                <img
                  className="mt-4"
                  src="https://www.hulu.com/static/hitch/static/logos/plan-bundle.svg"
                  alt="logo"
                />
              </div>
              <p className="text-[#272c34] font-bold text-[14px] sm:text-[16px] lg:text-[18px]">
                Hulu + LIVE TV
              </p>
              <Link to={"/register"}>
                <button className="bg-textColorPrimary font-semibold hover:bg-[#3c3d3f] duration-300  tracking-normal sm:racking-wider text-[12px] sm:text-[13px] md:text-[14px] text-white w-full h-[40px] sm:h-[48px] rounded-md mt-3">
                  $69.99 / MONTH
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
      </div>

      {/* C1 */}
      <div
        className="max-w-[976px] mx-5 md:mx-10 lg:mx-auto flex flex-col md:flex-row mt-4 pb-6"
        style={
          type === "BASE PLANS" ? { backgroundColor: "" } : { display: "none" }
        }
      >
        {/* desc, check mobile */}
        <div className="md:w-full lg:w-[400px] text-[14px]">
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Monthly price
            <div className="flex justify-around text-[14px] mt-2 pb-1 md:hidden">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Up to 6 user profiles
            <div className="flex justify-around text-[14px] mt-2 pb-1 md:hidden">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Most new episodes the day after they air^
            <div className="flex justify-around text-[14px] mt-2 pb-1 md:hidden">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Access to award-winning Hulu Originals
            <div className="flex justify-around text-[14px] mt-2 pb-1 md:hidden">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Watch on your TV, laptop, phone, or tablet
            <div className="flex justify-around text-[14px] mt-2 pb-1 md:hidden">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            No ads in streaming library
            <div className="flex justify-around text-[14px] mt-2 pb-1 md:hidden">
              <div className="flex justify-center text-[14px]">
                <p className="font-black">_</p>
              </div>
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Download and watch
            <div className="flex justify-around text-[14px] mt-2 pb-1 md:hidden">
              <div className="flex justify-center text-[14px]">
                <p className="font-black">_</p>
              </div>
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
        </div>
        {/* check --pc*/}
        <div className="md:w-full lg:flex-1 text-[14px]">
          {/* col1 */}
          <div className="hidden md:grid grid-cols-2 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div>
              <p>$6.99 / month</p>
            </div>
            <div>
              <p>$12.99 / month</p>
            </div>
          </div>
          {/* col 2 */}
          <div className="hidden md:grid grid-cols-2 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          {/* col 3 */}
          <div className="hidden md:grid grid-cols-2 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          {/* col 4 */}
          <div className="hidden md:grid grid-cols-2 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          {/* col 5 */}
          <div className="hidden md:grid grid-cols-2 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>

          {/* col 6 */}
          <div className="hidden md:grid grid-cols-2 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px]">
              <p className="font-black">_</p>
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          {/* col 7 */}
          <div className="hidden md:grid grid-cols-2 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px]">
              <p className="font-black">_</p>
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>

          {/*  */}
        </div>
      </div>

      {/* C 2 */}
      <div
        className="max-w-[976px] mx-5 md:mx-10 lg:mx-auto flex flex-col md:flex-row mt-4 pb-6"
        style={
          type === "BUNDLE / SAVE"
            ? { backgroundColor: "" }
            : { display: "none" }
        }
      >
        {/* desc, check mobile */}
        <div className="md:w-full lg:w-[400px] text-[14px]">
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Monthly price. Save up to $7.98 / month*
            <div className="flex justify-between mx-6 text-[14px] mt-2 pb-1 md:hidden">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />{" "}
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Most new episodes the day after they air^
            <div className="flex justify-between mx-6 text-[14px] mt-2 pb-1 md:hidden">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />{" "}
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Access to award-winning Hulu Originals
            <div className="flex justify-between mx-6 text-[14px] mt-2 pb-1 md:hidden">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />{" "}
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Watch on your TV, laptop, phone, or tablet
            <div className="flex justify-between mx-6 text-[14px] mt-2 pb-1 md:hidden">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />{" "}
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            No ads in Hulu streaming library
            <div className="flex justify-between mx-6 text-[14px] mt-2 pb-1 md:hidden">
              <div className="flex justify-center text-[14px]">
                <p className="font-black">_</p>
              </div>
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Live TV with 75+ top channels. No cable required.
            <div className="flex justify-between mx-6 text-[14px] mt-2 pb-1 md:hidden">
              <div className="flex justify-center text-[14px]">
                <p className="font-black">_</p>
              </div>
              <div className="flex justify-center text-[14px]">
                <p className="font-black">_</p>
              </div>
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          <div className="text-center md:text-start text-[#272c34] py-[10px] md:py-5 px-0 border-b border-[#ddd]">
            Record Live TV with Unlimited DVR
            <div className="flex justify-between mx-6 text-[14px] mt-2 pb-1 md:hidden">
              <div className="flex justify-center text-[14px]">
                <p className="font-black">_</p>
              </div>
              <div className="flex justify-center text-[14px]">
                <p className="font-black">_</p>
              </div>
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
        </div>
        {/* check --pc*/}
        <div className="md:w-full lg:flex-1 text-[14px]">
          {/* col1 */}
          <div className="hidden md:grid grid-cols-3 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div>
              <p>$13.99 / month</p>
            </div>
            <div>
              <p>$19.99 / month</p>
            </div>
            <div>
              <p>$69.99 / month</p>
            </div>
          </div>
          {/* col 2 */}
          <div className="hidden md:grid grid-cols-3 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          {/* col 3 */}
          <div className="hidden md:grid grid-cols-3 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          {/* col 4 */}
          <div className="hidden md:grid grid-cols-3 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          {/* col 5 */}
          <div className="hidden md:grid grid-cols-3 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px]">
              <p className="font-black">_</p>
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>

          {/* col 6 */}
          <div className="hidden md:grid grid-cols-3 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px]">
              <p className="font-black">_</p>
            </div>
            <div className="flex justify-center text-[14px]">
              <p className="font-black">_</p>
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
          {/* col 7 */}
          <div className="hidden md:grid grid-cols-3 w-full text-center py-5 px-0 border-b border-[#ddd]">
            <div className="flex justify-center text-[14px]">
              <p className="font-black">_</p>
            </div>
            <div className="flex justify-center text-[14px]">
              <p className="font-black">_</p>
            </div>
            <div className="flex justify-center text-[14px] pb-1">
              <img
                src="https://www.hulu.com/static/hitch/static/icons/Pricing_Checkmark_green-dark.svg"
                alt="check"
              />
            </div>
          </div>
        </div>
      </div>
      {/* last */}
      <div className="max-w-[976px] mx-auto text-[12px] text-[#272c34] text-center leading-[18px]">
        <div className="mx-5">
          <p>^For current-season shows in the streaming library only</p>
          <p>
            ^^Switches from Live TV to Hulu take effect as of the next billing
            cycle
          </p>
          <p>
            *Savings of up to $7.98/month compared to regular price of each
            service. 18+ only. Access content from each service separately, and
            access ESPN+ content via Hulu. Offer valid for eligible subscribers
            only. Subject to Bundle Terms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SelectYourPlan;
