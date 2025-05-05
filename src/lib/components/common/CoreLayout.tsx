import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const CoreLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-40 md:pt-48">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default CoreLayout;
