import { up } from "../assets";

const colorVariants = {
  red: "bg-red",     // var(--color-red)
  yellow: "bg-yellow",
  blue: "bg-blue",
  green: "bg-green",
};

export default function IconBox({
  icon = up,
  fill = "red",  // default
  text = "send",
  onClick
}) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-1 group">
      <div className={`${colorVariants[fill]} rounded-full p-3 group-hover:scale-110 transition-all duration-300 cursor-pointer`}>
        <img src={icon} alt={text} className="size-4" />
      </div>
      <p className="text-xs text-white capitalize">{text}</p>
    </button>
  );
}
