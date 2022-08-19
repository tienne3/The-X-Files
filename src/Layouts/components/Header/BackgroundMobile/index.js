import bg2 from "~/assets/imgs/bg2.jpg";
import { Link } from "react-router-dom";
import brand from "~/assets/imgs/brand.png";
import { useEffect, useState } from "react";
import ModalMore from "~/components/ModalMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuMobile from "~/components/MenuMobile";

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
  });

  return (
    <div>
      {/* background-Mobile1 */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <img
            className=" object-cover z-10 w-full  max-h-[1020px]"
            alt="TheXFiles"
            src={bg2}
          />

          {/* header top */}
          <div className="w-full absolute z-50 top-[17px] ">
            <div className="flex items-center justify-between mx-6">
              {/* logo hulu */}
              <Link to={"/"}>
                <svg
                  viewBox="0 -2 61 24"
                  height="24"
                  width="61"
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
              <span className="font-semibold">Starring:</span>
              <span className="opacity-80">
                <span className="font-semibold">Starring:</span> Gillian
                Anderson, David Duchovny, Mitch Pileggi
                <span className="font-semibold">Starring:</span>
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
          <div className="absolute opacity-30 z-0 w-full top-0 bottom-0 max-h-[1020px] bg-gradient-to-b from-black to-red-600"></div>
          <div className="absolute opacity-80 z-0 w-full top-0 bottom-0 max-h-[1020px] bg-gradient-to-t from-red-700"></div>
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
