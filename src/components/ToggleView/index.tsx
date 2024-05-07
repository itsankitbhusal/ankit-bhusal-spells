export default function ToggleView({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button className=" underline text-blue-400" onClick={onClick}>
      {label}
    </button>
  );
}
