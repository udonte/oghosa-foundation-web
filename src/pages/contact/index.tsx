import SubHeroSection from "@/lib/components/common/SubHeroSection";
import ContactHero from "@/assets/images/contact/index/contact-hero.jpg";

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
          href: "/contact/form",
        }}
      />
    </main>
  );
};

export default Contact;
