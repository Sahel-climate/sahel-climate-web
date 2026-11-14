import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionHeading = ({
  children,
  className = "",
  id,
}: SectionHeadingProps) => {
  return (
    <h2
      id={id}
      className={`font-display text-3xl font-bold
        leading-[1.14] tracking-tight
        sm:text-4xl lg:text-[2.9rem] ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
