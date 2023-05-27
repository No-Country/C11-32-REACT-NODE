import { Button, Card, StepperItem } from "@/components";
import { FC } from "react";

interface Step {
  Icon: FC;
  Contend: FC;
}

interface Props {
  steps: Step[];
  activeStep: number;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const Stepper: FC<Props> = ({
  steps,
  activeStep,
  onClickPrev,
  onClickNext,
}) => {
  const { Contend } = steps[activeStep];
  return (
    <div>
      <ol className="flex w-full items-center pl-0">
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
                key={"stepper " + index}
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
          className={`flex  items-center ${
            activeStep >= steps.length - 1
              ? "text-blue-600 after:border-blue-100"
              : "text-gray-500 after:border-gray-100"
          }`}
        >
          <StepperItem Icon={steps[steps.length - 1].Icon} />
        </li>
      </ol>
      <Card>
        <Contend />
        <div className="mt-4 flex justify-between gap-2">
          <Button
            className="w-max"
            onClick={onClickPrev}
            disabled={activeStep === 0}
          >
            Prev
          </Button>
          <Button
            className="w-max"
            onClick={onClickNext}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Stepper;
