import { memo } from "react";

function DetailsIWantToBelieve() {
  return (
    <div className="mt-11 max-w-[650px]">
      <p className="text-textColorPrimary text-[14px] sm:text-[15px] md:text-[17px] font-semibold mb-2">
        About this Movie
      </p>
      <p className="text-textColorPrimary text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] xl:text-[32px] font-semibold">
        The X-Files: I Want to Believe
      </p>
      <p className="text-[#6E7A91] text-[14px] sm:text-[15px] md:text-[16px] mb-3 mt-2">
        Mysterious kidnappings in an icy rural town prompts the FBI to reunite
        paranormal specialists Mulder and Scully to investigate.
      </p>
      <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#6E7A91] font-semibold mb-1">
        Starring:{" "}
        <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal">
          David Duchovny, Gillian Anderson, Billy Connolly, Amanda Peet, Alvin
          "Xzibit" Joiner
        </span>
      </p>
      <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#6E7A91] font-semibold mb-4">
        Director:{" "}
        <span className="text-[14px] sm:text-[15px] md:text-[16px] font-normal">
          Chris Carter
        </span>
      </p>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#6E7A91]">
        PG-13 Thriller, Drama, Mystery, Science Fiction, Movie-2008
      </p>
    </div>
  );
}

export default memo(DetailsIWantToBelieve);
