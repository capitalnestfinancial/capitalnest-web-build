import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import type { AdvisoryDetail } from "@/lib/site-data";

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h1 className="font-display text-4xl leading-[0.98] text-primary sm:text-5xl md:text-6xl">{title}</h1>
      {copy ? <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">{copy}</p> : null}
    </div>
  );
}

export function AdvisoryDetailPage({ detail }: { detail: AdvisoryDetail }) {
  return (
    <main className="overflow-hidden bg-background">
      <section className="bg-ivory py-24 pt-36 sm:py-32 sm:pt-44">
        <div className="section-shell">
          <Link to="/" className="mb-14 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-gold">
            <ArrowRight className="size-4 rotate-180" /> All services
          </Link>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <SectionHeading eyebrow={detail.eyebrow} title={detail.title} copy={detail.description} />
              <Link to="/" hash="contact" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:text-gold">
                {detail.linkLabel} <ArrowRight className="size-4" />
              </Link>
            </div>
            <div>
              <p className="text-lg leading-8 text-primary">{detail.rightColumn[0]}</p>
              <p className="mt-6 text-sm leading-7 text-muted-foreground">{detail.rightColumn[1]}</p>
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
            {detail.services.map(([number, title, copy]) => (
              <article key={number} className="bg-card p-7 sm:p-9">
                <span className="font-display text-4xl text-gold">{number}</span>
                <h2 className="mt-8 max-w-xs font-display text-3xl leading-tight text-primary">{title}</h2>
                <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">{copy}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-10 border-t border-border pt-10 lg:grid-cols-2 lg:gap-16">
            <AudienceList label={detail.audienceLabel} description={detail.audienceDescription} items={detail.audienceItems} />
            <AudienceList label={detail.businessLabel} description={detail.businessDescription} items={detail.businessItems} />
          </div>
        </div>
      </section>
      <Link to="/" hash="contact" className="block bg-primary py-10 text-center text-sm font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-navy-soft">
        Talk to an Advisor <ArrowRight className="ml-2 inline size-4" />
      </Link>
    </main>
  );
}

function AudienceList({ label, description, items }: { label: string; description: string; items: readonly string[] }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{label}</p>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
      <div className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 text-sm text-primary">
            <Check className="mt-0.5 size-4 shrink-0 text-gold" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}