import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <section className="h-screen flex items-center justify-center ">
      {/* Card dengan animasi fade + scale */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6 p-10 bg-gray-900 rounded-2xl shadow-lg border border-gray-700"
      >
        {/* Logo */}
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center justify-center bg-white rounded-full p-3"
        >
          <span className="text-2xl font-bold text-black">S</span>
        </motion.div>

        {/* App Name & Tagline */}
        <h1 className="text-white text-2xl font-bold">Stables</h1>
        <p className="text-text-muted text-sm text-center max-w-[200px]">
          Your playful way to explore stablecoins. Smooth, simple, and fun.
        </p>

        {/* Button dengan animasi tap */}
        <motion.div whileTap={{ scale: 0.95 }} className="w-full">
          <Link
            to="/"
            className="block w-full text-center px-6 py-3 rounded-xl bg-green text-black font-semibold hover:bg-yellow-400 transition-all duration-300"
          >
            Enter Wallet
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
