import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <section
      className={
        "mb-0 ml-0 mr-0 rounded-lg pb-4 pl-10 pr-10 pt-4 shadow-xl sm:py-2 " +
        className
      }
    >
      {children}
    </section>
  );
};

export default Card;
