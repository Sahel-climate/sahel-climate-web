import { useTranslation } from "react-i18next";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import DonateButton from "../common/DonateButton";

import InvolvedCard from "./InvolvedCard";

import { involvedOptions } from "./data/involved";

import type {
  ContactTopic,
  InvolvedAction,
  InvolvedContent,
} from "./types/involved.types";

interface InvolvedProps {
  onDonate: () => void;
  onContact: (topic: ContactTopic) => void;
}

const Involved = ({ onDonate, onContact }: InvolvedProps) => {
  const { t } = useTranslation();

  const involved = t("involved", {
    returnObjects: true,
  }) as InvolvedContent;

  const handleAction = (action: InvolvedAction) => {
    if (action === "reports") {
      document.getElementById("reports")?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });

      return;
    }

    onContact(action);
  };

  return (
    <section
      id="involved"
      aria-labelledby="involved-heading"
      className="bg-paper-deep py-20 sm:py-28"
    >
      <Container size="narrow">
        {/* Introduction and Donate button */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionHeading id="involved-heading" className="text-forest-900">
              {involved.title}
            </SectionHeading>

            <p className="mt-4 max-w-[48ch] text-lg text-ink/85">
              {involved.intro}
            </p>
          </div>

          <DonateButton
            size="lg"
            className="self-start lg:self-auto"
            onClick={onDonate}
          />
        </div>

        {/* Involvement opportunities */}
        <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {involvedOptions.map((option, index) => {
            const item = involved.items[index];

            if (!item) return null;

            return (
              <InvolvedCard
                key={option.id}
                item={item}
                onAction={() => handleAction(option.action)}
              />
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Involved;
