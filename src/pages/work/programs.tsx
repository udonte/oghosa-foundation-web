// src/pages/work/Programs.tsx
import { FaHandsHelping, FaChartLine, FaLightbulb } from "react-icons/fa";
import Initiative1 from "@/assets/images/health-program1.jpg";
import Initiative2 from "@/assets/images/health-program1.jpg";
import Initiative3 from "@/assets/images/health-program1.jpg";
import SubHeroSection from "@/lib/components/common/SubHeroSection";
import HeroImage from "@/assets/images/work/programs/work5.jpg";
import SectionHeader from "@/lib/components/common/SectionHeader";

import Program5 from "@/assets/images/work/programs/work5.jpg";
import CTASection from "@/lib/components/Home/CTASection";

const Programs = () => {
  return (
    <main>
      <SubHeroSection
        title="Programs & Initiatives"
        subtitle="Our comprehensive range of programs designed to create lasting impact across communities"
        image={HeroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Where We Do", href: "/work" },
          { label: "Programs", href: "/work/programs" },
        ]}
      />
      <div className="space-y-12 font-dmsans px-4 py-16 lg:px-24 lg:py-24">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="prose max-w-none">
            <SectionHeader title="Our Comprehensive Approach" />
            <p className="text-gray-700 mb-6">
              At Oghosa Godson Foundation, we take a holistic approach to
              community development. Our programs are carefully designed to
              address the most pressing needs while creating sustainable
              solutions that empower individuals and transform communities.
            </p>
          </div>

          <div className="relative rounded-xl overflow-hidden h-64 md:h-96 mt-8">
            <img
              src={Program5}
              alt="Our programs in action"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <p className="text-white font-dmsans text-lg md:text-xl">
                Building brighter futures through comprehensive community
                programs
              </p>
            </div>
          </div>
        </section>

        {/* Key Initiatives Section */}
        <section>
          <h2 className="text-2xl font-semibold font-montserrat text-oghosa-green mb-8">
            Our Key Initiatives
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaHandsHelping,
                title: "Community Empowerment",
                description:
                  "Programs designed to build capacity and self-sufficiency in underserved communities.",
                image: Initiative1,
              },
              {
                icon: FaChartLine,
                title: "Sustainable Development",
                description:
                  "Initiatives focused on creating long-term solutions to systemic challenges.",
                image: Initiative2,
              },
              {
                icon: FaLightbulb,
                title: "Innovation Programs",
                description:
                  "Cutting-edge approaches to solving persistent community problems.",
                image: Initiative3,
              },
            ].map((initiative, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={initiative.image}
                    alt={initiative.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-oghosa-green text-white">
                    <initiative.icon className="text-xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold font-montserrat text-oghosa-green mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600">{initiative.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Program Areas Section */}
        <section className="py-12">
          <h2 className="text-2xl font-semibold font-montserrat text-oghosa-green mb-8">
            Our Program Areas
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Education & Youth Development",
                description:
                  "Scholarships, school renovations, and youth empowerment programs",
                progress: 85,
              },
              {
                title: "Healthcare Access",
                description:
                  "Medical outreach, health education, and disease prevention",
                progress: 75,
              },
              {
                title: "Economic Empowerment",
                description:
                  "Vocational training, small business support, and financial literacy",
                progress: 65,
              },
              {
                title: "Social Welfare",
                description:
                  "Food security, housing support, and community development",
                progress: 60,
              },
              {
                title: "Special Needs Support",
                description:
                  "Programs for individuals with disabilities and special needs",
                progress: 50,
              },
            ].map((area, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium font-montserrat text-oghosa-green">
                    {area.title}
                  </h3>
                  <span className="text-sm font-dmsans text-gray-600">
                    {area.progress}%
                  </span>
                </div>
                <p className="text-sm font-dmsans text-gray-600">
                  {area.description}
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-oghosa-green h-2.5 rounded-full"
                    style={{ width: `${area.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Stories Section */}
        <section className="bg-oghosa-green/5 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold font-montserrat text-oghosa-green mb-6">
            Impact Stories
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <blockquote className="italic text-gray-700 text-lg border-l-4 border-oghosa-green pl-4 py-2">
                "The vocational training program gave me skills that changed my
                life. I now run a successful tailoring business that supports my
                family."
              </blockquote>
              <p className="font-semibold font-montserrat text-oghosa-green">
                — Adesuwa, Skills Training Beneficiary
              </p>
            </div>
            <div className="space-y-4">
              <blockquote className="italic text-gray-700 text-lg border-l-4 border-oghosa-green pl-4 py-2">
                "Because of the foundation's scholarship, I became the first
                university graduate in my family. Now I'm giving back by
                volunteering with their programs."
              </blockquote>
              <p className="font-semibold font-montserrat text-oghosa-green">
                — Emmanuel, Scholarship Recipient
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* CTA Section */}
      <CTASection
        title="   Join Us in Making a Difference"
        subtitle=" Whether you want to volunteer, partner with us, or support our
            programs, your involvement can help create lasting change."
        buttonOneText=" Get Involved"
        buttonOneLink="/support/volunteer"
        buttonTwoText="Support Our Work"
        buttonTwoLink="/support/donate"
      />
    </main>
  );
};

export default Programs;
