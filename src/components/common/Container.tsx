import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow";
}

const Container = ({
  children,
  className = "",
  size = "default",
}: ContainerProps) => {
  const widths = {
    default: "max-w-[1440px]",
    narrow: "max-w-6xl",
  };

  return (
    <div
      className={`mx-auto w-full ${widths[size]}
        px-5 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
