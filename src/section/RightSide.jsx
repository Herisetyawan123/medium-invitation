import { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import CoverSection from "../components/cover-section";
import CopleSection from "../components/mempelai";

function RightSide() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="w-full h-full">
      <CoverSection />
      <CopleSection />
    </div>
  );
}

export default RightSide;
