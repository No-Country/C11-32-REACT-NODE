import { StepperItem } from "@/components";
import { FC } from "react";

interface Step {
  Icon: FC;
}

interface Props {
  steps: Step[];
  activeStep: number;
}

const Stepper: FC<Props> = ({ steps, activeStep }) => {
  return (
    <ol className="flex w-full items-center">
      <li
        className={`flex w-full items-center  after:inline-block after:h-1 after:w-full after:border-4 after:border-b ${
          activeStep >= 0
            ? "text-blue-600 after:border-blue-100"
            : "after:border-gray-100"
        } after:content-[''] dark:text-blue-500 dark:after:border-blue-800`}
      >
        <StepperItem Icon={steps[0].Icon} />
      </li>
      {steps.length > 2 &&
        steps.map(({ Icon }, index) => {
          if (index === 0 || index === steps.length - 1) return null;

          return (
            <li
              className={`flex w-full items-center after:inline-block after:h-1 after:w-full after:border-4 after:border-b  ${
                activeStep >= index
                  ? "text-blue-600 after:border-blue-100"
                  : "text-gray-500 after:border-gray-100"
              } after:content-[''] dark:after:border-gray-700`}
            >
              <StepperItem Icon={Icon} />
            </li>
          );
        })}

      <li
        className={`flex w-full items-center ${
          activeStep >= steps.length - 1
            ? "text-blue-600 after:border-blue-100"
            : "text-gray-500 after:border-gray-100"
        }`}
      >
        <StepperItem Icon={steps[steps.length - 1].Icon} />
      </li>
    </ol>
  );
};

export default Stepper;
