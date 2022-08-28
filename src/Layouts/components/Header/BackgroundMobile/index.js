import bg2 from "~/assets/imgs/bg2.jpg";
import { Link } from "react-router-dom";
import brand from "~/assets/imgs/brand.png";
import { useEffect, useState } from "react";
import ModalMore from "~/pages/Home/components/ModalMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuMobile from "~/components/MenuMobile";
import LogoSvg from "~/assets/Icons/LogoSvg";

function BackgroundMobile() {
  const [modalMore, setModalMore] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // đóng, mở showMenu
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  // //////////
  // đóng modal more
  const handleModalMore = () => {
    setModalMore(!modalMore);
  };
  // đóng login modal
  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 27) {
        setModalMore(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div>
      {/* background-Mobile1 */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <img
            className=" object-cover z-10 w-full sm:h-[800px] sm:object-top"
            alt="TheXFiles"
            src={bg2}
          />

          {/* header top */}
          <div className="w-full absolute z-50 top-[17px] ">
            <div className="flex items-center justify-between mx-6">
              {/* logo hulu */}
              <Link to={"/series-TheX-Files"}>
                <LogoSvg />
              </Link>

              {/*  */}
              <div className="text-[#fff] font-bold flex items-center">
                <Link
                  to={"/payment"}
                  className="text-[13px] tracking-wide bg-transparent mr-3 hover:bg-[#0b0c0fCC] px-5 py-[10px] bg-opacity-0 hover:opacity-100 duration-200 rounded"
                >
                  START YOUR FREE TRIAL
                </Link>
                <button
                  onClick={handleShowMenu}
                  className="font-bold px-[20px] py-[10px] text-[14px] bg-[#323843] rounded-lg hover:bg-[#0b0c0fCC]"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
                <div>{showMenu && <MenuMobile onClick={handleShowMenu} />}</div>
              </div>
            </div>
          </div>
          {/* header mid */}
          <div className="mx-5 absolute z-10 bottom-[248px] text-white">
            <p className="text-[11px] mb-1 font-semibold tracking-wider text-white opacity-70">
              11 SEASONS AVAILABLE (218 EPISODES)
            </p>
            {/* title */}
            <h1 className="text-[34px]">The X-Files</h1>
            {/* desc */}
            <p className="text-[14px] tracking-wider mt-2">
              The truth is out there. FBI agents Scully and Mulder seek it in
              th... {/* more */}
              <button
                onClick={handleModalMore}
                className="font-semibold text-[13px]"
              >
                MORE
              </button>
            </p>
            <div>{modalMore && <ModalMore onClick={handleModalMore} />}</div>
            <p className="text-[13px] mt-2 mb-3">
              <span className="font-semibold">Starring: </span>
              <span className="opacity-80">
                Gillian Anderson, David Duchovny, Mitch Pileggi
              </span>
            </p>
            <div>
              <span className=" text-[13px]">
                <p className="">
                  TV14 <span className="opacity-80">- Science Fiction, </span>
                  Cops & Detectives, Aliens,
                  <span className="opacity-80">
                    {" "}
                    Thriller, Drama, Horror,
                  </span>{" "}
                  Supernatural - <span className="opacity-80">TV Series</span>
                  1993
                </p>
              </span>
            </div>

            {/* HD */}
            <div className="mt-1">
              <button className=" px-[6px] bg-white text-black rounded border border-[#ccc] text-[10px] font-bold">
                HD
              </button>
            </div>

            {/* btn */}
            <div className="mt-4 mb-[5px] w-full flex justify-center">
              <Link
                to={"/payment"}
                className="text-[14px] w-full h-[44px] text-center px-6 py-[11px] tracking-wider font-bold rounded bg-white hover:bg-[#ffffffCC] duration-300 text-[#040405]"
              >
                START YOUR FREE TRIAL
              </Link>
            </div>
            <p className="opacity-70 text-[10px] text-center font-normal tracking-wider text-white">
              New subscribers only.
            </p>
          </div>

          {/* @@ */}
          <div className="absolute opacity-30 z-0 w-full top-0 bottom-0 bg-gradient-to-b from-black to-red-600"></div>
          <div className="absolute opacity-80 z-0 w-full top-0 bottom-0 bg-gradient-to-t from-red-700"></div>
          <div className="absolute opacity-90 z-0 -left-10 max-w-[1000px] top-0 bottom-0 h-[60px] blur-2xl bg-gradient-to-t from-black to-gray-800"></div>
          <div className="relative opacity-100 z-0 w-full top-0 h-[220px] bg-gradient-to-t from-red-900 to-black"></div>

          {/* header bot */}
          <div className=" absolute opacity-70 w-full bg-gradient-to-t from-black to-black"></div>
          <div className="absolute flex flex-col items-center w-full bottom-7 z-60 text-white opacity-100">
            <div className="text-center">
              <p className="text-primary font-medium pb-[6px] text-[13px] tracking-wide leading-3">
                BUNDLE WITH ANY HULU PLAN & SAVE
              </p>
              <div className="flex justify-center">
                <img className="w-40" src={brand} alt="brand" />
              </div>

              <div className="flex justify-center">
                <p className="font-normal mt-[6px] tracking-wide text-[14px]">
                  Get all three.
                </p>
                <Link
                  to={"#"}
                  className="opacity-70 pt-[5px] text-[14px] underline ml-2"
                >
                  Details
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="mt-4">
              <Link to={"/payment"}>
                <button className="text-[14px] tracking-wider font-bold px-6 leading-4 h-[44px] rounded pb-[2px] bg-white hover:bg-[#ffffffCC] duration-300 text-[#040405]">
                  GET THE DISNEY BUNDLE
                </button>
              </Link>
              <br />
              <Link
                to={"#"}
                className="flex justify-center text-center opacity-70 pt-[5px] text-[11px] underline"
              >
                Terms apply
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundMobile;
