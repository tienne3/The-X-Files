import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoSvg from "~/assets/Icons/LogoSvg";
import LoginModal from "~/components/LoginModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuMobile from "~/components/MenuMobile";

function HeaderTop() {
  const [modalLogin, setModaLogin] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // đóng, mở login modal
  const handleLoginModal = () => {
    setModaLogin(!modalLogin);
  };

  // đóng, mở showMenu
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
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
    <div className="flex items-center justify-between mx-6 md:mx-10">
      {/* logo hulu */}
      <Link to={"/series-TheX-Files"}>
        <LogoSvg />
      </Link>

      {/*  */}
      <div className="text-[#fff] font-semibold text-[13px] sm:text-[14px] lg:text-[15px]">
        <Link
          to={"/payment"}
          className="hidden sm:inline-block sm:px-5 font-medium py-[10px] mr-2 lg:mr-[15px] bg-transparent hover:bg-[#0b0c0fCC] bg-opacity-0 hover:opacity-100 duration-300 md:px-4 md:py-[9px] lg:px-6 lg:py-[13px] min-w-[64px] rounded-lg"
        >
          START YOUR FREE TRIAL
        </Link>
        <button
          onClick={handleLoginModal}
          className="hidden md:inline-block text-[#a8afbd] font-semibold bg-opacity-0 hover:opacity-100 duration-300 hover:bg-[#323843] bg-transparent hover:text-[#fff] md:px-4 md:py-[9px] lg:px-[18px] lg:py-[11px] rounded-lg"
        >
          LOG IN
        </button>
        <button
          onClick={handleShowMenu}
          className="font-semibold px-[20px] md:hidden py-[10px] text-[14px] bg-[#323843] rounded-lg hover:bg-[#0b0c0fCC]"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div>{showMenu && <MenuMobile />}</div>
        <div>{modalLogin && <LoginModal onClick={handleLoginModal} />}</div>
      </div>
    </div>
  );
}

export default memo(HeaderTop);
