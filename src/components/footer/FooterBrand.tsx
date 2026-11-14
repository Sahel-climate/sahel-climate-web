import DonateButton from "../common/DonateButton";
import { siteConfig } from "../../config/siteConfig";

import logo from "../../assets/logo.jpg";

interface FooterBrandProps {
  tagline: string;
  onDonate: () => void;
}

const FooterBrand = ({ tagline, onDonate }: FooterBrandProps) => {
  return (
    <div>
      {/* Organisation logo and name */}
      <div className="flex items-center gap-3">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-paper">
          <img
            src={logo}
            alt={siteConfig.name}
            className="h-11 w-11 object-contain"
          />
        </span>

        <div className="leading-tight">
          <p className="font-display text-2xl font-extrabold">
            {siteConfig.short}
          </p>

          <p className="font-display text-sm font-semibold text-paper/75">
            {siteConfig.name}
          </p>
        </div>
      </div>

      {/* Tagline */}
      <p className="mt-5 font-display text-lg font-bold text-leaf-300">
        {tagline}
      </p>

      {/* Donate button */}
      <DonateButton className="mt-6" onClick={onDonate} />
    </div>
  );
};

export default FooterBrand;
