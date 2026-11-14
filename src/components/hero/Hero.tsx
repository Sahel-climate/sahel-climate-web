import { useTranslation } from "react-i18next";

import Container from "../common/Container";
import DonateButton from "../common/DonateButton";
import HeroSlider from "./heroSlider";

interface HeroProps {
  onDonate: () => void;
}

const Hero = ({ onDonate }: HeroProps) => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative overflow-hidden
        bg-[#123D24] text-[#FAF9F4]"
    >
      {/* Decorative background circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute
          -inset-e-52 -top-52 h-190 w-190
          rounded-full border border-[#65A30D]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute
          -inset-e-24 -top-24 h-130 w-130
          rounded-full border border-[#65A30D]/10"
      />

      <Container
        className="relative grid grid-cols-1
          gap-10 py-14 sm:py-16
          lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]
          lg:items-start lg:gap-12 lg:py-20
          xl:gap-16"
      >
        {/* Hero content */}
        <div className="min-w-0">
          {/* Organization and location */}
          <p
            className="mb-5 font-display text-sm
              font-bold tracking-wide
              text-millet-500 sm:text-base"
          >
            {t("hero.eyebrow")}
          </p>

          {/* Main heading */}
          <h1
            className="font-display
              text-[clamp(2rem,3.5vw,3.25rem)]
              font-extrabold leading-[1.12]
              tracking-tight text-balance"
          >
            {t("hero.title")}
          </h1>

          {/* Description */}
          <p
            className="mt-6 max-w-xl text-base
              leading-relaxed text-[#FAF9F4]/80
              sm:text-lg"
          >
            {t("hero.sub")}
          </p>

          {/* Call-to-action buttons */}
          <div
            className="mt-8 flex flex-wrap
              items-center gap-3"
          >
            {/* Opens the shared Donate Modal */}
            <DonateButton onClick={onDonate} size="lg">
              {t("hero.donate")}
            </DonateButton>

            <a
              href="#programmes"
              className="inline-flex items-center
                justify-center rounded-full
                border border-[#FAF9F4]/40
                px-7 py-3.5 font-display
                text-base font-bold text-[#FAF9F4]
                transition-colors duration-200
                hover:bg-[#FAF9F4]
                hover:text-[#123D24]
                sm:text-lg"
            >
              {t("hero.programmes")}
            </a>
          </div>
        </div>

        {/* Image slider */}
        <div
          className="mx-auto w-full min-w-0
            lg:self-start"
        >
          <HeroSlider />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
