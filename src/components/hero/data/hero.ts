export interface HeroImage {
  id: string;
  src: string;
  alt: string;
}

const images = import.meta.glob<string>(
  "../../../assets/hero/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
);

export const heroImages: HeroImage[] = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], index) => ({
    id: path,
    src,
    alt: `hero.images.${index + 1}`,
  }));
