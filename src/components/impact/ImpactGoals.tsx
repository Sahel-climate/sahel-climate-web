import type { ImpactGoal } from "./types/impact.types";

interface ImpactGoalsProps {
  title: string;
  goals: ImpactGoal[];
}

const ImpactGoals = ({ title, goals }: ImpactGoalsProps) => {
  return (
    <div>
      <h3 className="font-display text-3xl font-bold tracking-tight text-forest-900 sm:text-4xl">
        {title}
      </h3>

      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 md:grid-cols-3 lg:grid-cols-4">
        {goals.map(([value, label]) => (
          <li key={label}>
            <p className="font-display text-3xl font-extrabold tracking-tight text-leaf-600 sm:text-4xl">
              {value}
            </p>

            <p className="mt-1 text-[0.98rem] leading-snug text-ink/80">
              {label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImpactGoals;
