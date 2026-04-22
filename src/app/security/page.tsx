import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security — Faraday Capital Systems",
  description:
    "How Faraday approaches security, privacy, and trust across our products.",
};

export default function SecurityPage() {
  return (
    <main className="relative z-[1] px-6 sm:px-10 pt-36 pb-24">
      <article className="max-w-[800px] mx-auto">
        <h1 className="text-[clamp(2rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-heading mb-3">
          Security
        </h1>
        <p className="font-mono text-[12px] text-subtle tracking-[0.08em] uppercase mb-10">
          Last Updated: April 2026
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Faraday builds governance and workflow systems for businesses. The
          work we do requires your trust — and we take that seriously. This
          page describes how we think about security, the principles that
          shape what we build, and what we&apos;re committed to as our
          products mature.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-10">
          This is not a certification statement. It&apos;s a commitment
          document. As our security program matures, this page will grow with
          it.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          Our Security Principles
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Security at Faraday is built on four principles that shape every
          decision we make about how our products handle your data.
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">
            Security is a product decision, not a layer added on top.
          </strong>
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          We build controls into Faraday products from the beginning — access
          controls, audit trails, validation logic, and oversight mechanisms
          are core to what FACP, PSE, and Studio do. These aren&apos;t
          bolted-on features. They&apos;re how the products are designed to
          work.
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">
            The customer&apos;s data belongs to the customer.
          </strong>
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          We don&apos;t sell personal data. We don&apos;t share customer data
          with third parties for marketing or analytics outside the service
          providers necessary to operate our business. We process data to
          provide the services you&apos;ve engaged us for, and for no other
          purpose.
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">
            We build for auditability.
          </strong>
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Because our products govern workflows where accountability matters
          — accounting, payroll, compliance — we design them to produce
          records that stand up to review. The same discipline applies to how
          we operate our own business: decisions about security, access, and
          data handling are documented and reviewable.
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-4">
          <strong className="text-heading font-semibold">
            We&apos;d rather say &ldquo;not yet&rdquo; than overclaim.
          </strong>
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          This page does not claim certifications we haven&apos;t earned or
          controls we haven&apos;t implemented. When we have SOC 2
          attestation, third-party audits, or specific compliance
          certifications, they will be named here. Until then, we&apos;d
          rather be specific about what we&apos;re building than vague about
          what we have.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          What We Focus On
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Our security program is organized around four areas:
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-6">
          <strong className="text-heading font-semibold">
            Access and identity.
          </strong>{" "}
          How we control who can access what, both inside Faraday and inside
          our products. Role-based permissions, authentication standards, and
          least-privilege design.
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-6">
          <strong className="text-heading font-semibold">
            Data handling.
          </strong>{" "}
          How data moves through our systems, how it&apos;s stored, and how
          it&apos;s protected at each stage. Encryption, minimization, and
          retention.
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-6">
          <strong className="text-heading font-semibold">
            Operational integrity.
          </strong>{" "}
          How we monitor for issues, respond to incidents, and keep systems
          running reliably. Logging, alerting, and continuity planning.
        </p>

        <p className="text-[17px] text-muted leading-relaxed mb-6">
          <strong className="text-heading font-semibold">
            Governance and accountability.
          </strong>{" "}
          How we make security decisions, document them, and hold ourselves
          accountable to the standards we set. This is also what our products
          help customers do for their own workflows.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          What This Page Will Become
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-4">
          As Faraday&apos;s security program matures, this page will be
          updated to reflect specific commitments and certifications,
          including:
        </p>
        <ul className="list-disc pl-6 mb-6 text-[17px] text-muted leading-relaxed space-y-2">
          <li>Third-party audit attestations (SOC 2, ISO, or equivalents)</li>
          <li>Data processing agreements and subprocessor disclosures</li>
          <li>
            Incident response policies and service-level commitments
          </li>
          <li>Penetration testing cadence and summary findings</li>
          <li>
            Security questionnaire responses and trust documentation
          </li>
        </ul>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          If you&apos;re evaluating Faraday for a deployment where specific
          security documentation is required, we&apos;d rather have the
          conversation directly than commit to things on a webpage before
          they&apos;re real. Contact us and we&apos;ll walk you through where
          we are, what we&apos;re building, and how it maps to your
          requirements.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          Working With Us
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          For enterprise buyers, procurement teams, or legal reviewers who
          need more detail on our security posture:
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Email{" "}
          <a
            href="mailto:info@faradaycapitalsystems.com?subject=Security Review"
            className="text-accent-light hover:text-accent-lighter transition-colors"
          >
            info@faradaycapitalsystems.com
          </a>{" "}
          with the subject line &ldquo;Security Review.&rdquo; We&apos;ll
          respond with the documentation we have available and an honest
          assessment of gaps. We don&apos;t have a trust portal yet. We will.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          Reporting a Security Issue
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          If you believe you&apos;ve found a security vulnerability in a
          Faraday product or on our website, please contact us at{" "}
          <a
            href="mailto:info@faradaycapitalsystems.com?subject=Security Disclosure"
            className="text-accent-light hover:text-accent-lighter transition-colors"
          >
            info@faradaycapitalsystems.com
          </a>{" "}
          with the subject line &ldquo;Security Disclosure.&rdquo;
          We&apos;ll acknowledge receipt within two business days and work
          with you on appropriate next steps.
        </p>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          Please do not publicly disclose security issues until we&apos;ve
          had an opportunity to investigate and respond.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          Changes To This Page
        </h2>
        <p className="text-[17px] text-muted leading-relaxed mb-6">
          We may update this page as our security program evolves. Material
          changes will be reflected in the &ldquo;Last Updated&rdquo; date
          above.
        </p>

        <h2 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-heading mt-12 mb-4">
          Contact
        </h2>
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
