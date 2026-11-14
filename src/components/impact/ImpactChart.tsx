import { formatNumber } from "../../utils/formatNumber";
import type { ImpactChartItem } from "./types/impact.types";

interface ImpactChartProps {
  title: string;
  items: ImpactChartItem[];
  note: string;
  language: string;
}

const ImpactChart = ({ title, items, note, language }: ImpactChartProps) => {
  const max = Math.max(1, ...items.map((item) => item.value));

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-millet-500">
        {title}
      </h3>

      <ul className="mt-6 space-y-5">
        {items.map((item) => (
          <li key={item.year}>
            <div className="flex items-baseline justify-between font-display">
              <span className="font-bold">{item.year}</span>

              <span className="font-extrabold tabular-nums">
                {formatNumber(item.value, language)}
              </span>
            </div>

            <div
              className="mt-1.5 h-3 rounded-full bg-paper/15"
              aria-hidden="true"
            >
              <div
                className="h-3 rounded-full bg-leaf-300"
                style={{
                  width: `${(item.value / max) * 100}%`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm leading-snug text-paper/65">{note}</p>
    </div>
  );
};

export default ImpactChart;
