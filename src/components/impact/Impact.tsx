import { useTranslation } from "react-i18next";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

import ImpactTable from "./ImpactTable";
import ImpactChart from "./ImpactChart";

import type { ImpactContent } from "./types/impact.types";

const Impact = () => {
  const { t, i18n } = useTranslation();

  const impact = t("impact", {
    returnObjects: true,
  }) as ImpactContent;

  const language = i18n.resolvedLanguage || "en";

  return (
    <section
      id="impact"
      aria-labelledby="impact-heading"
      className="bg-forest-900 py-20 text-paper sm:py-28"
    >
      <Container size="narrow">
        {/* Introduction */}
        <SectionHeading id="impact-heading" className="max-w-[20ch]">
          {impact.title}
        </SectionHeading>

        <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-paper/85 sm:text-xl">
          {impact.intro}
        </p>

        {/* Results table and chart */}
        <div className="mt-14 grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <ImpactTable
            title={impact.tableT}
            columns={impact.cols}
            rows={impact.rows}
            notReported={impact.na}
          />

          <div>
            <ImpactChart
              title={impact.chartT}
              items={impact.chart}
              note={impact.chartNote}
              language={language}
            />

            {/* Where the money goes */}
            {/* <h3 className="mt-12 font-display text-xl font-bold text-millet-500">
              {impact.valueT}
            </h3> */}

            {/* <ul className="mt-4 space-y-3 leading-snug text-paper/90">
              {impact.value.map((item) => (
                <li key={item} className="border-s-2 border-leaf-500 ps-4">
                  {item}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Impact;
