// import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import AboutHistory from "./AboutHistory";
import { Leaf } from "lucide-react";
// import AboutLeadership from "./AboutLeadership";

const About = () => {
  const { t } = useTranslation();

  // const objectives = t("about.objectives", {
  //   returnObjects: true,
  // }) as string[];

  const values = t("about.values", {
    returnObjects: true,
  }) as string[];

  const mission = t("about.mission", {
    returnObjects: true,
  }) as string[];

  const howWeWork = t("about.how", {
    returnObjects: true,
  }) as string[];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-paper py-20 sm:py-28"
    >
      <Container size="narrow">
        {/* Introduction */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              id="about-heading"
              className="text-forest-900 lg:text-[2.25rem]!"
            >
              {t("about.title")}
            </SectionHeading>
          </div>

          <p className="max-w-[62ch] text-lg leading-[1.75] sm:text-xl">
            {t("about.intro")}
          </p>
        </div>
        {/* Vision and Mission */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Vision */}
          <div>
            <h3 className="font-display text-xl font-bold text-leaf-600">
              {t("about.visionT")}
            </h3>

            <p className="mt-3 max-w-[48ch] font-body text-[1.35rem] leading-snug text-forest-900 sm:text-2xl">
              {t("about.vision")}
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="font-display text-xl font-bold text-leaf-600">
              {t("about.missionT")}
            </h3>

            <p className="mt-3 max-w-[48ch] font-body text-[1.35rem] leading-snug text-forest-900 sm:text-xl">
              {mission.map((item) => (
                <li key={item} className="flex gap-3 mb-4">
                  <Leaf
                    size={20}
                    className="mt-1.5 shrink-0 text-leaf-500"
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </li>
              ))}
              {/* {t("about.mission")} */}
            </p>
          </div>
        </div>
        {/* History, Objectives and Values */}
        <div className="mt-20 grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* History timeline */}
          <AboutHistory />

          <div className="space-y-12">
            {/* Objectives */}
            <div>
              {/* <h3 className="font-display text-2xl font-bold text-forest-900">
                {t("about.objectivesT")}
              </h3> */}

              {/* <ul className="mt-5 space-y-3">
                {objectives.map((objective) => (
                  <li key={objective} className="flex gap-3">
                    <Leaf
                      size={20}
                      className="mt-1.5 shrink-0 text-leaf-500"
                      aria-hidden="true"
                    />

                    <span>{objective}</span>
                  </li>
                ))}
              </ul> */}
            </div>

            {/* Values */}
            <div>
              <h3 className="font-display text-2xl font-bold text-forest-900">
                {t("about.valuesT")}
              </h3>

              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 font-display font-semibold text-forest-900">
                {values.map((value) => (
                  <li
                    key={value}
                    className="border-b border-forest-900/10 pb-2"
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* How We Work */}
        <div className="mt-20 rounded-[1.75rem] bg-paper-deep p-7 sm:p-10">
          <h3 className="font-display text-2xl font-bold text-forest-900">
            {t("about.howT")}
          </h3>

          <ul className="mt-6 grid gap-x-12 gap-y-4 md:grid-cols-2">
            {howWeWork.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-forest-900"
                  aria-hidden="true"
                />

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Leadership Team */}
        {/* <AboutLeadership /> */}
      </Container>
    </section>
  );
};

export default About;
