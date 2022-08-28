import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoSvg from "~/assets/Icons/LogoSvg";
import bg3 from "~/assets/imgs/bg3.jpg";
import brand from "~/assets/imgs/brand.png";
import LoginModal from "~/components/LoginModal";
import ModalMore from "~/pages/Home/components/ModalMore";

function BackgroundPC() {
  const [modalLogin, setModaLogin] = useState(false);
  const [modalMore, setModalMore] = useState(false);

  // đóng, mở login modal
  const handleLoginModal = () => {
    setModaLogin(!modalLogin);
  };

  // đóng login modal
  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 27) {
        setModalMore(false);
        setModaLogin(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  // //////////
  // đóng modal more
  const handleModalMore = () => {
    setModalMore(!modalMore);
  };

  return (
    <div className="sm:block">
      {/* background-Tablet, PC */}
      <div className="relative -top-[40px] md:min-h-[616px] lg:min-h-[695px] overflow-hidden z-10">
        <img
          className="hidden md:block object-cover relative z-0 lg:-ml-10 md:-ml-10 xl:ml-0 md:min-h-[456px] lg:min-h-[555px] max-h-[720px]"
          alt="TheXFiles"
          src={bg3}
        />

        {/* header top */}
        <div className="w-full absolute z-50 top-[54px] ">
          <div className="flex items-center justify-between mx-10">
            {/* logo hulu */}
            <Link to={"/series-TheX-Files"}>
              <LogoSvg />
            </Link>

            {/*  */}
            <div className="text-[#fff] font-semibold md:text-[13px] lg:text-[15px] xl:text-[16px]">
              <Link
                to={"/payment"}
                className="md:mr-2 lg:mr-[15px] bg-transparent hover:bg-[#0b0c0fCC] bg-opacity-0 hover:opacity-100 duration-300 md:px-4 md:py-[9px] lg:px-6 lg:py-[13px] min-w-[64px] rounded"
              >
                START YOUR FREE TRIAL
              </Link>
              <button
                onClick={handleLoginModal}
                className="text-[#a8afbd] font-bold bg-opacity-0 hover:opacity-100 duration-300 hover:bg-[#323843] bg-transparent hover:text-[#fff] md:px-4 md:py-[9px] lg:px-[18px] lg:py-[11px] rounded-lg"
              >
                LOG IN
              </button>
              <div>
                {modalLogin && <LoginModal onClick={handleLoginModal} />}
              </div>
            </div>
          </div>
          {/* header mid */}
          <div className="mx-10 md:mt-7 lg:mt-[55px] xl:mt-[88px] text-white">
            <p className="text-[12px] font-bold tracking-wider text-white opacity-50">
              11 SEASONS AVAILABLE (218 EPISODES)
            </p>
            {/* title */}
            <h1 className="text-[32px] md:mb-[10px] lg:mb-[15px] md:mt-1 lg:mt-2">
              The X-Files
            </h1>
            {/* desc */}
            <p className="md:text-[14px] lg:text-[15px] md:mb-2 lg:mb-3">
              The truth is out there. FBI agents Scully and Mulder seek it in
              this sci-fi phen... {/* more */}
              <button onClick={handleModalMore} className="font-semibold">
                MORE
              </button>
            </p>
            <div>{modalMore && <ModalMore onClick={handleModalMore} />}</div>
            <p className="md:text-[14px] lg:text-[15px] mb-3">
              <span className="font-semibold">Starring:</span> Gillian Anderson,
              David Duchovny, Mitch Pileggi
            </p>
            <div className="flex md:text-[14px] lg:text-[15px]">
              <p>TV14</p>
              <ul className="list-disc mx-5">
                <li>
                  Science Fiction, Cops & Detectives, Aliens, Thriller, Drama,
                  Horror
                </li>
              </ul>
            </div>
            <div className="flex md:text-[14px] lg:text-[15px]">
              <p>Supernatural</p>
              <ul className="flex list-disc mx-5">
                <li>TV Series</li>
                <li className="ml-5">1993</li>
              </ul>
            </div>

            <div className="xl:-mt-1">
              <button className=" px-[6px] bg-white text-black rounded border border-[#ccc] text-[10px] font-bold">
                HD
              </button>
            </div>
            <p className="md:text-[14px] lg:text-[15px] mt-3 ">
              Stream thousands of shows and movies, with plans starting at
              $6.99/month
            </p>
            {/* btn */}
            <div className="mt-4 mb-4">
              <Link
                to={"/payment"}
                className="text-[14px] pb-[10px] px-6 py-[9px] tracking-wider font-bold rounded bg-white hover:bg-[#ffffffCC] duration-300 text-[#040405]"
              >
                START YOUR FREE TRIAL
              </Link>
            </div>
            <p className="opacity-70 text-[10px] font-normal tracking-wider text-white ">
              New subscribers only.
            </p>
          </div>
        </div>

        {/* bg-gradient */}
        <div className=" absolute w-full top-0 min-h-[720px] bg-gradient-to-r from-red-700"></div>
        <div className=" absolute opacity-20 w-full top-0 min-h-[720px] bg-gradient-to-r from-red-700 to-red-300"></div>
        <div className=" absolute opacity-5 w-full top-0 min-h-[720px] bg-gradient-to-r from-black to-black"></div>
        <div className=" absolute opacity-90 -left-10 min-w-[2000px] top-0 h-[120px] blur-2xl bg-gradient-to-t from-black to-gray-800"></div>

        {/* header bot */}
        <div>
          <div className=" absolute opacity-70 w-full bottom-0 md:min-h-[160px] lg:min-h-[140px] bg-gradient-to-t from-black to-black"></div>
          <div className="absolute md:px-4 xl:px-10 xl:py-[25px] flex justify-between items-center w-full bottom-0 md:min-h-[160px] lg:min-h-[140px] z-60  text-white opacity-100">
            <div className="flex items-center">
              <img
                className="md:max-w-[250px] h-full lg:max-w-[300px] xl:max-w-[355px]"
                src={brand}
                alt="brand"
              />

              <div className="flex flex-col md:px-[20px] xl:pl-[35px]">
                <p className="text-primary font-medium pb-[6px] text-[13px] tracking-wide leading-3">
                  BUNDLE WITH ANY HULU PLAN & SAVE
                </p>
                <p className="font-normal md:text-[18px] lg:text-[24px] mt-[3px] tracking-wide">
                  Get Hulu, Disney+, and ESPN+.
                </p>
                <Link
                  to={"#"}
                  className="opacity-70 pt-[5px] text-[14px] underline"
                >
                  Details
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="mt-4">
              <Link to={"/payment"}>
                <button className="text-[14px] tracking-wider font-bold md:px-2 lg:px-6 leading-4 h-[48px] md:mr-0 lg:mr-2 rounded pb-[2px] bg-white hover:bg-[#ffffffCC] duration-300 text-[#040405]">
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

export default BackgroundPC;
