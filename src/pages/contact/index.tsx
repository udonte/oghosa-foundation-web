import SubHeroSection from "@/lib/components/common/SubHeroSection";
import ContactHero from "@/assets/images/contact/index/contact-hero.jpg";
import ContactChannelsGrid from "@/lib/components/Contact/index/ContactChannelsGrid";
import { MultiPurposeForm } from "@/lib/components/Contact/index/MultiPurposeForm";
import { OfficeAddressSection } from "@/lib/components/Contact/index/OfficeAddressSection";
import FAQSection from "@/lib/components/Work/FAQSection";
import { contactfaqData } from "@/lib/constants/contact/contact";

const Contact = () => {
  return (
    <main>
      <SubHeroSection
        title="Get Involved, Reach Out"
        subtitle="If you're seeking help, partnership, or want to volunteer, we're here to listen."
        image={ContactHero}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        cta={{
          text: "Send a Message",
          href: "/contact#contact-form",
        }}
      />
      <ContactChannelsGrid />
      <MultiPurposeForm />
      <OfficeAddressSection />
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Regular Enquiries About Our Initiatives"
        items={contactfaqData}
      />
    </main>
  );
};

export default Contact;
