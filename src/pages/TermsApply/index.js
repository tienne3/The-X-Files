import { Link } from "react-router-dom";
import Footer from "~/Layouts/components/Footer";
import HeaderPayment from "../Payment/components/HeaderPayment";

function TermsApply() {
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 h-[59px] bg-white">
        <HeaderPayment />
      </div>
      {/* body */}
      <div className="min-h-[1000px] bg-[#f7f7f9] mt-[60px] flex justify-center">
        <div className="w-full md:w-[768px] mx-auto text-textGray text-[15px] sm:text-[16px] md:text-[17px] pt-10 px-5 md:px-[50px] lg:px-[10px] leading-6 pb-5">
          <h3 className="text-[32px] sm:text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-semibold leading-[50px]">
            Hulu, Disney+, ESPN+ Bundle Terms and Conditions
          </h3>
          <p className="mt-6 mb-3">EFFECTIVE DATE: November 18, 2021</p>
          <p>
            These Terms and Conditions govern your purchase of a subscription
            giving you access to each of Hulu (Hulu’s ad-supported plan),
            Disney+, and ESPN+ (“Bundled Services”) for the then-advertised
            price plus applicable taxes, that represents a discounted price as
            compared to the retail price of each plan when purchased separately
            (“Bundle”). By purchasing the Bundle through Hulu or its supported
            third-party partners (which, for clarity, do not include Disney+ or
            ESPN+), you also agree to the
            <Link to={"#"} className="text-textBlue ml-1 underline">
              Disney+ and ESPN+ Subscriber Agreement
            </Link>
            . If you purchase the Bundle through Hulu or its supported
            third-party partners, then in the event of any conflict between the
            <Link to={"#"} className="text-textBlue ml-1 underline">
              Disney+ and ESPN+ Subscriber Agreement
            </Link>{" "}
            and the provisions in these Terms and Conditions concerning Bundle
            purchase, billing, and cancellation, these Terms and Conditions
            control.
          </p>
          <p className="mt-4">
            These Terms and Conditions also incorporate by reference the
            <Link to={"#"} className="text-textBlue ml-1 underline mr-1">
              Hulu Terms of Use
            </Link>
            as if set forth herein, including without limitation, Section 11
            (“Disclaimer of Warranties, Limitation of Liability and Indemnity”),
            Section 13 (“Arbitration of Claims”), Section 14 (“Limitation on
            Time to Bring a Claim”) and Section 15.3 (“Choice of Law and
            Forum”).
          </p>
          {/* 1 */}
          <p className="mt-4">
            <strong className="font-semibold">1. Eligibility Criteria.</strong>{" "}
            The Bundle is only available to residents of the United States and
            certain U.S. territories and who are 18 years of age (or the age of
            majority in your state or territory of residence). If you subscribe
            to the Bundle and are under 18 years of age, you will be unable to
            activate one or more of your Bundled Service subscriptions, and your
            Bundle subscription may be canceled without notice.
          </p>
          {/*  */}
          {/* 2 */}
          <p className="mt-4">
            <strong className="font-semibold">2. Free Trials.</strong> While you
            may be eligible for a free trial of one or more of the Bundled
            Services if purchased individually, there is no free trial for the
            Bundle unless specifically offered.
          </p>
          {/*  */}
          {/* 3 */}
          <p className="mt-4">
            <strong className="font-semibold">
              3. Modifications to Your Hulu Plan.
            </strong>{" "}
            If you subscribe to the Bundle through Hulu or its supported
            third-party partners, you may be given the choice to substitute a
            different Hulu plan for the Hulu (ad-supported) plan included with
            the Bundle. If you do so, the total amount you are billed will be
            adjusted accordingly.
          </p>
          {/*  */}
          {/* 4 */}
          <p className="mt-4">
            <strong className="font-semibold">
              4. Disney+ and ESPN+ Activation.
            </strong>{" "}
            After you complete your purchase of the Bundle through Hulu, you may
            need to follow the instructions provided to create one separate
            account for Disney+ and ESPN+ and activate those subscriptions.
          </p>
          {/*  */}
          {/* 5 */}
          <p className="mt-4 mb-3">
            <strong className="font-semibold">5. Data Sharing.</strong> By
            subscribing to the Bundle, you agree that certain account
            information (e.g., your e-mail address) will be provided to each
            Bundled Service for purposes of assessing your eligibility for the
            Bundle, activating, administering, improving your experience with
            the Bundle and each Bundled Service, and communicating with you
            about the Bundle and each Bundled Service. Any such account
            information received by the Bundled Services will be subject to each
            Bundled Service provider’s respective Privacy Policy which can be
            found here:
          </p>
          <Link to={"#"} className="text-textBlue underline">
            https://hulu.com/privacy
          </Link>
          <br />
          <Link to={"#"} className="text-textBlue underline">
            https://privacy.thewaltdisneycompany.com/en/current-privacy-policy
          </Link>
          {/*  */}
          {/* 6 */}
          <p className="mt-4">
            <strong className="font-semibold">6. Separate Apps.</strong> You
            will need to access each Bundled Service through its respective
            website or application to access the content available on that
            Bundled Service, and subject to the availability of features and
            functionalities (e.g., number of permitted simultaneous content
            streams, content resolution, geographic limitations for access,
            temporary downloads) for that Bundled Service.
          </p>
          {/*  */}
          {/* 7 */}
          <p className="mt-4">
            <strong className="font-semibold">7. Cancellation.</strong> If you
            purchase the Bundle through Hulu or its supported third-party
            partners, you may cancel the Bundle at any time, effective as of the
            end of your current paid billing cycle. By canceling the Bundle, you
            will lose access to all Bundled Services.
          </p>
          {/*  */}
          {/* 8 */}
          <p className="mt-4">
            <strong className="font-semibold">8. Modifications.</strong> This
            promotional offer may be modified or terminated at any time. Hulu
            also reserves the right to amend, modify, or waive these Terms and
            Conditions from time to time, effective automatically upon your
            purchase of the Bundle (if you are a new or returning Bundle
            subscriber) or 30 days after the revised Terms and Conditions are
            posted (if you are currently a Bundle subscriber).
          </p>
          {/*  */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsApply;
