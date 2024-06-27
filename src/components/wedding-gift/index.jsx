import React from "react";

function WeddingGiftSection() {
  return (
    <>
      <div className="bg-gray-200 py-20">
        <h1 className="font-['Tangerine'] text-center font-bold text-7xl">
          Wedding Gift
        </h1>
        <p className="my-5 font-['Maven Pro'] w-[75%] text-center mx-auto italic">
          your blessing and coming to our wedding are enough for us. However, if
          you want to give a gift we provide a Digital Envelope to make it
          easier for you. thank you
        </p>

        <div className="my-5 p-5 bg-white/80 backdrop-blur w-80 h-80 rounded-xl mx-auto">
          <div className="rounded-xl w-full h-full bg-gray-500 flex justify-center items-center">
            <h1 className="text-white font-semibold tex-center my-auto">
              No QR Code
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-white py-20">
        <h1 className="font-['Tangerine'] text-center font-bold text-7xl">
          Wedding Wish
        </h1>

        <form className="my-5 p-5  w-[85%] rounded-xl mx-auto space-y-5">
          <div className="w-full font-['Rondal-Regural'] space-y-1">
            <label htmlFor="">Nama</label>
            <input
              type="text"
              className="w-full bg-[#e2e6e1] text-black outline-none px-6 py-2 rounded-full"
              name=""
              id=""
              placeholder="Name"
            />
          </div>

          <div className="w-full font-['Rondal-Regural'] space-y-1">
            <label htmlFor="">Harapan</label>
            <input
              type="text"
              className="w-full bg-[#e2e6e1] text-black outline-none px-6 py-2 rounded-full"
              name=""
              id=""
              placeholder="Name"
            />
          </div>

          <div>
            <button className="px-10 py-3 rounded-full bg-[#53594A] text-white font-medium">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default WeddingGiftSection;
