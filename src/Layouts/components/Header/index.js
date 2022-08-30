import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bg3 from "~/assets/imgs/bg3.jpg";
import bg2 from "~/assets/imgs/bg2.jpg";
import HeaderBot from "~/components/HeaderBot";
import HeaderTop from "~/components/HeaderTop";
import ModalMore from "~/pages/Home/components/ModalMore";

function Header() {
  const [modalMore, setModalMore] = useState(false);

  // đóng, mở more modal
  const handleModalMore = () => {
    setModalMore(!modalMore);
  };

  // đóng login modal, more, deatils
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
  }, []);

  return (
    <div className="sm:block">
      {/* img Mobile */}
      <div className="relative md:-top-[40px] md:min-h-[616px] lg:min-h-[695px] overflow-hidden z-10">
        <img
          className="object-cover z-10 w-full sm:h-[800px] sm:object-top md:hidden"
          alt="TheXFiles"
          src={bg2}
        />
        {/* img PC */}
        <img
          className="hidden md:block object-cover relative z-0 lg:-ml-10 md:-ml-10 xl:ml-0 md:min-h-[456px] lg:min-h-[555px] max-h-[720px]"
          alt="TheXFiles"
          src={bg3}
        />

        {/* header top */}
        <div className="w-full absolute z-20 top-4 md:top-[54px] ">
          <HeaderTop />
        </div>

        {/* header mid */}
        <div className="px-5 w-full bottom-[248px] absolute z-10 md:mx-5 md:top-[130px] lg:top-[155px] xl:top-[190px] text-white">
          <p className="text-[12px] font-medium md:font-semibold tracking-wider text-white opacity-70 md:opacity-50">
            11 SEASONS AVAILABLE (218 EPISODES)
          </p>
          {/* title */}
          <h1 className="text-[32px] mb-[10px] lg:mb-[15px] md:mt-1 lg:mt-2">
            The X-Files
          </h1>
          {/* desc */}
          <p className="text-[14px] lg:text-[15px] mb-2 md:mb-2 lg:mb-3">
            The truth is out there. FBI agents Scully and Mulder seek it in this
            sci-fi phen... {/* more */}
            <button
              onClick={handleModalMore}
              className="text-[13px] font-semibold text-white"
            >
              MORE
            </button>
          </p>
          <div>{modalMore && <ModalMore onClick={handleModalMore} />}</div>
          <p className="text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] mb-3">
            <span className="font-semibold">Starring:</span>{" "}
            <span className="opacity-80 md:opacity-100">
              Gillian Anderson, David Duchovny, Mitch Pileggi
            </span>
          </p>
          <div className="flex text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px]">
            <p>TV14</p>
            <ul className="list-disc mx-5">
              <li>
                Science Fiction, Cops & Detectives, Aliens, Thriller, Drama,
                Horror
              </li>
            </ul>
          </div>
          <div className="flex text-[13px] sm:text-[14px] md:text-[14px] lg:text-[15px] mb-1 md:mb-0">
            <p>Supernatural</p>
            <ul className="flex list-disc mx-5">
              <li>TV Series</li>
              <li className="ml-5">1993</li>
            </ul>
          </div>

          <div className="xl:-mt-1">
            <button className=" px-[6px] mb-2 md:mb-0 bg-white text-black rounded border border-[#ccc] text-[10px] font-semibold">
              HD
            </button>
          </div>
          <p className="hidden md:inline-block md:text-[14px] lg:text-[15px] mt-3">
            Stream thousands of shows and movies, with plans starting at
            $6.99/month
          </p>
          {/* btn */}
          <div className="mt-[10px] mb-2 w-full flex justify-center md:justify-start">
            <Link
              to={"/payment"}
              className="text-[14px] w-full text-center md:w-[240px] pb-[10px] px-5 py-[10px] md:py-[9px] tracking-wider font-semibold rounded bg-white hover:bg-[#ffffffCC] duration-300 text-[#040405]"
            >
              START YOUR FREE TRIAL
            </Link>
          </div>
          <p className="opacity-80 text-center md:text-start text-[12px] font-normal tracking-wider text-white">
            New subscribers only.
          </p>
        </div>

        {/* bg-gradient PC  */}
        <div className="hidden md:block">
          <div className=" absolute w-full top-0 min-h-[720px] bg-gradient-to-r from-red-700"></div>
          <div className=" absolute opacity-10 w-full top-0 min-h-[720px] bg-gradient-to-r from-red-700 to-red-700"></div>
          <div className=" absolute opacity-5 w-full top-0 min-h-[720px] bg-gradient-to-r from-black to-black"></div>
          <div className=" absolute opacity-90 -left-10 min-w-[2000px] top-0 h-[120px] blur-2xl bg-gradient-to-t from-black to-gray-800"></div>
        </div>

        {/* bg-gradient mobile  */}
        <div className="md:hidden">
          <div className="absolute opacity-30 z-0 w-full top-0 bottom-0 bg-gradient-to-b from-black to-red-600"></div>
          <div className="absolute opacity-80 z-0 w-full top-0 bottom-0 bg-gradient-to-t from-red-700"></div>
          <div className="absolute opacity-90 z-0 -left-10 max-w-[1000px] top-0 bottom-0 h-[60px] blur-2xl bg-gradient-to-t from-black to-gray-800"></div>
          <div className="relative opacity-100 z-0 w-full top-0 h-[220px] bg-gradient-to-t from-red-900 to-black"></div>
        </div>

        {/* header bot */}
        <div>
          <HeaderBot />
        </div>
      </div>
    </div>
  );
}

export default Header;
