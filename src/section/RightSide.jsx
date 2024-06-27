import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import CoverSection from "../components/cover-section";
import CopleSection from "../components/mempelai";
import GallerySection from "../components/galery";
import SaveTheDateSection from "../components/save-the-date";
import WeddingGiftSection from "../components/wedding-gift";

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
      <WeddingGiftSection />
    </div>
  );
}

export default RightSide;
