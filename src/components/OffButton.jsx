import { Link } from "react-router-dom";
import { off } from "../assets";

export default function OffButton({ link = "/" }) {
  return (
    <Link
      to={link}
      className="absolute right-3.5 top-3.5 flex flex-col items-center group cursor-pointer"
    >
      <img src={off} alt="Sign out icon" className="size-4" />
      <p className="text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
        Sign out
      </p>
    </Link>
  );
}
