import { Link } from "react-router-dom";
import LoginModal from "~/components/LoginModal";
import { useState, useEffect, memo } from "react";
import LogoSvg from "~/assets/Icons/LogoSvg";

function HeaderPayment() {
  const [modalLogin, setModaLogin] = useState(false);

  // //////////
  // đóng login modal
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
    <div>
      <header className="flex items-center justify-between mx-8 h-[60px] border-b border-b-[#f1f1f1]">
        {/* logo hulu */}
        <Link to={"/series-TheX-Files"}>
          <LogoSvg />
        </Link>

        <button
          onClick={handleLoginModal}
          className="text-gray-900 text-[14px] font-bold bg-opacity-50 hover:opacity-100 duration-300 hover:bg-[#323843] bg-gray-400 hover:text-[#fff] px-4 py-[7px] md:px-4 md:py-[9px] lg:px-[18px] lg:py-[11px] rounded-lg"
        >
          LOG IN
        </button>
      </header>
      <div> {modalLogin && <LoginModal onClick={handleLoginModal} />}</div>
    </div>
  );
}

export default memo(HeaderPayment);
