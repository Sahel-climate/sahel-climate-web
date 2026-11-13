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
          -end-52 -top-52 h-[760px] w-[760px]
          rounded-full border border-[#65A30D]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute
          -end-24 -top-24 h-[520px] w-[520px]
          rounded-full border border-[#65A30D]/10"
      />

      <Container
        className="relative grid items-center
          gap-10 py-14 sm:py-16
          lg:grid-cols-[1.1fr_0.9fr]
          lg:gap-16 lg:py-20
          xl:gap-20"
      >
        {/* Hero content */}
        <div className="min-w-0">
          {/* Organization and location */}
          <p
            className="mb-5 font-display text-sm
              font-bold tracking-wide
              text-[#F2B632] sm:text-base"
          >
            {t("hero.eyebrow")}
          </p>

          {/* Main heading */}
          <h1
            className="font-display text-[2.35rem]
              font-extrabold leading-[1.08]
              tracking-tight sm:text-[2.8rem]
              xl:text-[3.25rem]"
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
            <DonateButton onClick={onDonate} size="lg">
              {t("hero.donate")}
            </DonateButton>

            <a
              href="#programmes"
              className="inline-flex items-center
                justify-center rounded-full
                border border-[#FAF9F4]/40
                px-7 py-3.5 font-display
                text-lg font-bold text-[#FAF9F4]
                transition-colors duration-200
                hover:bg-[#FAF9F4]
                hover:text-[#123D24]"
            >
              {t("hero.programmes")}
            </a>
          </div>
        </div>

        {/* Image slider */}
        <div className="mx-auto w-full min-w-0">
          <HeroSlider />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
