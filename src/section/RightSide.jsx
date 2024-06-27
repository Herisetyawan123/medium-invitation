import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import CoverSection from "../components/cover-section";
import CopleSection from "../components/mempelai";
import GallerySection from "../components/galery";

function RightSide() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full h-full">
      <CoverSection />
      <CopleSection />
      <GallerySection />
    </div>
  );
}

export default RightSide;
