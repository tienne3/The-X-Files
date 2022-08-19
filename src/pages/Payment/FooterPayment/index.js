import { Link } from "react-router-dom";
import icon1 from "~/assets/imgs/icon1.png";

function FooterPayment() {
  return (
    <div>
      <footer className="bg-[#f7f7f9] py-10 text-center">
        <ul className="text-[14px] flex justify-center flex-wrap px-[20px] lg:px-0 items-center text-[#636E85]">
          <li className="py-1 px-2 lg:px-5 md:px-[10px] flex items-center">
            <img className="mr-2" src={icon1} alt="icon1" />
            <Link to={"#"}>About Ads</Link>
          </li>
          <li className="py-1 px-2 lg:px-5 md:px-[10px]">
            <Link to={"#"}>Terms of Use</Link>
          </li>
          <li className="py-1 px-2 lg:px-5 md:px-[10px]">
            <Link to={"#"}>Privacy Policy</Link>
          </li>
          <li className="py-1 px-2 lg:px-5 md:px-[10px]">
            <Link to={"#"}>Do Not Sell My Personal Information</Link>
          </li>
          <li className="py-1 px-2 lg:px-5 md:px-[10px]">
            <Link to={"#"}>Your California Privacy Rights</Link>
          </li>
          <li className="py-1 px-2 lg:px-5 md:px-[10px]">
            <Link to={"#"}>© 2022 Hulu, LLC</Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default FooterPayment;
