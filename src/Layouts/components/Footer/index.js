import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import icon1 from "~/assets/imgs/icon1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { memo } from "react";

function Footer() {
  return (
    <div className="bg-[#e8eaed] max-w-[1600px] mx-auto text-center">
      {/* footer top */}
      <div className="px-8 md:px-[60px] lg:px-[60px] xl:px-[140px] py-5 sm:py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-x-2 xl:gap-x-4  md:gap-y-8 text-start text-textFooter">
        {/* col 1 */}
        <div className="flex flex-col leading-7 md:pr-3 xl:pr-8 text-[14px]">
          <h3 className="text-[13px] font-semibold text-[#272C34]">BROWSE</h3>
          <Link to={"#"}>Streaming Library</Link>
          <Link to={"#"}>Live TV</Link>
          <Link to={"#"}>Live News</Link>
          <Link to={"#"}>Live Sports</Link>
        </div>

        {/* col 2 */}
        <div className="flex flex-col leading-7 md:pr-3 xl:pr-8 text-[14px] mt-[32px]">
          <Link to={"#"}>TV Shows</Link>
          <Link to={"#"}>Movies</Link>
          <Link to={"#"}>Originals</Link>
          <Link to={"#"}>Networks</Link>
          <Link to={"#"}>Kids</Link>
        </div>

        {/* col 3 */}
        <div className="flex flex-col leading-7 md:pr-3 xl:pr-8 text-[14px] mt-[32px]">
          <Link to={"#"}>
            HBO Max{" "}
            <sup className="text-[9px] tracking-tighter font-semibold">TM</sup>
          </Link>
          <Link to={"#"}>Cinemax</Link>
          <Link to={"#"}>Showtime</Link>
          <Link to={"#"}>STARZ</Link>
        </div>

        {/* col 4 */}
        <div className="flex flex-col leading-7 md:pr-3 xl:pr-8 text-[14px] mt-[32px]">
          <Link to={"#"}>Hulu, Disney+, and ESPN+</Link>
          <Link to={"#"}>Hulu (No Ads), Disney+, and ESPN+</Link>
          <Link to={"#"}>Student Discount</Link>
        </div>

        {/* col 5 */}
        <div className="flex flex-col leading-7 md:pr-3 xl:pr-8 text-[14px] mt-10 sm:mt-5 md:mt-0">
          <h3 className="text-[13px] font-semibold text-[#272C34]">HELP</h3>
          <Link to={"#"}>Account & Billing</Link>
          <Link to={"#"}>Plans & Pricing</Link>
          <Link to={"#"}>Supported Devices</Link>
          <Link to={"#"}>Accessibility</Link>
        </div>

        {/* col 6 */}
        <div className="flex flex-col leading-7 md:pr-3 xl:pr-8 text-[14px] mt-10 sm:mt-5 md:mt-0">
          <h3 className="text-[13px] font-semibold text-[#272C34]">ABOUT US</h3>
          <Link to={"#"}>Shop Hulu</Link>
          <Link to={"#"}>Press</Link>
          <Link to={"#"}>Jobs</Link>
          <Link to={"#"}>Contact</Link>
        </div>
      </div>

      {/* footer bot */}
      <div className="px-5 md:mx-[60px] lg:mx-[60px] xl:mx-[140px] max-w-[1600px] mx-auto border border-t-[#ccc]">
        <div className="text-textFooter text-xl text-start mt-8">
          <a className="mr-8" href="https://www.facebook.com/OfficialTheXFiles">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="mr-8" href="https://twitter.com/thexfiles">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a className="mr-8" href="https://www.youtube.com/c/THEXFILESFOX">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a className="mr-8" href="https://www.instagram.com/thexfilestv/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        {/* footer last */}
        <div className="flex flex-wrap gap-x-10 xl:gap-x-0 leading-7 md:leading-10 items-center justify-around md:justify-between mt-10  text-textFooter text-[13px]">
          <p>© 2022 Hulu, LLC</p>
          <Link className="flex items-center" to={"#"}>
            <img className="mr-2 max-h-5" src={icon1} alt="icon1" />
            About Ads
          </Link>
          <Link to={"#"}>Terms of Use</Link>
          <Link to={"#"}>Privacy Policy</Link>
          <Link to={"#"}>Do Not Sell My Personal Information</Link>
          <Link to={"#"}>Your California Privacy Rights</Link>
          <Link to={"#"}>TV Parental Guidelines</Link>
        </div>
        <div className="mb-5 text-[14px]">
          <p>
            Design by
            <span className="hover:text-red-600 ml-1 font-medium hover:cursor-pointer">
              VM-Tiến
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
