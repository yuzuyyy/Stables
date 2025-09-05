import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { buy, down, swap, up } from "../assets";
import { IconBox } from "../components";
import { iconBoxes } from "../contants";

export default function Home() {
  return (
    <main className="flex items-center justify-center py-[5rem] px-5">
      <div className="container bg-blue-400 flex flex-col items-center justify-center">
        {/* top start */}
        <div className="bg-black w-full flex flex-col items-center p-10 rounded-xl gap-5">
          {/* text-content start */}
          <div className="flex flex-col gap-5">
            <p className="text-center text-white">Your balance</p>
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
              <IconBox key={i} {...icon} />
            ))}
          </div>
          {/* icon wrapper end */}
        </div>
        {/* top end */}
      </div>
    </main>
  );
}
