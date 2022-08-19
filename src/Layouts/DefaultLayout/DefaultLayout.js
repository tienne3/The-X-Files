import Header from "../components/Header";
import Footer from "../components/Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container w-full max-w-[1600px]">
        <div className="content">{children}</div>
      </div>
      <div className="text-center">
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
