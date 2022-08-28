import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function YouMayLAlsoLike() {
  const [films, setFilms] = useState([]);

  // call api
  useEffect(() => {
    axios
      .get(
        "https://630776783a2114bac76317d9.mockapi.io/series/fight-the-future"
      )
      .then((res) => setFilms(res.data));
  }, []);

  return (
    <div className="mx-2 md:mx-2 lg:mx-7 mt-8 md:mt-0 mb-[50px]">
      <p className="text-[18px] text-[#292c33] font-bold tracking-wider px-3">
        YOU MAY ALSO LIKE
      </p>
      <div className="auto-cols-[90%] sm:auto-cols-auto grid gap-x-6 grid-flow-col overflow-x-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5 px-3">
        {films.map((film) => (
          <div key={film.id}>
            <Link
              to={
                (film.id === "1" && "/fight-the-future") ||
                (film.id === "2" && "/i-want-to-believe") ||
                (film.id === "3" && "/series-TheX-Files")
              }
            >
              {/* img */}
              <div className="relative group">
                <img
                  className="w-full rounded-xl border border-[#ddd] shadow-md hover:border-transparent duration-300 "
                  src={film.path}
                  alt={film.description}
                />
                <div className="flex justify-center items-center">
                  <div className="absolute top-[40%] md:top-[37%]">
                    <div className="relative text-white text-[28px] border-[2px] z-20 border-white rounded-full px-[9px] opacity-0 group-hover:opacity-100 duration-300">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </div>
                  </div>
                </div>
                <span className="absolute z-0 border-[4px] -top-[7px] -bottom-[7px] -left-[7px] -right-[7px] rounded-[16px] border-[#888] bg-[#000]/[20%] opacity-0 group-hover:opacity-100 duration-300"></span>
              </div>
              {/* name */}
              <p className="text-[13px] md:text-[14px] mt-2 md:mt-3 font-bold">
                {film.name}
              </p>
              {/* desciption */}
              <p className="text-[14px] text-textColorPrimary md:tracking-wide mt-2 md:mt-2">
                {film.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouMayLAlsoLike;
