import StartWatching from "~/components/StartWatching";
import { useState, useEffect, memo } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function ItemsIWantToBelieve() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [modalStartWatching, setModalStartWatching] = useState(false);
  const [films, setFilms] = useState([]);

  // đóng, mở start watching
  const handleStartWatching = () => {
    setModalStartWatching(!modalStartWatching);
  };
  // đóng start watching
  useEffect(() => {
    function onKeyDown(e) {
      if (e.keyCode === 27) {
        setModalStartWatching(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  //
  useEffect(() => {
    axios
      .get(
        `https://63084e8e722029d9ddcbe84f.mockapi.io/series/i-want-to-believe`
      )
      .then((res) => {
        setFilms(res.data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px] mt-10">
      {films.map((film) => (
        <div
          key={film.id}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <div className="relative">
            <img
              className="z-10 w-full rounded-xl hover:brightness-75"
              src={film.path}
              alt={film.description}
            />
            <span
              onClick={handleStartWatching}
              className="absolute border-[4px] -top-[7px] -bottom-[7px] -left-[7px] z-0 -right-[7px] opacity-0 hover:opacity-100 hover:bg-[#000]/[20%] duration-300 rounded-[16px] border-[#888]"
            ></span>
          </div>

          {/* name */}
          <p className="text-[14px] text-textColorPrimary font-bold md:tracking-wide mt-3 md:mt-2">
            {film.name}
          </p>
          {/* desciption */}
          <p className="text-[13px] md:text-[14px] mt-2">{film.description}</p>
        </div>
      ))}
      {modalStartWatching && <StartWatching onClick={handleStartWatching} />}
    </div>
  );
}

export default memo(ItemsIWantToBelieve);
