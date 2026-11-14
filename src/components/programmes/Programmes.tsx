import { useState } from "react";
import { useTranslation } from "react-i18next";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import ProgrammeTabs from "./ProgrammeTabs";
import ProgrammeDetail from "./ProgrammeDetail";
import UpcomingProgrammes from "./UpcomingProgrammes";

import type { ProgrammeId, ProgrammesContent } from "./types/programme.types";

const Programmes = () => {
  const { t } = useTranslation();

  const [activeId, setActiveId] = useState<ProgrammeId>("food");

  const programmes = t("programmes", {
    returnObjects: true,
  }) as ProgrammesContent;

  const activeProgramme =
    programmes.items.find((item) => item.id === activeId) ||
    programmes.items[0];

  return (
    <section
      id="programmes"
      aria-labelledby="programmes-heading"
      className="bg-paper-deep py-20 sm:py-28"
    >
      <Container size="narrow">
        {/* Section introduction */}
        <SectionHeading
          id="programmes-heading"
          className="max-w-[18ch] text-forest-900"
        >
          {programmes.title}
        </SectionHeading>

        <p className="mt-5 max-w-[56ch] text-lg text-ink/85">
          {programmes.intro}
        </p>

        {/* Programme selection and details */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <ProgrammeTabs
            items={programmes.items}
            activeId={activeId}
            onSelect={setActiveId}
          />

          {/* Desktop detail panel */}
          <div
            id={`programme-panel-${activeProgramme.id}`}
            role="tabpanel"
            aria-labelledby={`programme-tab-${activeProgramme.id}`}
            className="hidden lg:block"
          >
            <div className="sticky top-28">
              <ProgrammeDetail item={activeProgramme} />
            </div>
          </div>
        </div>

        {/* Upcoming programmes */}
        <UpcomingProgrammes
          title={programmes.comingT}
          items={programmes.coming}
        />
      </Container>
    </section>
  );
};

export default Programmes;
