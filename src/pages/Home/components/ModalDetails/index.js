import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalDetails(props) {
  return (
    <div
      onClick={props.onClick}
      className="modal text-semibold fixed z-50 top-0 bottom-0 left-0 right-0 bg-black/[50%] md:px-20 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed text-start md:relative px-5 md:px-10 lg:px-[60px] bg-white w-[100%] lg:w-[920px] h-full md:h-[480px] lg:h-[440px] z-50 mx-auto my-auto md:mt-[100px] shadow-xl p-10 md:rounded-md"
      >
        {/* hide btn */}
        <div
          onClick={props.onClick}
          className="absolute cursor-pointer right-0 top-0 opacity-60 leading-[50px] text-[40px] md:text-[45px] font-thin px-5 text-black"
        >
          &times;
        </div>
        {/* title */}
        <h3 className="text-textColorPrimary font-semibold text-[18px] pt-[8px] md:pt-[10px] xl:pt-3">
          What's Included?
        </h3>

        {/* body */}
        <div className="text-textColorPrimary">
          <p className="mt-2">
            <span className="text-[20px] mr-1">
              <FontAwesomeIcon icon={faCheck} />
            </span>{" "}
            Subscriptions to Disney+, ESPN+, and Hulu for a discounted price.
            Available with Hulu (ad-supported) for $13.99/month or with Hulu (No
            Ads) for $19.99/month. Savings of up to $7.98/month compared to the
            regular price of each service.
          </p>
          <p className="mt-2">
            <span className="text-[20px] mr-1">
              <FontAwesomeIcon icon={faCheck} />
            </span>{" "}
            Also available: Hulu + Live TV, Disney+, and ESPN+ for $69.99/month
            or Hulu (No Ads) + Live TV, Disney+, and ESPN+ for $75.99/month.
          </p>
          <p className="mt-2">
            <span className="text-[20px] mr-1">
              <FontAwesomeIcon icon={faCheck} />
            </span>{" "}
            Enjoy all your favorite shows, movies, sports, and more using the
            Disney+, Hulu, and ESPN apps (or sites, for those on a browser).
            Download each app separately to access each service.
          </p>
          <p className="mt-2">
            <span className="text-[20px] mr-1">
              <FontAwesomeIcon icon={faCheck} />
            </span>{" "}
            Access select ESPN+ content via Hulu.
          </p>
          <p className="mt-2">
            <span className="text-[20px] mr-1">
              <FontAwesomeIcon icon={faCheck} />
            </span>{" "}
            Cancel anytime.
          </p>
          <p className="mt-4">
            No free trial available. You must be 18 years or older to sign up.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalDetails;
