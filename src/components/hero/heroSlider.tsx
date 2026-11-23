import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageIcon } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";

import { heroImages } from "./data/hero";

import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";

const HeroSlider = () => {
  const { t, i18n } = useTranslation();

  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  // Placeholder when no images are available
  if (heroImages.length === 0) {
    return (
      <div
        className="flex h-65 w-full
          items-center justify-center
          rounded-2xl border border-white/15
          bg-white/5 sm:h-85
          lg:h-110"
      >
        <div className="px-6 text-center text-white/60">
          <ImageIcon size={48} strokeWidth={1.2} className="mx-auto mb-4" />

          <p className="font-display font-semibold">
            {t("hero.imagePlaceholder")}
          </p>
        </div>
      </div>
    );
  }

  const hasMultipleImages = heroImages.length > 1;

  return (
    <div
      className="hero-slider relative
        h-[260px] w-full overflow-hidden
        rounded-2xl shadow-xl
        sm:h-[340px] lg:h-[400px]"
    >
      <Swiper
        key={`${i18n.dir()}-${reducedMotion}`}
        dir={i18n.dir()}
        modules={[Autoplay, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        loop={hasMultipleImages}
        speed={reducedMotion ? 0 : 800}
        autoplay={
          hasMultipleImages && !reducedMotion
            ? {
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        pagination={hasMultipleImages ? { clickable: true } : false}
        className="h-full w-full"
      >
        {heroImages.map((image, index) => (
          <SwiperSlide key={image.id}>
            <img
              src={image.src}
              alt={t(image.alt, {
                defaultValue: t("hero.imageAlt"),
              })}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
