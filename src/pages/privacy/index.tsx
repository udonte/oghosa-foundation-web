import React from "react";
import SectionHeader from "@/lib/components/common/SectionHeader";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen px-4 py-8 lg:px-24 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          title="Privacy Policy"
          subtitle="Your privacy is important to us."
        />

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-sm text-gray-600">
            <strong>Last Updated:</strong> 1st Sept, 2025
          </p>
        </div>

        <div className="prose max-w-none">
          {/* 1. Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 mb-4">
              The Oghosa Godson Foundation ("we," "us," or "our") respects your
              privacy and is committed to protecting your personal data. This
              privacy notice explains how we collect, use, disclose, and
              safeguard your information when you interact with our
              organization, in compliance with the Data Protection Act, 2023,
              the Nigeria Data Protection Regulation (NDPR) 2019 and other
              applicable laws.
            </p>
          </section>

          {/* 2. The Data We Collect About You */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              2. The Data We Collect About You
            </h2>
            <p className="text-gray-700 mb-4">
              We may collect, use, store, and transfer different kinds of
              personal data:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Identity Data:</strong> First name, last name, username,
                marital status, title, date of birth, gender, photographs, and
                government-issued identification numbers.
              </li>
              <li>
                <strong>Contact Data:</strong> Billing address, delivery
                address, email address, and telephone numbers.
              </li>
              <li>
                <strong>Financial Data:</strong> Bank account and payment card
                details (for donations and transactions).
              </li>
              <li>
                <strong>Transaction Data:</strong> Details about payments to and
                from you and other details of products and services you have
                obtained from us.
              </li>
              <li>
                <strong>Technical Data:</strong> Internet protocol (IP) address,
                login data, browser type and version, time zone setting and
                location, browser plug-in types and versions, operating system
                and platform.
              </li>
              <li>
                <strong>Profile Data:</strong> Your username and password,
                donations made by you, interests, preferences, feedback, and
                survey responses.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website, products, and services.
              </li>
              <li>
                <strong>Special Categories of Personal Data:</strong> In limited
                circumstances and with explicit consent, we may collect health
                information relevant to our health programs or sickle cell
                initiatives.
              </li>
            </ul>
          </section>

          {/* 3. How We Collect Your Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              3. How We Collect Your Data
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Direct Interactions:</strong> You may give us your data by
              filling forms or by corresponding with us by post, phone, email,
              or otherwise. This includes when you:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>Make a donation</li>
              <li>Apply for our programs or services</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information</li>
              <li>Volunteer with us</li>
              <li>Participate in our events</li>
              <li>Provide feedback</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Automated Technologies:</strong> We automatically collect
              Technical Data about your equipment, browsing actions, and
              patterns using cookies, server logs, and similar technologies.
            </p>
            <p className="text-gray-700">
              <strong>Third Parties or Publicly Available Sources:</strong> We
              may receive data from:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
              <li>
                Analytics providers, advertising networks, and search
                information providers
              </li>
              <li>Providers of technical, payment, and delivery services</li>
              <li>
                Publicly available sources such as corporate websites and social
                media platforms
              </li>
            </ul>
          </section>

          {/* 4. How We Use Your Personal Data */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              4. How We Use Your Personal Data
            </h2>
            <p className="text-gray-700 mb-4">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your data:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>Where we need to perform our services</li>
              <li>Where it is necessary for our legitimate interests</li>
              <li>Where we need to comply with a legal obligation</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Specifically, we use your data for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Processing and acknowledging donations</li>
              <li>Providing our programs and services to beneficiaries</li>
              <li>Managing our relationship with you</li>
              <li>Administering and protecting our organization</li>
              <li>Delivering relevant content and measuring effectiveness</li>
              <li>Using analytics to improve our services</li>
              <li>Making suggestions about programs that may interest you</li>
            </ul>
          </section>

          {/* 5. Legal Basis for Processing */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              5. Legal Basis for Processing
            </h2>
            <p className="text-gray-700 mb-4">
              We process your personal data based on:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Consent:</strong> Where you have given clear consent
              </li>
              <li>
                <strong>Contract:</strong> Where processing is necessary for a
                contract
              </li>
              <li>
                <strong>Legal obligation:</strong> Where processing is necessary
                to comply with law
              </li>
              <li>
                <strong>Legitimate interests:</strong> Where processing is
                necessary for our interests
              </li>
              <li>
                <strong>Vital interests:</strong> Where processing is necessary
                to protect someone's life
              </li>
              <li>
                <strong>Public task:</strong> Where processing is necessary for
                public interest
              </li>
            </ul>
          </section>

          {/* 6. Data Sharing and Disclosure */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              6. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We may share your personal data with:
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Internal Third Parties:</strong> Other entities in our
              foundation acting as joint controllers.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>External Third Parties:</strong>
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>
                Service providers providing IT and system administration
                services
              </li>
              <li>
                Professional advisers including lawyers, bankers, auditors, and
                insurers
              </li>
              <li>
                Nigerian government agencies, regulators, and other authorities
              </li>
              <li>
                Third parties to whom we may transfer or merge parts of our
                foundation
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>International Transfers:</strong> We do not transfer your
              personal data outside Nigeria unless adequate protection measures
              are in place as required by NDPR.
            </p>
          </section>

          {/* 7. Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              7. Data Security
            </h2>
            <p className="text-gray-700 mb-4">
              We have implemented appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way. We limit access to your personal data to
              those with a business need to know.
            </p>
            <p className="text-gray-700">
              We have procedures to deal with any suspected personal data breach
              and will notify you and any applicable regulator of a breach where
              legally required.
            </p>
          </section>

          {/* 8. Data Retention */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              8. Data Retention
            </h2>
            <p className="text-gray-700 mb-4">
              We will only retain your personal data for as long as reasonably
              necessary to fulfill the purposes we collected it for, including
              satisfying any legal, regulatory, tax, accounting, or reporting
              requirements.
            </p>
            <p className="text-gray-700">
              In some circumstances, we may anonymize your personal data for
              research or statistical purposes, in which case we may use this
              information indefinitely.
            </p>
          </section>

          {/* 9. Your Legal Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              9. Your Legal Rights
            </h2>
            <p className="text-gray-700 mb-4">
              Under certain circumstances, you have rights under data protection
              laws:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
          </section>

          {/* 10. Cookies and Tracking Technologies */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              10. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies to distinguish you from other users. This
              helps us provide you with a good experience and improve our site.
            </p>
            <p className="text-gray-700 mb-4">We use:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-700">
              <li>
                <strong>Strictly necessary cookies:</strong> Required for
                website operation
              </li>
              <li>
                <strong>Analytical/performance cookies:</strong> Recognize and
                count visitors
              </li>
              <li>
                <strong>Functionality cookies:</strong> Recognize you when you
                return
              </li>
              <li>
                <strong>Targeting cookies:</strong> Record your visit and pages
                viewed
              </li>
            </ul>
            <p className="text-gray-700">
              You can set your browser to refuse cookies, but note that some
              website parts may become inaccessible.
            </p>
          </section>

          {/* 11. Children's Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              11. Children's Privacy
            </h2>
            <p className="text-gray-700">
              Our services are not directed to children under 13, and we do not
              knowingly collect personal information from children under 13. For
              educational programs involving minors, we obtain verifiable
              parental consent before collecting any personal information.
            </p>
          </section>

          {/* 12. Changes to This Privacy Notice */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              12. Changes to This Privacy Notice
            </h2>
            <p className="text-gray-700 mb-4">
              We may update our privacy policy periodically. We will notify you
              of changes by posting the new policy on this page and updating the
              "Last Updated" date.
            </p>
            <p className="text-gray-700">
              You are advised to review this privacy policy periodically for any
              changes.
            </p>
          </section>

          {/* 13. Contact Us */}
          <section className="mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-oghosa-green mb-4">
              13. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this privacy policy or our practices,
              contact our Data Protection Officer:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Full name:</strong> Oghosa Godson Foundation
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Email address:</strong> info@oghosa-foundation.org
              </p>
              <p className="text-gray-700">
                If you believe that we have not been able to resolve your
                complaint, you may also submit a complaint to the competent data
                protection authority. You may submit a complaint{" "}
                <a
                  href="https://www.ndpc.gov.ng/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-oghosa-green hover:underline"
                >
                  here
                </a>{" "}
                but we would appreciate the chance to address your concerns
                first.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
