import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * CounterAnimation
 * 
 * @param {number} from - angka awal
 * @param {number} to - angka tujuan
 * @param {number} duration - durasi animasi (detik)
 * @param {boolean} format - true untuk format ribuan (e.g., 1,250)
 */
export default function CounterAnimation({ from = 0, to = 1000, duration = 2, format = true }) {
  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        const value = Math.floor(v);
        setDisplay(format ? value.toLocaleString() : value);
      },
    });
    return () => controls.stop();
  }, [count, to, duration, format]);

  return <motion.span>{display}</motion.span>;
}
