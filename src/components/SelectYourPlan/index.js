import { memo, useState } from "react";
import { Link } from "react-router-dom";
import LogoSvg from "~/assets/Icons/LogoSvg";

function SelectYourPlan() {
  const tabs = ["BASE PLANS", "BUNDLE / SAVE"];
  const [type, setType] = useState("BASE PLANS");

  return (
    <section className="mt-10 mb-20">
      {/* top */}
      <div className="text-center pb-10">
        {/* title */}
        <p className="text-textGray text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-semibold">
          Select Your Plan
        </p>
        {/* desc */}
        <p className="text-[16px] md:text-[17px] lg:text-[18px] mt-2 tracking-wide px-4 mb-2 md:mb-0">
          No hidden fees, equipment rentals, or installation appointments.
        </p>
        <p className="text-[16px] md:text-[17px] lg:text-[18px] font-semibold tracking-wide">
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
                className="mx-5 lg:mt-8 text-[#B9BFC8] text-[14px] font-semibold tracking-widest border-b-[4px] pb-2 border-b-[#ccc]"
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
              <div className="mt-[11px]">
                <LogoSvg />
              </div>
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
              <p className="text-textGray font-semibold text-[14px] sm:text-[16px] md:text-[18px]">
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
              <p className="text-textGray font-semibold text-[14px] sm:text-[16px] md:text-[18px]">
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
              <p className="text-textGray font-semibold text-[14px] sm:text-[16px] lg:text-[18px]">
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
              <p className="text-textGray font-semibold text-[14px] sm:text-[16px] lg:text-[18px]">
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
              <p className="text-textGray font-semibold text-[14px] sm:text-[16px] lg:text-[18px]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
          <div className="text-center md:text-start text-textGray py-[10px] md:py-5 px-0 border-b border-[#ddd]">
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
      <div className="max-w-[976px] mx-auto text-[12px] text-textGray text-center leading-[18px]">
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
    </section>
  );
}

export default memo(SelectYourPlan);
