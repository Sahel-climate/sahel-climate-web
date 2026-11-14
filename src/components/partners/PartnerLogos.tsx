import type { Partner } from "./types/partners.types";

interface PartnerLogosProps {
  title: string;
  partners: Partner[];
}

const PartnerLogos = ({ title, partners }: PartnerLogosProps) => {
  return (
    <div className="mt-16">
      <h3 className="font-display text-2xl font-bold text-forest-900">
        {title}
      </h3>

      <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        {partners.map((partner) => (
          <li
            key={partner.id}
            className="flex h-28 items-center justify-center rounded-2xl border-2 border-dashed border-forest-900/20 bg-paper px-3 text-center"
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-16 max-w-full object-contain"
                loading="lazy"
              />
            ) : (
              <span className="font-display text-sm font-semibold text-forest-900/45">
                {partner.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerLogos;
