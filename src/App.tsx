import { useTranslation } from "react-i18next";

import Navbar from "./components/navbar/Navbar";
import Container from "./components/common/Container";

import { navigationLinks } from "./components/navbar/data/navigation";

const App = () => {
  const { t } = useTranslation();

  const handleDonate = () => {
    // Temporary until we build DonateModal
    alert(t("nav.donate"));
  };

  return (
    <div id="top">
      <Navbar onDonate={handleDonate} />

      <main>
        {/* Temporary Hero */}
        <section
          id="home"
          className="flex min-h-[80vh] items-center
            bg-[#123D24] text-white"
        >
          <Container>
            <h1 className="font-display text-4xl font-bold sm:text-6xl">
              Sahel Climate Action
            </h1>

            <p className="mt-4 text-lg text-white/80">{t("nav.tagline")}</p>
          </Container>
        </section>

        {/* Temporary sections */}
        {navigationLinks.map((link, index) => (
          <section
            key={link.href}
            id={link.href.slice(1)}
            className={`min-h-[60vh] py-24 ${
              index % 2 === 0 ? "bg-[#FAF9F4]" : "bg-[#F3EFE3]"
            }`}
          >
            <Container>
              <h2
                className="font-display text-4xl
                  font-bold text-[#123D24]"
              >
                {t(link.label)}
              </h2>
            </Container>
          </section>
        ))}
      </main>
    </div>
  );
};

export default App;
