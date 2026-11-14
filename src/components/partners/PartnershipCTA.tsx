interface PartnershipCTAProps {
  title: string;
  items: string[];
  buttonLabel: string;
  onBecomePartner: () => void;
}

const PartnershipCTA = ({
  title,
  items,
  buttonLabel,
  onBecomePartner,
}: PartnershipCTAProps) => {
  return (
    <div className="mt-14 grid items-center gap-8 rounded-[1.75rem] bg-forest-900 p-7 text-paper sm:p-10 lg:grid-cols-[1fr_auto]">
      <div>
        <h3 className="font-display text-2xl font-bold sm:text-3xl">{title}</h3>

        <ul className="mt-5 grid gap-x-10 gap-y-2.5 md:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-paper/90">
              <span
                className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-millet-500"
                aria-hidden="true"
              />

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        onClick={onBecomePartner}
        className="rounded-full bg-paper px-7 py-3.5 font-display text-lg font-bold text-forest-900 transition-colors hover:bg-leaf-100"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default PartnershipCTA;
