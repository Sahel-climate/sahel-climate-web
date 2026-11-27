import { HeartHandshake } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../common/Container";

const TopBar = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#062613] text-[#FAF9F4]">
      <Container
        className="flex min-h-9 items-center justify-center
          py-1.5 text-[0.8rem] leading-snug"
      >
        {/* NGO identity */}
        <p className="flex items-center gap-2 font-display font-semibold">
          <HeartHandshake
            size={15}
            className="shrink-0 text-millet-500"
            aria-hidden="true"
          />

          <span>{t("topbar.ngo")}</span>
        </p>
      </Container>
    </div>
  );
};

export default TopBar;
