import DonateButton from "../common/DonateButton";
import { siteConfig } from "../../config/siteConfig";

import logo from "../../assets/logo1.jpg";

interface FooterBrandProps {
  tagline: string;
  onDonate: () => void;
}

const FooterBrand = ({ tagline, onDonate }: FooterBrandProps) => {
  return (
    <div>
      {/* Organisation logo and name */}
      <div className="flex items-center gap-4">
        {/*
          CHANGE 1: Removed the circular container.

          Before:
          - h-14 w-14
          - rounded-full
          - bg-paper

          Now:
          - w-24 sets the logo container width to 96px.
          - sm:w-28 increases it to 112px on larger screens.
          - shrink-0 prevents the logo from shrinking.
          - No fixed height, allowing the logo to maintain
            its natural proportions.
        */}
        <div className="w-24 shrink-0 sm:w-28">
          {/*
            CHANGE 2: Updated the image styling.

            Before:
            - h-11 w-11
            - object-contain

            Now:
            - block removes inline image baseline spacing.
            - w-full fills the parent container width.
            - h-auto preserves the original aspect ratio.
            - object-contain ensures the entire logo is visible.

            This prevents unnecessary spacing and cropping.
          */}
          <img
            src={logo}
            alt={siteConfig.name}
            className="block h-auto w-full object-contain rounded-full"
          />
        </div>

        {/*
          CHANGE 3: Preserved the organisation name
          and short name.

          No changes to the typography or content.
        */}
        <div className="leading-tight">
          <p className="font-display text-2xl font-extrabold">
            {siteConfig.short}
          </p>

          <p className="font-display text-sm font-semibold text-paper/75">
            {siteConfig.name}
          </p>
        </div>
      </div>

      {/* Tagline - unchanged */}
      <p className="mt-5 font-display text-lg font-bold text-leaf-300">
        {tagline}
      </p>

      {/* Donate button - unchanged */}
      <DonateButton className="mt-6" onClick={onDonate} />
    </div>
  );
};

export default FooterBrand;
