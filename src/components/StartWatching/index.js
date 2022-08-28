import { Link } from "react-router-dom";
import LoginModal from "../LoginModal";
import { useState, useEffect } from "react";
import LogoSvg from "~/assets/Icons/LogoSvg";

function StartWatching(props) {
  const [modalLogin, setModaLogin] = useState(false);

  const handleLoginModal = () => {
    setModaLogin(!modalLogin);
  };
  // đóng login modal
  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 27) {
        setModaLogin(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div
      onClick={props.onClick}
      className="modal text-semibold fixed z-50 top-0 bottom-0 left-0 right-0 bg-black/[50%] "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90%] sm:w-[80%] bg-white md:w-[600px] h-[522px] border border-[#777] z-50 mx-auto my-auto mt-[79px] md:mt-[100px] rounded-md shadow-xl py-10 px-5 sm:px-[60px]"
      >
        <div
          onClick={props.onClick}
          className="absolute cursor-pointer right-0 top-0 opacity-60 leading-[50px] text-[40px] md:text-[45px] font-thin px-5 text-black"
        >
          &times;
        </div>

        {/* logo */}
        <div className="mx-auto mt-5">
          <LogoSvg />
        </div>
        <p className="text-[20px] md:text-[23px] lg:text-[25px] text-center mt-10 md:mt-[50px] lg:mt-[60px]">
          Start watching <span className="font-bold">The X-Files</span>
        </p>
        <p className="text-textColor text-[15px] md:text-[16px] lg:text-[17px] mt-1 text-center">
          11 seasons available (218 episodes)
        </p>
        <p className="text-textColor text-center text-[15px] md:text-[16px] lg:text-[17px] mt-4 mb-5">
          No hidden fees, equipment rentals, or installation appointments.
        </p>

        <button
          onClick={handleLoginModal}
          className="text-center font-semibold text-[#040405] hover:text-white bg-white hover:bg-[#6d6d6f] border-[2px] duration-300 border-[#000] w-full rounded h-[48px] mt-8"
          type={"submit"}
        >
          LOG IN
        </button>
        {modalLogin && <LoginModal onClick={handleLoginModal} />}
        <Link to={"/payment"}>
          <button
            className="text-center font-semibold text-white bg-[#040405] hover:bg-[#3c3d3f] duration-300 w-full rounded h-[48px] mt-3 md:mt-2"
            type={"submit"}
          >
            START YOUR FREE TRIAL
          </button>
        </Link>
        <p className="text-[13px] tracking-wider mt-[50px] md:mt-4 text-center text-textColor font-normal">
          For new subscribers only
        </p>
      </div>
    </div>
  );
}

export default StartWatching;
