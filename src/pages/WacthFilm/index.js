import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import StartWatching from "~/components/StartWatching";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

function WatchFilm() {
  const types = useSelector((state) => state.type);
  const seasonNumber = types[types.length - 1];

  const [films, setFilms] = useState([]);
  const [type, setType] = useState(types);
  const [modalStartWatching, setModalStartWatching] = useState(false);

  const id = useParams();
  // call api
  useEffect(() => {
    setType(types);
    axios
      .get(
        `https://6303b2bc0de3cd918b3c60e9.mockapi.io/series/Season-/${seasonNumber}`
      )
      .then((res) => {
        setFilms([res.data.items[id.number - 1]]);
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
        <Link to={"/series-TheX-Files"}>
          <button className="px-4 py-2 md:px-5 md:py-[10px] bg-[#ccc] hover:bg-primary flex justify-center items-center">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </Link>
      </div>
      {films.map((film) => (
        <div
          key={film.number}
          className="p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 flex flex-col md:flex-row md:justify-center"
        >
          {/*  */}
          <div className="relative flex-1" onClick={handleStartWatching}>
            <div>
              {modalStartWatching && (
                <StartWatching onClick={handleStartWatching} />
              )}
            </div>
            <img
              className="z-10 w-full hover:brightness-75 mx-auto pb-10"
              src={film.path}
              alt={film.name}
            />
            <span className="absolute cursor-pointer top-[32%] sm:top-[34%] lg:top-[38%] left-[43%] md:left-[46%] text-[#fff] text-[40px] md:-[50px] lg:text-[60px]">
              <FontAwesomeIcon icon={faCirclePlay} />
            </span>
          </div>
          {/*  */}
          <div className="md:px-5 flex-1">
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
        </div>
      ))}
    </div>
  );
}

export default WatchFilm;
