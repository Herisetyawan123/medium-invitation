import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import CoverSection from "../components/cover-section";
import CopleSection from "../components/mempelai";
import GallerySection from "../components/galery";
import SaveTheDateSection from "../components/save-the-date";

function RightSide() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full h-full">
      <CoverSection />
      <CopleSection />
      <GallerySection />
      <SaveTheDateSection />
    </div>
  );
}

export default RightSide;
