import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import StartWatching from "~/components/StartWatching";

function WatchFilm() {
  const id = useParams();
  const seasonNumber = JSON.parse(localStorage.getItem("typeStorage"));

  const [films, setFilms] = useState([]);
  const [modalStartWatching, setModalStartWatching] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  // call api
  useEffect(() => {
    axios
      .get(
        `https://6303b2bc0de3cd918b3c60e9.mockapi.io/series/Season-/${seasonNumber}`
      )
      .then((res) => {
        setFilms([res.data.items[id.number - 1]]);
        setEpisodes(res.data.items);
      });
  }, [seasonNumber]);

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

  return (
    <div>
      <div className="md:pl-10 p-5">
        <Link
          to={"/series-TheX-Files"}
          onClick={() => {
            localStorage.setItem("typeStorage", JSON.stringify(1));
          }}
        >
          <button className="px-4 py-2 md:px-5 md:py-[10px] bg-[#ccc] hover:bg-primary flex justify-center items-center rounded-sm">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </Link>
      </div>
      {films.map((film) => (
        <div
          key={film.number}
          className="p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 flex flex-col md:flex-row md:justify-center "
        >
          {/*  */}
          <div className="flex-1" onClick={handleStartWatching}>
            <div>
              {modalStartWatching && (
                <StartWatching onClick={handleStartWatching} />
              )}
            </div>
            <div className="relative w-full">
              <img
                className="z-10 w-full hover:brightness-75 pb-10 cursor-pointer"
                src={film.path}
                alt={film.name}
              />
              <span className="absolute m-auto top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[75%]  md:-translate-y-[70%] cursor-pointer text-[#fff] text-[40px] md:-[50px] lg:text-[60px] hover:opacity-75">
                <FontAwesomeIcon icon={faCirclePlay} />
              </span>
            </div>
          </div>

          {/*  */}
          <div className="md:px-5 flex-1">
            <div className="">
              {/* film number */}
              <p className="text-[12px] md:text-[13px] lg:text-[14px] text-[#272C34] font-medium tracking-wider pt-2 py-1">
                EPISODE {film.number}
              </p>
              {/* film name */}
              <p className="text-[14px] md:text-[15px] lg:text-[16px] text-textColorPrimary font-semibold pb-1">
                {film.name}
              </p>
              {/* desc */}
              <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-textColorPrimary tracking-normal md:tracking-wide">
                {film.description}
              </p>
            </div>

            {/* select episode */}
            <div className="mt-5">
              <p className="text-[15px] mb-1 font-semibold">Select Episode:</p>
              <ul className="flex flex-wrap">
                {episodes.map((episode) => (
                  <li
                    key={episode.number}
                    onClick={() => {
                      // eslint-disable-next-line no-restricted-globals
                      location.reload();
                    }}
                  >
                    <Link
                      to={`/series-TheX-Files/watch-film/tap-${episode.number}`}
                    >
                      <button className="flex justify-center items-center text-[14px] rounded-md px-2 py-[2px] w-[40px] border border-[#888] hover:bg-violet-300 m-1">
                        {episode.number}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WatchFilm;
