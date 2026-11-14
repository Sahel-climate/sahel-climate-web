import type { KeyboardEvent } from "react";

import ProgrammeDetail from "./ProgrammeDetail";
import { programmeIcons } from "./data/programmeIcons";

import type { ProgrammeId, ProgrammeItem } from "./types/programme.types";

interface ProgrammeTabsProps {
  items: ProgrammeItem[];
  activeId: ProgrammeId;
  onSelect: (id: ProgrammeId) => void;
}

const ProgrammeTabs = ({ items, activeId, onSelect }: ProgrammeTabsProps) => {
  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;

    switch (event.key) {
      case "ArrowDown":
        nextIndex = (index + 1) % items.length;
        break;

      case "ArrowUp":
        nextIndex = (index - 1 + items.length) % items.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = items.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();

    const nextItem = items[nextIndex];

    onSelect(nextItem.id);

    document.getElementById(`programme-tab-${nextItem.id}`)?.focus();
  };

  return (
    <div role="tablist" aria-orientation="vertical" className="flex flex-col">
      {items.map((item, index) => {
        const selected = item.id === activeId;
        const Icon = programmeIcons[item.id];

        return (
          <div
            key={item.id}
            className="border-b border-forest-900/15 first:border-t"
          >
            <button
              type="button"
              role="tab"
              id={`programme-tab-${item.id}`}
              aria-selected={selected}
              //   aria-controls={`programme-panel-${item.id}`}
              aria-controls={`programme-mobile-panel-${item.id} programme-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => onSelect(item.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`group flex w-full items-start gap-4 px-1 py-5 text-start transition-colors ${
                selected
                  ? "text-forest-900"
                  : "text-forest-900/70 hover:text-forest-900"
              }`}
            >
              <Icon
                size={26}
                className={`mt-0.5 shrink-0 ${
                  selected ? "text-leaf-600" : "text-forest-900/50"
                }`}
                aria-hidden="true"
              />

              <span>
                <span
                  className={`block font-display text-xl leading-tight ${
                    selected ? "font-extrabold" : "font-bold"
                  }`}
                >
                  {item.title}
                </span>

                <span className="mt-1 block text-[0.98rem] leading-snug text-ink/75">
                  {item.line}
                </span>
              </span>
            </button>

            {selected && (
              <div
                id={`programme-mobile-panel-${item.id}`}
                role="tabpanel"
                aria-labelledby={`programme-tab-${item.id}`}
                className="pb-6 lg:hidden"
              >
                <ProgrammeDetail item={item} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProgrammeTabs;
