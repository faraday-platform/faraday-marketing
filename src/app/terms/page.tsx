import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Faraday Capital Systems",
  description:
    "Terms governing use of Faraday Capital Systems' website and services.",
};

export default function TermsPage() {
  return (
    <main className="relative z-[1] px-6 sm:px-10 pt-36 pb-24">
      <article className="max-w-[800px] mx-auto">
        <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-3">
          Terms of Service
        </h1>
        <p className="font-mono text-[12px] text-subtle tracking-[0.08em] uppercase mb-10">
          Last Updated: April 2026
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-6">
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
          and use of the website at faradaycapitalsystems.com and any services
          provided by Faraday Capital Systems, a product of SR Holdings LLC, a
          Wyoming limited liability company (&ldquo;Faraday,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-10">
          By accessing or using our website or services, you agree to be bound
          by these Terms. If you do not agree, do not use our website or
          services.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          1. Eligibility
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          You must be at least 18 years old and legally able to enter into
          contracts to use our services. By using our services, you represent
          that you meet these requirements.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          2. Our Services
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Faraday provides AI-powered governance and workflow systems for
          business operations. Specific products include FACP (Faraday
          Accounting Control Panel), PSE (Payroll Synergy Experts), and
          Studio. Features and availability may change without notice.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          3. Your Account
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          If you create an account, you are responsible for maintaining its
          confidentiality and for all activity under your account. Notify us
          immediately of any unauthorized access. We are not liable for losses
          resulting from unauthorized account use.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          4. Acceptable Use
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          You agree not to:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[17px] text-muted leading-relaxed space-y-2">
          <li>Use our services for any unlawful purpose</li>
          <li>Attempt to access our systems or data without authorization</li>
          <li>Reverse engineer, decompile, or disassemble our software</li>
          <li>Interfere with or disrupt our services</li>
          <li>Use our services to transmit malware, spam, or harmful content</li>
          <li>
            Violate the rights of others, including intellectual property and
            privacy rights
          </li>
          <li>Misrepresent your identity or affiliation</li>
        </ul>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          5. Intellectual Property
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          All content, features, and functionality of our website and services
          — including text, graphics, logos, software, and underlying
          technology — are owned by SR Holdings LLC or its licensors and are
          protected by U.S. and international intellectual property laws.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          You may not copy, modify, distribute, sell, or create derivative
          works from our content without our prior written consent. Limited,
          revocable, non-exclusive permission to view and use our website for
          personal, non-commercial purposes is granted.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          6. User Content
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          If you submit content to us (feedback, ideas, suggestions), you grant
          us a worldwide, royalty-free, perpetual, irrevocable license to use
          that content for any purpose. You represent that you have the right
          to grant this license.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          7. Third-Party Services
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Our services may integrate with or link to third-party services. We
          are not responsible for third-party services, their content, or their
          practices. Your use of third-party services is governed by their
          terms.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          8. Disclaimers
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          OUR SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
          AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
          INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE, NON-INFRINGEMENT, AND ACCURACY.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED,
          ERROR-FREE, OR SECURE, OR THAT DEFECTS WILL BE CORRECTED.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          9. Limitation of Liability
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, SR HOLDINGS LLC, ITS
          AFFILIATES, AND THEIR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS
          SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
          CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE,
          DATA, OR GOODWILL, ARISING FROM OR RELATED TO YOUR USE OF OUR
          SERVICES.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM OR RELATED TO THESE
          TERMS OR OUR SERVICES SHALL NOT EXCEED THE GREATER OF: (A) THE
          AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR (B)
          ONE HUNDRED U.S. DOLLARS ($100).
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Some jurisdictions do not allow certain limitations, so these
          limitations may not apply to you in full.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          10. Indemnification
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          You agree to indemnify, defend, and hold harmless SR Holdings LLC and
          its affiliates, officers, directors, employees, and agents from any
          claims, damages, losses, liabilities, and expenses (including
          reasonable attorneys&apos; fees) arising from or related to your use
          of our services, your violation of these Terms, or your violation of
          any rights of another party.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          11. Termination
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          We may suspend or terminate your access to our services at any time,
          with or without notice, for any reason, including violation of these
          Terms. Upon termination, your right to use our services ceases
          immediately. Sections intended to survive termination (including
          disclaimers, limitations of liability, indemnification, and
          governing law) will survive.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          12. Changes to These Terms
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          We may update these Terms from time to time. We will post updated
          Terms on this page and update the &ldquo;Last Updated&rdquo; date.
          Continued use of our services after changes constitutes acceptance of
          the updated Terms. If you do not agree to the updated Terms, stop
          using our services.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          13. Governing Law and Dispute Resolution
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          These Terms are governed by the laws of the State of Wyoming, United
          States, without regard to conflict-of-law principles. Any dispute
          arising from or related to these Terms or our services shall be
          resolved exclusively in the state or federal courts located in
          Wyoming, and you consent to personal jurisdiction in those courts.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          14. Miscellaneous
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">Entire Agreement.</strong>{" "}
          These Terms, together with our Privacy Policy, constitute the entire
          agreement between you and us regarding your use of our services.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">Severability.</strong>{" "}
          If any provision of these Terms is found unenforceable, the remaining
          provisions remain in full effect.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">No Waiver.</strong>{" "}
          Our failure to enforce any right or provision of these Terms is not a
          waiver.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          <strong className="text-heading font-semibold">Assignment.</strong>{" "}
          You may not assign your rights or obligations under these Terms
          without our prior written consent. We may assign our rights and
          obligations without restriction.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          15. Contact
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          Questions about these Terms? Contact us at:
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
