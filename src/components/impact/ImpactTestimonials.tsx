import type { ImpactQuote } from "./types/impact.types";

interface ImpactTestimonialsProps {
  title: string;
  quotes: ImpactQuote[];
}

const ImpactTestimonials = ({ title, quotes }: ImpactTestimonialsProps) => {
  return (
    <div>
      <h3 className="font-display text-2xl font-bold text-forest-900">
        {title}
      </h3>

      <div className="mt-6 space-y-8">
        {quotes.map((quote) => (
          <blockquote
            key={quote.who}
            className="border-s-4 border-millet-500 ps-6"
          >
            <p className="font-body text-xl italic leading-snug text-forest-900 sm:text-2xl">
              “{quote.text}”
            </p>

            <footer className="mt-3 font-display text-sm font-bold text-ink/70">
              {quote.who}
            </footer>
          </blockquote>
        ))}
      </div>
    </div>
  );
};

export default ImpactTestimonials;
