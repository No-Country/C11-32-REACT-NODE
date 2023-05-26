import { FC } from "react";

interface Props {
  Icon: FC;
}

const StepperItem: FC<Props> = ({ Icon }) => {
  return (
    <span
      className={
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 lg:h-12 lg:w-12"
      }
    >
      <Icon />
    </span>
  );
};

export default StepperItem;
