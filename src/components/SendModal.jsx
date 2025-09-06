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
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg flex flex-col gap-4 relative"
      >
        <h2 className="text-lg font-bold text-gray-800">Send USDC</h2>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Recipient Address"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Amount"
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Success Notification */}
        {successMsg && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-green-500 text-white text-sm px-4 py-2 rounded-lg shadow-md">
            {successMsg}
          </div>
        )}

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 text-sm"
          >
            Send
          </button>
        </div>
      </motion.div>
    </div>
  );
}
