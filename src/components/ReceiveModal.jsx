import { useState } from "react";
import { motion } from "motion/react";

export default function ReceiveModal({ onClose }) {
  const [copied, setCopied] = useState(false);

  const address = "0x1234...abcd5678"; // contoh alamat, bisa dynamic props

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset setelah 2 detik
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg flex flex-col gap-4"
      >
        <h2 className="text-lg font-bold text-gray-800">Receive USDC</h2>

        <div className="flex flex-col items-center gap-3">
          {/* QR Code placeholder */}
          <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            QR
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-full justify-between">
            <p className="text-sm text-gray-700 truncate">{address}</p>
            <button
              onClick={handleCopy}
              className="px-3 py-1 rounded-md bg-blue-500 text-white text-xs hover:bg-blue-600 cursor-pointer"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
}
