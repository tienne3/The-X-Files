import FooterPayment from "../Payment/components/FooterPayment";
import HeaderPayment from "../Payment/components/HeaderPayment";
import { useState } from "react";

function Register() {
  const [valueEmail, setValueEmail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueDate, setValueDate] = useState("");

  const handleValueEmail = (e) => {
    setValueEmail(e.target.value.trim());
  };

  const handleValuePassword = (e) => {
    setValuePassword(e.target.value.trim());
  };

  const handleValueName = (e) => {
    setValueName(e.target.value.trim());
  };

  const handleValueDate = (e) => {
    setValueDate(e.target.value.trim());
  };

  return (
    <div>
      <HeaderPayment />
      <div className="bg-[#f7f7f9] pt-[32px] pb-10 text-center">
        <h1 className="text-[28px] md:text-[38px] xl:text-[48px] font-black text-[#040405]">
          Create Your Account
        </h1>
        <p className="text-[#636E85] text-[14px] sm:text-[15px] md:text-[16px] px-8 lg:text-[17px] mt-[5px]">
          Use your email and password to watch on your favorite devices.
        </p>
        <form className="bg-white w-[90%] sm:w-[525px] md:w-[580px] h-[560px] md:h-[594px] mx-auto mt-[50px] shadow-md px-[20px] md:px-[56px] py-[30px] md:py-[48px] text-start">
          {/* email */}
          <div className="mb-7">
            <p className="text-[#636E85] text-[13px] font-bold mb-1">EMAIL</p>
            <input
              type={"email"}
              value={valueEmail}
              onChange={handleValueEmail}
              className="w-full outline-none border-[2px] border-[#999] rounded px-2 h-[48px]"
            />
          </div>

          {/* password */}
          <div className="mb-7">
            <p className="text-[#636E85] text-[13px] font-bold mb-1">
              PASSWORD
            </p>
            <input
              value={valuePassword}
              type={"password"}
              onChange={handleValuePassword}
              className="w-full outline-none border-[2px] border-[#999] rounded px-2 h-[48px]"
            />
          </div>

          {/* name */}
          <div className="mb-7">
            <p className="text-[#636E85] text-[13px] font-bold mb-1">NAME</p>
            <input
              value={valueName}
              onChange={handleValueName}
              className="w-full outline-none border-[2px] border-[#999] rounded px-2 h-[48px]"
            />
          </div>

          {/* birthdate */}
          <div className="mb-7">
            <p className="text-[#636E85] text-[13px] font-bold mb-1">
              BIRTHDATE
            </p>
            <input
              value={valueDate}
              onChange={handleValueDate}
              className="w-full outline-none border-[2px] border-[#999] rounded px-2 h-[48px]"
              type={"date"}
            />
          </div>

          {/* gender */}
          <div className="mb-7">
            <p className="text-[#636E85] text-[13px] font-bold mb-1">GENDER</p>
            <select className="w-full outline-none border-[2px] border-[#999] rounded px-2 h-[48px]">
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </form>
        <p className="mt-6 md:mt-[35px] mb-[25px] text-[#636E85] text-[12px] tracking-wide">
          By clicking “CONTINUE” you agree to the <br className="sm:hidden" />
          <span className="text-textBlue">Hulu Terms of Use</span> and{" "}
          <span className="text-textBlue">Privacy Policy</span>.
        </p>
        <button
          style={
            valueEmail.length > 6 &&
            valuePassword.length > 0 &&
            valueName.length > 0 &&
            valueDate.length > 0
              ? { backgroundColor: "#040405" }
              : {}
          }
          className="text-[#b9bfc8] bg-[#444] font-bold tracking-widest w-[90%] sm:w-[400px] h-[48px] rounded text-[14px]"
        >
          CONTINUE
        </button>
      </div>
      <FooterPayment />
    </div>
  );
}

export default Register;
