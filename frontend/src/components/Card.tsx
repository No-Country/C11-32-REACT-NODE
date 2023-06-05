import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <section
      className={"rounded-lg pb-4 pl-10 pr-10 pt-4 shadow-xl " + className}
    >
      {children}
    </section>
  );
};

export default Card;
