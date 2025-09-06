import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { BrandBlock, DetailsBlock, IconBox, OffButton } from "../components";
import { brandStats, details, iconBoxes } from "../constants";
import { useState } from "react";
import SendModal from "../components/SendModal";
import ReceiveModal from "../components/ReceiveModal";

export default function Home() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [openModal, setOpenModal] = useState(null); // null | "send" | "receive"

  const handleDetails = () => setIsDetailsOpen(!isDetailsOpen);

  const handleIconClick = (text) => {
    if (text.toLowerCase() === "send") {
      setOpenModal("send");
    } else if (text.toLowerCase() === "receive") {
      setOpenModal("receive");
    }
  };

  return (
    <main className="flex items-start justify-center py-4 px-1 lg:min-h-screen ">
      <div className="container flex flex-col items-center justify-start gap-1 ">
        {/* top start */}
        <div className="relative bg-black w-full flex flex-col items-center p-10 pt-15 rounded-xl gap-5">
          <OffButton />

          {/* text-content start */}
          <div className="flex flex-col gap-5">
            <p className="text-center text-white font-bold">Your balance</p>
            <div className="flex items-end gap-1">
              <p className="text-5xl font-bold text-white">$</p>
              <p className="text-5xl tracking-tighter text-white">1.078.000</p>
              <p className="uppercase text-[0.75rem] text-text-muted">usdc</p>
            </div>
          </div>
          {/* text-content end */}

          {/* icon wrapper start */}
          <div className="flex items-center gap-3">
            {iconBoxes.map((icon, i) => (
              <div key={i} onClick={() => handleIconClick(icon.text)}>
                <IconBox {...icon} />
              </div>
            ))}
          </div>
          {/* icon wrapper end */}
        </div>
        {/* top end */}

        {/* mid start */}
        <div className="w-full bg-black flex flex-col p-4 rounded-xl">
          {/* head start */}
          <div
            onClick={handleDetails}
            className="w-full flex items-center justify-between cursor-pointer"
          >
            <p className="text-white text-sm">Recent activity</p>
            <span
  className={`transition-all duration-500 ease-in-out ${
    isDetailsOpen ? "rotate-180" : ""
  }`}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill={isDetailsOpen ? "#5cff33" : "#ffe433"}
  >
    <path d="M480-360 280-560h400L480-360Z" />
  </svg>
</span>

          </div>
          {/* head end */}

          {/* details start */}
          <div
            className={`w-full bg-black pt-10 flex-col gap-2 ${isDetailsOpen ? "flex" : "hidden"
              }`}
          >
            {details.map((detail, i) => (
              <DetailsBlock key={i} {...detail} />
            ))}
          </div>
          {/* details end */}
        </div>
        {/* mid end */}

        {/* bottom start */}
        <div className="w-full h-[240px] flex flex-col gap-1 rounded-xl overflow-auto scrollbar-hide">
          {brandStats.map((brand, i) => (
            <BrandBlock key={i} {...brand} />
          ))}
        </div>
        {/* bottom end */}
      </div>

      {/* MODALS */}
      {openModal === "send" && <SendModal onClose={() => setOpenModal(null)} />}
      {openModal === "receive" && <ReceiveModal onClose={() => setOpenModal(null)} />}
    </main>
  );
}
