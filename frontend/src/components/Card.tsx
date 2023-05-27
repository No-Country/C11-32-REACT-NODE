import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card: FC<Props> = ({ children }) => {
  return (
    <section className="mb-0 ml-0 mr-0 mt-8 flow-root rounded-lg pb-4 pl-10 pr-10 pt-4 shadow-xl sm:py-2">
      {children}
    </section>
  );
};

export default Card;
