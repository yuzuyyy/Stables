export default function BrandBlock({
    image,
    name,
    currency,
    growth,
    textColor = "green", // default hijau
  }) {
    const textVariants = {
      green: "text-green",
      red: "text-red",
    };
  
    return (
      <div className="w-full bg-black flex items-center justify-between px-4 py-2 rounded-xl border-2 cursor-pointer group transition-all duration-500 ease-in-out hover:border-2 hover:border-green-500">
        {/* left content start */}
        <div className="flex items-center gap-2">
          <div className="flex h-full items-center justify-center bg-white rounded-full p-1">
            <img src={image} alt={name} className="size-7" />
          </div>
          <div className="flex flex-col">
            <p className="text-white text-xs capitalize group-hover:text-yellow-400">
              {name}
            </p>
            <p className="text-gray-400 uppercase text-xs">{currency}</p>
          </div>
        </div>
        {/* left content end */}
  
        <p className={`text-xs ${textVariants[textColor]}`}>{growth}</p>
      </div>
    );
  }
  