import { useState } from "react";
import { motion } from "motion/react";

export default function ReceiveModal({ onClose }) {
  const [copied, setCopied] = useState(false);
  const walletAddress = "0xAbC1234EfGh5678IjKlMnOpQrStUvWxYz";

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      {/* Border Gradient Wrapper */}
      <div className="flex items-center justify-center w-fit max-w-[80%] p-1 bg-gradient-to-r from-yellow via-blue to-green rounded-xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-black rounded-lg p-6 w-full max-w-md shadow-lg flex flex-col gap-4 relative"
        >
          <h2 className="text-lg font-semibold text-white text-center">
            Receive USDC
          </h2>

          {/* Address Box */}
          <div className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 text-sm bg-black">
            <p className="text-white truncate">{walletAddress}</p>
            <button
              onClick={handleCopy}
              className="ml-2 px-3 py-1 rounded-md bg-blue text-white text-xs hover:bg-blue-600"
            >
              {copied ? "Copied" : "Copy"}
            </button>
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
    </div>
  );
}
