import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Faraday Capital Systems",
  description:
    "How Faraday Capital Systems collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="relative z-[1] px-6 sm:px-10 pt-36 pb-24">
      <article className="max-w-[800px] mx-auto">
        <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-3">
          Privacy Policy
        </h1>
        <p className="font-mono text-[12px] text-subtle tracking-[0.08em] uppercase mb-10">
          Last Updated: April 2026
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-10">
          Faraday Capital Systems (&ldquo;Faraday,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          information when you visit our website at faradaycapitalsystems.com
          and use our services.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          1. Who We Are
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Faraday Capital Systems is a product of SR Holdings LLC, a limited
          liability company organized under the laws of the State of Wyoming,
          United States. References to &ldquo;Faraday,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo; in this Privacy Policy include
          SR Holdings LLC.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          2. Information We Collect
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">
            Information you provide directly.
          </strong>{" "}
          When you request a demo, contact us, or sign up for our services, we
          may collect your name, email address, company name, job title, and
          any other information you choose to provide.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">
            Information collected automatically.
          </strong>{" "}
          When you visit our website, we automatically collect certain
          information about your device and usage, including IP address,
          browser type, operating system, referring URLs, and pages visited. We
          collect this information through cookies, server logs, and similar
          technologies.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          <strong className="text-heading font-semibold">
            Information from third parties.
          </strong>{" "}
          We may receive information about you from third-party services we use
          to operate our business, such as analytics providers, customer
          relationship management tools, and payment processors.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          3. How We Use Your Information
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[17px] text-muted leading-relaxed space-y-2">
          <li>Provide, operate, and improve our services</li>
          <li>Respond to your inquiries and fulfill your requests</li>
          <li>Send you marketing communications, where permitted</li>
          <li>Analyze how our services are used and improve them</li>
          <li>Protect against fraud, security threats, and unauthorized access</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          4. How We Share Your Information
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          We do not sell your personal information. We may share your
          information with:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[17px] text-muted leading-relaxed space-y-2">
          <li>
            <strong className="text-heading font-semibold">Service providers</strong>{" "}
            who help us operate our business (hosting, analytics, email,
            customer support)
          </li>
          <li>
            <strong className="text-heading font-semibold">Professional advisors</strong>{" "}
            such as lawyers, accountants, and auditors
          </li>
          <li>
            <strong className="text-heading font-semibold">
              Legal and regulatory authorities
            </strong>{" "}
            when required by law or to protect our rights
          </li>
          <li>
            <strong className="text-heading font-semibold">
              Business transfer recipients
            </strong>{" "}
            in the event of a merger, acquisition, or sale of assets
          </li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          5. Cookies and Tracking
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          We use cookies and similar tracking technologies to operate our site,
          remember your preferences, and analyze usage. You can control cookies
          through your browser settings. Disabling cookies may affect site
          functionality.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          6. Data Security
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          We implement reasonable administrative, technical, and physical
          safeguards to protect your information. However, no system is
          perfectly secure, and we cannot guarantee the absolute security of
          your data.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          7. Data Retention
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          We retain your information for as long as necessary to provide our
          services, comply with legal obligations, resolve disputes, and
          enforce our agreements.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          8. Your Rights
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          Depending on your location, you may have the right to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[17px] text-muted leading-relaxed space-y-2">
          <li>
            Access, correct, or delete the personal information we hold about
            you
          </li>
          <li>Object to or restrict how we process your information</li>
          <li>Withdraw consent where processing is based on consent</li>
          <li>Lodge a complaint with a data protection authority</li>
        </ul>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">
            For California residents:
          </strong>{" "}
          You have specific rights under the California Consumer Privacy Act
          (CCPA), including the right to know what personal information we
          collect, the right to delete your personal information, and the right
          not to be discriminated against for exercising your rights. We do not
          sell personal information as defined under the CCPA.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">
            For EU/UK residents:
          </strong>{" "}
          You have rights under the General Data Protection Regulation (GDPR)
          including access, rectification, erasure, restriction, portability,
          and objection. Our legal bases for processing include consent,
          contract performance, legal obligation, and legitimate interests.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          To exercise your rights, contact us at{" "}
          <a
            href="mailto:info@faradaycapitalsystems.com"
            className="text-accent-light hover:text-accent-lighter transition-colors"
          >
            info@faradaycapitalsystems.com
          </a>
          .
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          9. Children&apos;s Privacy
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Our services are not directed to children under 13, and we do not
          knowingly collect personal information from children under 13. If you
          believe we have collected information from a child, contact us and we
          will delete it.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          10. International Data Transfers
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Faraday is based in the United States. If you access our services
          from outside the United States, your information may be transferred
          to, stored, and processed in the United States, where data protection
          laws may differ from those in your jurisdiction.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          11. Third-Party Links
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Our site may contain links to third-party sites. We are not
          responsible for the privacy practices of those sites. Review their
          privacy policies before providing information.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          12. Changes to This Policy
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          We may update this Privacy Policy from time to time. We will post the
          updated policy on this page and update the &ldquo;Last Updated&rdquo;
          date. Material changes will be communicated through reasonable means.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          13. Contact Us
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          Questions about this Privacy Policy? Contact us at:
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          <strong className="text-heading font-semibold">
            SR Holdings LLC (d/b/a Faraday Capital Systems)
          </strong>
          <br />
          Email:{" "}
          <a
            href="mailto:info@faradaycapitalsystems.com"
            className="text-accent-light hover:text-accent-lighter transition-colors"
          >
            info@faradaycapitalsystems.com
          </a>
        </p>
      </article>
    </main>
  );
}
