import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import brand from "~/assets/imgs/brand.png";
import ModalDetails from "~/pages/Home/components/ModalDetails";

function HeaderBot() {
  const [modalDetails, setModalDetails] = useState(false);

  // đóng, mở details modal
  const handleModalDetails = () => {
    setModalDetails(!modalDetails);
  };

  // đóng login modal, more, deatils
  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 27) {
        setModalDetails(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div>
      {/* header bot */}
      <div>
        <div className=" absolute opacity-70 w-full bottom-0 md:min-h-[160px] lg:min-h-[140px] bg-gradient-to-t from-black to-black"></div>
        <div className="flex-col md:flex-row bottom-7 z-60 absolute md:px-10 xl:px-10 xl:py-[25px] flex justify-between items-center w-full md:bottom-0 md:min-h-[160px] lg:min-h-[140px] z-60 text-white opacity-100">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col-reverse">
              <img
                className="max-w-[180px] mx-auto md:mb-0 md:max-w-[250px] h-full lg:max-w-[300px] xl:max-w-[355px]"
                src={brand}
                alt="brand"
              />
              <p className="text-primary font-medium pb-1 text-[13px] tracking-wide md:hidden">
                BUNDLE WITH ANY HULU PLAN & SAVE
              </p>
            </div>

            <div className="flex flex-col md:px-[20px] xl:pl-[35px]">
              <p className="text-primary font-medium pb-[6px] text-[13px] tracking-wide hidden md:inline-block">
                BUNDLE WITH ANY HULU PLAN & SAVE
              </p>
              <p className="font-normal hidden md:inline-block md:text-[18px] lg:text-[24px] mt-[3px] tracking-wide">
                Get Hulu, Disney+, and ESPN+.
              </p>
              {/* modal details */}
              <div className="flex justify-center md:justify-start">
                <p className="md:hidden font-normal mt-[6px] tracking-wide text-[14px] mr-2">
                  Get all three.
                </p>
                <button
                  onClick={setModalDetails}
                  className="opacity-70 pt-[5px] text-[14px] underline text-start w-[48px]"
                >
                  Details
                </button>
              </div>
              <div>
                {modalDetails && <ModalDetails onClick={handleModalDetails} />}
              </div>
              {/*  */}
            </div>
          </div>
          {/*  */}
          <div className="mt-4">
            <Link to={"/payment"}>
              <button className="text-[14px] tracking-wider font-semibold px-6 md:px-2 lg:px-6 leading-4 h-[48px] md:mr-0 lg:mr-2 rounded pb-[2px] bg-white hover:bg-[#ffffffCC] duration-300 text-[#040405]">
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
  );
}

export default HeaderBot;
