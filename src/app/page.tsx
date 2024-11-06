import Navbar from "../components/Navbar/page";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Footer />
      <ToastContainer />
    </>
  );
}
