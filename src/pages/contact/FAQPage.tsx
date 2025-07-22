import SubHeroSection from "@/lib/components/common/SubHeroSection";
import faqHero from "@/assets/images/contact/faq/faq-hero.png";
import UnresolvedQueryCTA from "@/lib/components/Contact/faq/unresolvedQueryCTA";
import FAQSection from "@/lib/components/Work/FAQSection";
import { faqAllItems } from "@/lib/constants/contact/contact";
import ThreePanelNavigation from "@/lib/components/Contact/media/ThreePanelNavigation";

const FAQPage = () => {
  return (
    <main>
      <SubHeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers about our work, donations, and partnerships"
        image={faqHero}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
          { label: "FAQs" },
        ]}
      />
      <FAQSection items={faqAllItems} />
      <UnresolvedQueryCTA />
      <ThreePanelNavigation
      // panels={[
      //   {
      //     icon: <FaFileAlt />,
      //     title: "Annual Reports",
      //     description: "Download our latest reports",
      //     href: "/reports",
      //   },
      //   {
      //     icon: <FaHandshake />,
      //     title: "Partner Inquiry",
      //     description: "Learn how to partner with us",
      //     href: "/partner",
      //   },
      //   {
      //     icon: <FaQuestionCircle />,
      //     title: "Support Center",
      //     description: "Get help with your questions",
      //     href: "/support",
      //   },
      // ]}
      />
    </main>
  );
};

export default FAQPage;
