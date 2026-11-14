import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Programmes from "./components/programmes/Programmes";

import Impact from "./components/impact/Impact";
import ImpactMore from "./components/impact/ImpactMore";
import WhereWeWork from "./components/where-we-work/WhereWeWork";

import Partners from "./components/partners/Partners";
import Involved from "./components/involved/Involved";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

// Donate Modal
import DonateModal from "./components/donate/DonateModal";

import type { ContactTopic } from "./components/contact/types/contact.types";

const App = () => {
  const [contactTopic, setContactTopic] = useState<ContactTopic>("general");

  // Donation modal state
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  // Open donation modal
  const handleDonate = () => {
    setIsDonateOpen(true);
  };

  // Close donation modal
  const handleCloseDonate = () => {
    setIsDonateOpen(false);
  };

  // Contact section navigation
  const handleContact = (topic: ContactTopic) => {
    setContactTopic(topic);

    document.getElementById("contact")?.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  };

  return (
    <div id="top">
      <Navbar onDonate={handleDonate} />

      <main>
        <Hero onDonate={handleDonate} />

        <About />

        <Programmes />

        <Impact />

        <ImpactMore />

        <WhereWeWork />

        <Partners onBecomePartner={() => handleContact("partnership")} />

        <Involved onDonate={handleDonate} onContact={handleContact} />

        <Contact topic={contactTopic} onTopicChange={setContactTopic} />
      </main>

      <Footer onDonate={handleDonate} />

      {/* One shared donation modal */}
      <DonateModal open={isDonateOpen} onClose={handleCloseDonate} />
    </div>
  );
};

export default App;
