import { ChangeEvent, FC, InputHTMLAttributes } from "react";

interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  handleChecked: (checked: boolean) => void;
  checked: boolean;
  className?: string;
}

const Toggle: FC<ToggleProps> = ({
  label,
  checked,
  handleChecked,
  className,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    handleChecked(newChecked);
  };

  return (
    <div className={className}>
      <div
        className={
          "relative mr-2 inline-block w-10 select-none align-middle transition duration-500 ease-in "
        }
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 bg-white"
          checked={checked}
          onChange={handleChange}
        />
        <label
          htmlFor="toggle"
          className="toggle-label block h-6 cursor-pointer overflow-hidden rounded-full bg-gray-300"
        ></label>
      </div>
      {label && (
        <label htmlFor="toggle" className="text-xs text-gray-700">
          {label}
        </label>
      )}
    </div>
  );
};

export default Toggle;
