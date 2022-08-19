import BackgroundMobile from "./BackgroundMobile";
import BackgroundPC from "./BackgroundPC";

function Header() {
  return (
    <div className="wrapper">
      <BackgroundMobile />
      <BackgroundPC />
    </div>
  );
}

export default Header;
