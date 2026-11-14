import { useTranslation } from "react-i18next";

import Container from "../common/Container";

import ImpactGoals from "./ImpactGoals";
import ImpactTestimonials from "./ImpactTestimonials";
import ImpactLessons from "./ImpactLessons";

import type { ImpactContent } from "./types/impact.types";

const ImpactMore = () => {
  const { t } = useTranslation();

  const impact = t("impact", {
    returnObjects: true,
  }) as ImpactContent;

  return (
    <section aria-label={impact.goalsT} className="bg-paper py-20 sm:py-24">
      <Container size="narrow">
        {/* Goals for 2030 */}
        <ImpactGoals title={impact.goalsT} goals={impact.goals} />

        {/* Testimonials, lessons and challenges */}
        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <ImpactTestimonials title={impact.quotesT} quotes={impact.quotes} />

          <ImpactLessons
            title={impact.lessonsT}
            lessons={impact.lessons}
            challengesTitle={impact.challengesT}
            challenges={impact.challenges}
          />
        </div>
      </Container>
    </section>
  );
};

export default ImpactMore;
