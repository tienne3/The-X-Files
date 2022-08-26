import { Link } from "react-router-dom";
import LoginModal from "../LoginModal";
import { useState, useEffect } from "react";

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
        className="relative w-[90%] sm:w-[80%] bg-white md:w-[600px] h-[522px] border border-[#777] z-50 mx-auto my-auto mt-[79px] md:mt-[100px] shadow-xl py-10 px-5 sm:px-[60px]"
      >
        <div
          onClick={props.onClick}
          className="absolute cursor-pointer right-0 top-0 opacity-60 leading-[50px] text-[40px] md:text-[45px] font-thin px-5 text-black"
        >
          &times;
        </div>
        {/* logo */}
        <svg
          className="mx-auto mt-5"
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
