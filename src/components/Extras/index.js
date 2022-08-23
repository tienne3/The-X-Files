import StartWatching from "../StartWatching";
import { useState, useEffect } from "react";
import axios from "axios";

function Extras() {
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
  });

  //
  useEffect(() => {
    axios
      .get(`https://630390f0761a3bce77da0126.mockapi.io/api/series`)
      .then((res) => {
        setFilms(res.data);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px] mt-10">
      {films.map((film) => (
        <div key={film.id}>
          <div className="">
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

            {/* desciption */}
            <p className="text-[14px] text-textColorPrimary font-bold md:tracking-wide mt-4 md:mt-2">
              {film.description}
            </p>
          </div>
        </div>
      ))}
      {modalStartWatching && <StartWatching onClick={handleStartWatching} />}
    </div>
  );
}

export default Extras;
