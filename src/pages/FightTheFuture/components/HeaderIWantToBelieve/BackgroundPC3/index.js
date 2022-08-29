import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg03 from "~/assets/imgs/bg03.jpg";
import brand from "~/assets/imgs/brand.png";
import LoginModal from "~/components/LoginModal";
import ModalMore from "~/pages/Home/components/ModalMore";
import logo2 from "~/assets/imgs/logo2.png";
import LogoSvg from "~/assets/Icons/LogoSvg";
import ModalDetails from "~/pages/Home/components/ModalDetails";

function BackgroundPC3() {
  const [modalLogin, setModaLogin] = useState(false);
  const [modalMore, setModalMore] = useState(false);
  const [modalDetails, setModalDetails] = useState(false);

  // đóng, mở login modal
  const handleLoginModal = () => {
    setModaLogin(!modalLogin);
  };

  // đóng, mở more modal
  const handleModalMore = () => {
    setModalMore(!modalMore);
  };

  // đóng, mở details modal
  const handleModalDetails = () => {
    setModalDetails(!modalDetails);
  };

  // đóng login modal, more, deatils
  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 27) {
        setModalMore(false);
        setModaLogin(false);
        setModalDetails(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="sm:block">
      {/* background-Tablet, PC */}
      <div className="relative -top-[40px] md:min-h-[626px] lg:min-h-[695px] overflow-hidden z-10">
        <img
          className="hidden md:block w-full object-cover relative z-0  md:min-h-[466px] lg:min-h-[555px] max-h-[720px]"
          alt="I Want To Believe"
          src={bg03}
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
          <div className="mx-10 md:mt-10 lg:mt-[65px] xl:mt-[100px] text-white">
            {/* logo */}
            <img src={logo2} alt="I Want To Believe" />
            {/* desc */}
            <p className="md:text-[14px] lg:text-[15px] mt-3 md:mb-2 lg:mb-3">
              Mysterious kidnappings in an icy rural town prompts the FBI to
              reunite parano... {/* more */}
              <button onClick={handleModalMore} className="font-semibold">
                MORE
              </button>
            </p>
            <div>{modalMore && <ModalMore onClick={handleModalMore} />}</div>
            <p className="md:text-[14px] lg:text-[15px]">
              <span className="font-semibold">Starring:</span> David Duchovny,
              Gillian Anderson, Billy Connolly
            </p>
            <p className="md:text-[14px] lg:text-[15px] font-semibold mb-2">
              Director:
              <span className="mx-2 font-normal">Chris Carter</span>
            </p>
            {/*  */}
            <div className="flex">
              <p className="md:text-[14px] lg:text-[15px] font-semibold mb-2">
                PG-13:
                <span className="mx-2 font-normal">
                  Thriller, Drama, Mystery, Science Fiction, Movie - 2008
                </span>
              </p>

              <div className="xl:-mt-1 ml-2">
                <button className=" px-[6px] bg-white text-black rounded border border-[#ccc] text-[10px] font-bold mr-2">
                  5.1
                </button>
                <button className=" px-[6px] bg-white text-black rounded border border-[#ccc] text-[10px] font-bold">
                  HD
                </button>
              </div>
            </div>
            {/*  */}
            <p className="md:text-[14px] lg:text-[15px] xl:text-[16px] mt-3 font-medium">
              Add HBO Max™ to any Hulu plan for an additional $14.99/month.
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
            <p className="opacity-70 text-[11px] font-normal tracking-wider text-white ">
              New subscribers only.
            </p>
          </div>
        </div>

        {/* bg-gradient */}
        <div className=" absolute w-full top-0 min-h-[720px] bg-gradient-to-r from-blue-900"></div>
        <div className=" absolute opacity-100 w-full top-0 min-h-[720px] bg-gradient-to-r from-[#4ca4cf]/50 to-[#4ca4cf]/5"></div>
        <div className=" absolute opacity-90 -left-10 min-w-[2000px] top-0 h-[120px] blur-2xl bg-gradient-to-t from-black to-gray-800"></div>

        {/* header bot */}
        <div>
          <div className=" absolute opacity-70 w-full bottom-0 md:min-h-[160px] lg:min-h-[140px] bg-gradient-to-t from-black to-black"></div>
          <div className="absolute md:px-4 xl:px-10 xl:py-[25px] flex justify-between items-center w-full bottom-0 md:min-h-[160px] lg:min-h-[140px] z-60 text-white opacity-100">
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
                {/* modal details */}
                <button
                  onClick={setModalDetails}
                  className="opacity-70 pt-[5px] text-[14px] underline text-start w-[48px]"
                >
                  Details
                </button>
                <div>
                  {modalDetails && (
                    <ModalDetails onClick={handleModalDetails} />
                  )}
                </div>
                {/*  */}
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
                to={"/terms-apply"}
                className="flex justify-center text-center opacity-70 pt-[5px] text-[12px] underline"
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

export default BackgroundPC3;
