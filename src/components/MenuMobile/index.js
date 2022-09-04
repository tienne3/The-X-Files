import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import { useEffect, useState } from "react";

function MenuMobile() {
  const [modalLogin, setModaLogin] = useState(false);

  // đóng, mở login modal
  const handleModalLogin = () => {
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
    <div className="absolute top-[50px] right-5">
      <div className="bg-[#323843] w-[270px] h-[100px] rounded-md">
        <div className="flex justify-center items-center w-full">
          <button
            onClick={handleModalLogin}
            className="relative m-1 rounded-md w-full text-center h-[44px]  hover:bg-[#ffffff33] hover:text-white text-[#A8AFBD] duration-300"
          >
            LOG IN
          </button>
          <div>{modalLogin && <ModalLogin onClick={handleModalLogin} />}</div>
        </div>
        <Link
          className="flex justify-center items-center relative mb-1 ml-1 mr-1 rounded-md text-center h-[44px] bg-[#0F0C0F] hover:bg-[#0F0C0F]/[60%]"
          to={"/payment"}
        >
          START YOUR FREE TRIAL
        </Link>
      </div>
    </div>
  );
}

export default MenuMobile;
