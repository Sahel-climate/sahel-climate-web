import type { InvolvedItem } from "./types/involved.types";

interface InvolvedCardProps {
  item: InvolvedItem;
  onAction: () => void;
}

const InvolvedCard = ({ item, onAction }: InvolvedCardProps) => {
  return (
    <li className="border-t-2 border-forest-900 pt-5">
      <h3 className="font-display text-2xl font-bold text-forest-900">
        {item.title}
      </h3>

      <p className="mt-2 max-w-[44ch] leading-relaxed text-ink/85">
        {item.text}
      </p>

      <button
        type="button"
        onClick={onAction}
        className="mt-4 font-display font-bold text-leaf-600 underline decoration-2 underline-offset-4 hover:text-forest-900"
      >
        {item.cta}
      </button>
    </li>
  );
};

export default InvolvedCard;
