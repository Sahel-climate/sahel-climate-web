import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface DonateButtonProps {
  onClick: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: ReactNode;
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const DonateButton = ({
  onClick,
  size = "md",
  className = "",
  children,
}: DonateButtonProps) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex shrink-0 items-center
        justify-center whitespace-nowrap rounded-full
        bg-[var(--color-millet-500)]
        font-display font-bold
        text-[var(--color-forest-950)]
        transition-colors duration-200
        hover:bg-[var(--color-millet-600)]
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#F2B632]
        ${sizeClasses[size]} ${className}`}
    >
      {children ?? t("nav.donate")}
    </button>
  );
};

export default DonateButton;
