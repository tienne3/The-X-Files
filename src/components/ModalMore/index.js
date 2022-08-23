function ModalMore(props) {
  const handleHide = () => {
    props.onClick();
  };

  return (
    <div
      onClick={handleHide}
      className="modal text-semibold fixed z-10 top-0 bottom-0 left-0 right-0 bg-black/[50%] "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative px-5 md:px-8 lg:px-10 bg-white text-black w-[80%] sm:w-[80%] md:w-[600px] h-[410px] sm:h-[300px] md:h-[340px] lg:h-[360px] xl:h-[400px] z-50 mx-auto my-auto mt-[150px] sm:mt-[180px] lg:mt-40 shadow-xl p-10"
      >
        <div
          onClick={handleHide}
          className="absolute cursor-pointer right-0 top-0 opacity-60 leading-[50px] text-[40px] md:text-[45px] font-thin px-5 text-black"
        >
          &times;
        </div>
        <h3 className="text-textColorPrimary font-bold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[25px] pt-[8px] md:pt-[10px] xl:pt-3">
          The X-Files
        </h3>
        <p className="text-[13px] lg:text-[14px] xl:text-[16px] leading-5 md:leading-6 text-gray-900 xl:tracking-wide mt-2 md:mt-5 lg:mb-5 mb-3">
          The truth is out there. FBI agents Scully and Mulder seek it in this
          sci-fi phenomenon about their quest to explain the seemingly
          unexplainable. Their strange cases include UFO sightings, alien
          encounters and abductions, and just about everything else among the
          paranormal.
        </p>
        <strong className="text-[13px] lg:text-[14px] xl:tracking-wide text-[#6E7A91] mr-2">
          Starring:
        </strong>
        <span className="font-normal text-gray-800 xl:tracking-wide text-[13px] lg:text-[15px]">
          Gillian Anderson, David Duchovny, Mitch Pileggi
        </span>
        <div className="flex md:items-center mt-3">
          <p className="text-[13px] lg:text-[15px] text-gray-900 mr-5">TV14</p>
          <ul className="list-disc text-gray-900 text-[13px] xl:text-[15px] tracking-wide">
            <li className=" font-normal">
              Science Fiction, Cops & Detectives, Aliens, Thriller, Drama,
              Horror
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <p className="text-[13px] lg:text-[15px] text-gray-900 mr-6">
            Supernatura
          </p>
          <ul className="list-disc flex text-gray-900 text-[13px] lg:text-[15px] tracking-wide">
            <li className="mr-6">TV Series</li>
            <li>1993</li>
          </ul>
        </div>

        <button className="text-[10px] mt-4 sm:mt-6 text-gray-900 px-1 rounded font-bold border border-[#ccc]">
          HD
        </button>
      </div>
    </div>
  );
}

export default ModalMore;
