import { useState } from "react";
import { motion } from "motion/react";

export default function SendModal({ onClose }) {
  const [successMsg, setSuccessMsg] = useState("");

  const handleSend = () => {
    // contoh address tujuan (bisa nanti diganti dynamic sesuai input)
    const txHash = "0x1234...abcd5678";
    setSuccessMsg(`Sent ${txHash}`);

    // auto close notifikasi setelah 3 detik
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      {/* Border Gradient Wrapper */}
      <div className="flex items-center justify-center w-fit max-w-[90%] p-1 bg-gradient-to-r from-yellow via-blue to-green rounded-xl">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-black rounded-lg p-6 w-full  shadow-lg flex flex-col gap-4 relative"
        >
          <h2 className="text-lg font-semibold text-white text-center">
            Send USDC
          </h2>

          <div className="flex flex-col gap-3 w-full">
            <input
              type="text"
              placeholder="Recipient Address"
              className="text-white border border-gray-300 rounded-lg px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-blue placeholder-text-muted bg-black"
            />
            <input
              type="number"
              placeholder="Amount"
              className="text-white border border-gray-300 rounded-lg px-3 py-2 text-sm 
                focus:outline-none focus:ring-2 focus:ring-blue placeholder-text-muted bg-black"
            />
          </div>

          {/* Success Notification */}
          {successMsg && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg shadow-md">
              {successMsg}
            </div>
          )}

          <div className="flex justify-end w-full gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSend}
              className="px-4 py-2 rounded-lg bg-blue text-white hover:bg-blue-600 text-sm cursor-pointer"
            >
              Send
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
