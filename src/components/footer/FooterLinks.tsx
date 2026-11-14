import type { FooterLink } from "./types/footer.types";

interface FooterLinksProps {
  title: string;
  links: FooterLink[];
  external?: boolean;
}

const FooterLinks = ({ title, links, external = false }: FooterLinksProps) => {
  return (
    <nav aria-label={title}>
      <h3 className="font-display text-base font-bold text-millet-500">
        {title}
      </h3>

      <ul className="mt-4 space-y-2 text-paper/85">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="hover:text-white hover:underline"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterLinks;
