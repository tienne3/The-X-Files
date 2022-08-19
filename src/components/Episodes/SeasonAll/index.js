import {
  season1,
  season2,
  season3,
  season4,
  season5,
  season6,
  season7,
  season8,
  season9,
  season10,
  season11,
} from "~/assets/Api/Api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const seasons = [
  "Season 1",
  "Season 2",
  "Season 3",
  "Season 4",
  "Season 5",
  "Season 6",
  "Season 7",
  "Season 8",
  "Season 9",
  "Season 10",
  "Season 11",
];
export const SeasonAll = (props) => {
  const [showSelectSeason, setShowSelectSeason] = useState(false);
  const [type, setType] = useState("Season 1");
  const seasonObj1 = season1.data.hub.items;
  const seasonObj2 = season2.data.hub.items;
  const seasonObj3 = season3.data.hub.items;
  const seasonObj4 = season4.data.hub.items;
  const seasonObj5 = season5.data.hub.items;
  const seasonObj6 = season6.data.hub.items;
  const seasonObj7 = season7.data.hub.items;
  const seasonObj8 = season8.data.hub.items;
  const seasonObj9 = season9.data.hub.items;
  const seasonObj10 = season10.data.hub.items;
  const seasonObj11 = season11.data.hub.items;

  const handleSelect = () => {
    setShowSelectSeason(!showSelectSeason);
  };

  // handle start watching
  const handleShowStartWatching = () => {
    props.onClick();
  };

  return (
    <div>
      {/* btn season */}
      <div onClick={handleSelect} className="relative">
        <button className="z-50 mb-[50px] w-[280px] px-5 flex justify-between items-center h-[48px] bg-[#272C34] text-white text-[15px] rounded-md hover:bg-[#444548]">
          {type}
          <span className="ml-10">
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        </button>

        <div className="absolute z-50 top-full left-0 bg-[#15171A] w-[280px] text-white rounded-md max-h-[247px] overflow-hidden overflow-y-auto shadow-2xl">
          {showSelectSeason &&
            seasons.map((season) => (
              <ul key={season}>
                <li className="w-full hover:bg-[#444548] rounded-md">
                  <button
                    onClick={() => setType(season)}
                    className="px-5 h-[44px] w-full text-start"
                    style={{
                      display: "block",
                    }}
                  >
                    {season}
                  </button>
                </li>
              </ul>
            ))}
        </div>
      </div>

      {/* season1 */}
      <div
        style={
          type === "Season 1" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj1.map((film) => (
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
              <p className="text-[12px] text-[#272C34] font-semibold tracking-wider pt-2 py-1 mt-2 md:mt-2 lg:mt-1">
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
      {/*  */}
      {/* season2 */}
      <div
        style={
          type === "Season 2" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj2.map((film) => (
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
      {/*  */}
      {/* season3 */}
      <div
        style={
          type === "Season 3" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj3.map((film) => (
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

      {/*  */}
      {/* season4 */}
      <div
        style={
          type === "Season 4" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj4.map((film) => (
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

      {/*  */}
      {/* season5 */}
      <div
        style={
          type === "Season 5" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj5.map((film) => (
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

      {/*  */}
      {/* season6 */}
      <div
        style={
          type === "Season 6" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj6.map((film) => (
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

      {/*  */}
      {/* season7 */}
      <div
        style={
          type === "Season 7" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj7.map((film) => (
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

      {/*  */}
      {/* season8 */}
      <div
        style={
          type === "Season 8" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj8.map((film) => (
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

      {/*  */}
      {/* season9 */}
      <div
        style={
          type === "Season 9" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj9.map((film) => (
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

      {/*  */}
      {/* season10 */}
      <div
        style={
          type === "Season 10" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj10.map((film) => (
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

      {/*  */}
      {/* season11 */}
      <div
        style={
          type === "Season 11" ? { backgroundColor: "" } : { display: "none" }
        }
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 sm:gap-x-5 lg:gap-x-6 gap-y-10 lg:gap-y-[60px]"
      >
        {seasonObj11.map((film) => (
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

      {/*  */}
    </div>
  );
};
