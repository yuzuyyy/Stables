export default function DetailsBlock({detail, info}) {
  return (
    <div className="flex justify-between">
      <p className="text-white text-xs capitalize">{detail}</p>
      <p className="text-text-muted text-xs capitalize">{info}</p>
    </div>
  );
}
