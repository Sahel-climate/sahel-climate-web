import { Check } from "lucide-react";

import { programmeIcons } from "./data/programmeIcons";
import type { ProgrammeItem } from "./types/programme.types";

interface ProgrammeDetailProps {
  item: ProgrammeItem;
}

const ProgrammeDetail = ({ item }: ProgrammeDetailProps) => {
  const Icon = programmeIcons[item.id];

  return (
    <div className="rounded-[1.75rem] bg-forest-900 p-7 text-paper sm:p-10">
      <Icon size={36} className="text-millet-500" aria-hidden="true" />

      <h3 className="mt-5 font-display text-3xl font-bold tracking-tight">
        {item.title}
      </h3>

      <p className="mt-4 max-w-[60ch] leading-[1.75] text-paper/85">
        {item.body}
      </p>

      <ul className="mt-7 space-y-2.5 border-t border-paper/20 pt-6">
        {item.facts.map((fact) => (
          <li
            key={fact}
            className="flex gap-3 font-display font-semibold leading-snug"
          >
            <Check
              size={20}
              className="mt-0.5 shrink-0 text-leaf-300"
              aria-hidden="true"
            />

            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgrammeDetail;
