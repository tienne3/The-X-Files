import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

function BundleSave({
  title2Col1,
  image,
  price2Col1,
  desc2Col1,
  btn2,
  amount2,
  title2Col2,
  price2Col2,
  desc2Col2,
  title2Col3,
  price2Col3,
  desc2Col3,
}) {
  return (
    <div className="mx-auto pb-[60px] mt-[50px] auto-cols-[90%] sm:auto-cols-auto w-full items-center grid gap-x-5 sm:gapx-10 lg:gap-x-0 lg:justify-center lg:flex grid-flow-col overflow-x-auto">
      {/* col 1 */}
      <div className="relative w-[330px] px-[30px] h-[485px] shadow-md bg-white">
        {/* title */}
        <p className="text-[20px] text-[#272C35] font-semibold mt-[55px]">
          {title2Col1}
        </p>

        {/* image */}
        <img className="mx-auto mt-5" src={image} alt="logo" />

        {/* price */}
        <p className="font-semibold text-[#272c35] text-[32px] flex items-center justify-center">
          {price2Col1}
          <span className="font-semibold text-[18px] ml-1 mt-1"> / month</span>
        </p>

        {/* desc */}
        <p className="pt-[10px] text-[#636E85] text-[14px] leading-5 tracking-wide">
          {desc2Col1}
        </p>

        {/* btn */}
        <Link to={"/register"}>
          <button className="absolute bottom-[90px] left-[30px] right-[30px] px-[30px] text-[16px] text-[#272C35] font-semibold tracking-wider border-[2px] rounded-md h-[48px] border-[#272C35]">
            {btn2}
          </button>
        </Link>

        {/*  */}
        <div className="flex justify-center">
          <Link
            className="absolute bottom-10 text-textBlue text-[14px]"
            to={"#"}
          >
            Learn More
          </Link>
        </div>

        {/*  */}
        <div className="flex justify-center">
          <div className="flex flex-col absolute -bottom-12">
            <p className="text-[#272c35] text-[12px] flex items-center">
              A few excluded shows play with ads.
              <img
                className="ml-1"
                src="https://signup.hulu.com/static/images/info-icon.svg"
                alt="!"
              />
            </p>

            <Link className="text-textBlue text-[13px]" to={"#"}>
              Bundle Terms Apply
            </Link>
          </div>
        </div>
      </div>

      {/* col 2 */}
      <div className="relative w-[330px] px-[30px] h-[520px] border-t-[4px] border-t-textGreen shadow-md bg-white">
        <button className="text-white bg-textGreen rounded-full text-[12px] tracking-wider font-extrabold px-6 py-2 mt-7 mb-3">
          {amount2}
        </button>
        {/* title */}
        <p className="text-[20px] text-[#272C35] font-semibold">{title2Col2}</p>

        {/* image */}
        <img className="mx-auto mt-5" src={image} alt="logo" />

        {/* price */}
        <p className="font-semibold text-[#272c35] text-[32px] flex items-center justify-center">
          {price2Col2}
          <span className="font-semibold text-[18px] ml-1 mt-1"> / month</span>
        </p>

        {/* desc */}
        <p className="pt-[10px] text-[#636E85] text-[14px] leading-5 tracking-wide">
          {desc2Col2}
        </p>

        {/* btn */}
        <button className="absolute bottom-[107px] left-[30px] right-[30px] px-[30px] text-[16px] bg-[#272C35] text-white font-semibold tracking-wider border-[2px] rounded-md h-[48px] border-[#272C35]">
          {btn2}
        </button>

        {/*  */}
        <div className="flex justify-center">
          <Link
            className="absolute bottom-10 text-textBlue text-[14px]"
            to={"#"}
          >
            Learn More
          </Link>
        </div>
        {/*  */}
        <div className="flex justify-center">
          <Link
            className="absolute -bottom-7 text-textBlue text-[13px]"
            to={"#"}
          >
            Bundle Terms Apply
          </Link>
        </div>
      </div>

      {/* col 3 */}
      <div className="relative w-[330px] px-[30px] h-[485px] shadow-md bg-white">
        {/* title */}
        <p className="text-[20px] text-[#272C35] font-semibold mt-[55px]">
          {title2Col3}
        </p>

        {/* image */}
        <img className="mx-auto mt-5" src={image} alt="logo" />

        {/* price */}
        <p className="font-semibold text-[#272c35] text-[32px] flex items-center justify-center">
          {price2Col3}
          <span className="font-semibold text-[18px] ml-1 mt-1"> / month</span>
        </p>

        {/* desc */}
        <p className="pt-[10px] text-[#636E85] text-[14px] leading-5 tracking-wide">
          {desc2Col3}
        </p>

        {/* btn */}
        <button className="absolute bottom-[90px] left-[30px] right-[30px] px-[30px] text-[16px] text-[#272C35] font-semibold tracking-wider border-[2px] rounded-md h-[48px] border-[#272C35]">
          {btn2}
        </button>

        {/*  */}
        <div className="flex justify-center">
          <Link
            className="absolute bottom-10 text-textBlue text-[14px]"
            to={"#"}
          >
            Learn More
          </Link>
        </div>

        {/*  */}
        <div className="flex justify-center">
          <div className="flex flex-col absolute -bottom-12">
            <p className="text-[#272c35] text-[12px] flex items-center">
              A few excluded shows play with ads.
              <img
                className="ml-1"
                src="https://signup.hulu.com/static/images/info-icon.svg"
                alt="!"
              />
            </p>

            <Link className="text-textBlue text-[13px]" to={"#"}>
              Terms Apply
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

BundleSave.propTypes = {
  title2Col1: PropTypes.string,
  image: PropTypes.string,
  price2Col1: PropTypes.string,
  desc2Col1: PropTypes.string,
  btn2: PropTypes.string,
  amount2: PropTypes.string,
  title2Col2: PropTypes.string,
  price2Col2: PropTypes.string,
  desc2Col2: PropTypes.string,
  title2Col3: PropTypes.string,
  price2Col3: PropTypes.string,
  desc2Col3: PropTypes.string,
};
export default memo(BundleSave);
