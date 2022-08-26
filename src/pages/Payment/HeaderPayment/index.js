import { Link } from "react-router-dom";
import LoginModal from "~/components/LoginModal";
import { useState, useEffect, memo } from "react";

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
      {console.log("re-render")}

      <header className="flex items-center justify-between mx-8 h-[60px] border-b border-b-[#f1f1f1]">
        {/* logo hulu */}
        <Link to={"/series-TheX-Files"}>
          <svg
            viewBox="0 -2 61 24"
            height="24"
            width="61"
            role="img"
            aria-labelledby="logoTitle"
            fill="black"
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
