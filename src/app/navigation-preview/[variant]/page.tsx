import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FaradayPage from "../../page";

export const metadata: Metadata = {
  title: "Faraday navigation — design preview",
  robots: { index: false, follow: false },
};

export default async function NavigationPreview({ params }: { params: Promise<{ variant: string }> }) {
  const { variant } = await params;
  if (variant !== "compact" && variant !== "directory") notFound();
  return (
    <>
      <aside aria-label="Navigation design comparison" className="relative z-10 mx-auto max-w-[1200px] px-6 pt-24 text-sm text-zinc-300 sm:px-10">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-indigo-300">Navigation preview · {variant === "compact" ? "A: Compact explore menu" : "B: Expanded directory"}</p>
        <p className="mb-3">Use the menu above to explore Products and Projects. Compare both designs on desktop and mobile.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/navigation-preview/compact" aria-current={variant === "compact" ? "page" : undefined} className="rounded underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300">A · Compact</Link>
          <Link href="/navigation-preview/directory" aria-current={variant === "directory" ? "page" : undefined} className="rounded underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-300">B · Directory</Link>
        </div>
      </aside>
      <FaradayPage />
    </>
  );
}
