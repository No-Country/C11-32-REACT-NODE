import { useState } from "react";

interface Props {
  icon: ({ fillColor }: { fillColor: string }) => JSX.Element;
  tooltip: string;
  renderRightComponent?: () => JSX.Element;
  bgColor: string;
  borderColor?: string;
  onClick: () => void;
  badge?: string;
  fillColor: string;
}

const BarButton = ({
  icon,
  tooltip,
  renderRightComponent,
  bgColor,
  borderColor,
  onClick,
  fillColor,
}: Props) => {
  const [mouseOver, setMouseOver] = useState<Boolean>(false);
  const [mouseDown, setMouseDown] = useState<Boolean>(false);

  return (
    <div className="shadow-lg">
      <div
        className={`border-3 relative flex items-center justify-center rounded-lg`}
        style={{
          backgroundColor: `${bgColor}`,
          border: `1px solid ${borderColor ? borderColor : "#4484CE"}`,
        }}
      >
        <button
          onMouseEnter={() => {
            setMouseOver(true);
          }}
          onMouseLeave={() => {
            setMouseOver(false);
          }}
          onMouseDown={() => {
            setMouseDown(true);
          }}
          onMouseUp={() => {
            setMouseDown(false);
          }}
          onClick={() => onClick()}
          className="flex h-11 w-11 items-center  justify-center"
          style={{
            transform: `scale(${mouseOver ? (mouseDown ? 0.95 : 1.15) : 1})`,
            transition: `all ${200}ms`,
            transitionTimingFunction: "linear",
          }}
        >
          {icon({ fillColor })}
        </button>
        <div
          style={{ zIndex: "6000" }}
          className={`${
            mouseOver || mouseDown ? "" : "hidden"
          } absolute bottom-full left-1/2 mb-2 flex -translate-x-1/2 transform flex-col items-center justify-center whitespace-nowrap rounded-md bg-black p-1.5`}
        >
          <p className="text-sm text-white">{tooltip}</p>
        </div>
        <div className="relative flex h-11 items-center justify-center">
          {renderRightComponent && renderRightComponent()}
        </div>
      </div>
    </div>
  );
};

export default BarButton;
