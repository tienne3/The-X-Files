import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const seasons = [
  "Season-1",
  "Season-2",
  "Season-3",
  "Season-4",
  "Season-5",
  "Season-6",
  "Season-7",
  "Season-8",
  "Season-9",
  "Season-10",
  "Season-11",
];
export const SeasonAll = (props) => {
  const [showSelectSeason, setShowSelectSeason] = useState(false);
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("Season-3");

  const handleSelect = () => {
    setShowSelectSeason(!showSelectSeason);
  };

  // handle start watching
  const handleShowStartWatching = () => {
    props.onClick();
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/${type}`).then((res) => {
      setPosts(res.data.hub.items);
    });
  }, [type]);
  // //////
  return (
    <div>
      {/* btn season */}
      <div onClick={handleSelect} className="relative w-[280px]">
        <button className="z-50 mb-[50px] w-[280px] px-5 flex justify-between items-center h-[48px] bg-[#272C34] text-white text-[15px] rounded-md hover:bg-[#444548]">
          {type}
          <span className="ml-10">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </button>

        {/* select season */}
        <div className="absolute z-50 top-full left-0 bg-[#15171A] w-[280px] text-white rounded-md max-h-[247px] overflow-hidden overflow-y-auto shadow-2xl">
          {showSelectSeason &&
            seasons.map((season) => (
              <ul key={season}>
                <li className="w-full hover:bg-[#444548] rounded-md">
                  <button
                    onClick={() => setType(season)}
                    className="px-5 h-[44px] w-full text-start"
                    style={{
                      display: "",
                    }}
                  >
                    {season}
                  </button>
                </li>
              </ul>
            ))}
        </div>
      </div>

      {/* render */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]">
        {posts.map((film) => (
          <div key={film.id}>
            <div className="">
              <div className="relative">
                <img
                  className="z-10 w-full rounded-xl hover:brightness-75"
                  src={film.artwork.horizontalHero.path}
                  alt={film.name}
                />
                <span
                  onClick={handleShowStartWatching}
                  className="absolute border-[4px] -top-[7px] -bottom-[7px] -left-[7px] z-0 -right-[7px] opacity-0 hover:opacity-100 hover:bg-[#000]/[20%] duration-300 rounded-[16px] border-[#888]"
                ></span>
              </div>
              {/* film number */}
              <p className="text-[12px] text-[#272C34] font-semibold tracking-wider pt-2 py-1">
                EPISODE {film.number}
              </p>
              {/* film name */}
              <p className="text-[14px] text-[#0B0C0F] font-bold pb-1">
                {film.name}
              </p>
              {/* desc */}
              <p className="text-[13px] sm:text-[14px] text-[#0B0C0F] tracking-normal md:tracking-wide">
                {film.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
