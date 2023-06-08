interface Props {
  icon: ({ fillColor }: { fillColor: string }) => JSX.Element;
  fillColor: string;
  tooltip: string;
  onClick: () => void;
}

const MobileBarButton = ({ icon, fillColor, tooltip, onClick }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="flex h-11 w-11 items-center justify-center"
        onClick={() => onClick()}
      >
        {icon({ fillColor })}
      </button>
      <p className="text-sm text-white">{tooltip}</p>
    </div>
  );
};

export default MobileBarButton;
