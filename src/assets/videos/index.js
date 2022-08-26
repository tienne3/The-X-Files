function VideoIntro() {
  return (
    <div className="flex justify-center px-2 mx-auto mt-5 md:mt-0 mb-0 md:mb-5 ">
      <iframe
        className="aspect-video w-full h-full sm:w-[560px] sm:h-[315px]"
        src="https://www.youtube.com/embed/Vpqffgak7To"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoIntro;
