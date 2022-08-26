import { memo } from "react";

function DetailsFightTheFuture() {
  return (
    <div className="mt-11 max-w-[650px]">
      <p className="text-textColorPrimary text-[14px] sm:text-[15px] md:text-[17px] font-semibold mb-2">
        About this Movie
      </p>
      <p className="text-textColorPrimary text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] font-bold">
        The X-Files: Fight the Future
      </p>
      <p className="text-[#6E7A91] text-[14px] sm:text-[15px] md:text-[16px] mb-3 mt-2">
        FBI agents Mulder and Scully probe events that may prove the existence
        of aliens on Earth. Based on the TV series.
      </p>
      <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#6E7A91] font-bold mb-1">
        Starring:{" "}
        <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal">
          David Duchovny, Gillian Anderson, Martin Landau, Armin Mueller-Stahl,
          Blythe Danner
        </span>
      </p>
      <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#6E7A91] font-bold mb-4">
        Director:{" "}
        <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal">
          Rob Bowman
        </span>
      </p>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#6E7A91]">
        PG-13 Thriller, Science Fiction, Horror, Movie-1998
      </p>
    </div>
  );
}

export default memo(DetailsFightTheFuture);
