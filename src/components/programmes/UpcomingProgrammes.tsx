import type { UpcomingProgramme } from "./types/programme.types";

interface UpcomingProgrammesProps {
  title: string;
  items: UpcomingProgramme[];
}

const UpcomingProgrammes = ({ title, items }: UpcomingProgrammesProps) => {
  return (
    <div className="mt-20">
      <h3 className="font-display text-2xl font-bold text-forest-900">
        {title}
      </h3>

      <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title} className="border-t-2 border-leaf-500 pt-4">
            <p className="font-display text-lg font-bold text-forest-900">
              {item.title}
            </p>

            <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink/80">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingProgrammes;
