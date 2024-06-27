// asset and component
import { useState, useRef } from "react";
import "./index.css";
import LeftSide from "./section/LeftSide";
import RightSide from "./section/RightSide";

function App() {
  // State untuk melacak apakah musik diputar atau dijeda
  const [isPlaying, setIsPlaying] = useState(false);
  // State untuk kontrol visibilitas overlay
  const [overlayVisible, setOverlayVisible] = useState(true);
  // Ref untuk elemen audio
  const audioRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Fungsi untuk menyembunyikan overlay
  // Fungsi untuk menyembunyikan overlay
  const hideOverlay = () => {
    setAnimate(true);
    setTimeout(() => {
      setOverlayVisible(false);
      toggleAudio();
    }, 500); // Durasi animasi harus sesuai dengan CSS
  };

  // Fungsi untuk play/pause audio
  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <main className="w-full grid grid-cols-12">
      <audio src="/sound.mp3" loop hidden ref={audioRef} />
      {overlayVisible && (
        <div
          className={`overlay fixed inset-0 flex items-center justify-center bg-slate-900 text-white z-50 ${
            animate ? "animate-slide-up" : ""
          }`}
        >
          <button
            className="bg-white text-black px-6 py-3 rounded"
            onClick={hideOverlay}
          >
            Buka
          </button>
        </div>
      )}
      <div className="hidden lg:block lg:col-span-8 h-[100vh] w-full sticky top-0">
        <LeftSide />
      </div>
      <div className="col-span-12 lg:col-span-4 overflow-auto">
        <RightSide />
      </div>
      <div className="fixed bottom-10 left-10">
        <button
          className="w-16 h-16 bg-slate-400/80 backdrop-blur rounded-full"
          onClick={toggleAudio}
        >
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.25 6.75h1.5v10.5h-1.5V6.75zm4.5 0h1.5v10.5h-1.5V6.75z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 4.75l13.5 7.5-13.5 7.5V4.75z"
              />
            </svg>
          )}
        </button>
      </div>
    </main>
  );
}

export default App;
