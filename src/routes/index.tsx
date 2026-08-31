import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  FileCheck2,
  Gem,
  HandCoins,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/capitalnest-hero.jpg.asset.json";
import markAsset from "@/assets/capitalnest-mark.png.asset.json";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Corporate Insurance", "corporate-insurance"],
  ["Why Us", "why-us"],
  ["How We Work", "how-we-work"],
  ["Contact", "contact"],
] as const;

const services = [
  {
    number: "01",
    title: "Insurance",
    icon: ShieldCheck,
    intro: "Protection designed around what matters.",
    items: ["Health Insurance", "Term Insurance", "Property Insurance", "Motor Insurance", "Liability Insurance", "Marine Insurance", "Group Insurance"],
  },
  {
    number: "02",
    title: "Loans",
    icon: HandCoins,
    intro: "Structure the right capital for the next move.",
    items: ["Home Loan", "Business Loan", "Vehicle Loan", "Other Loans"],
  },
  {
    number: "03",
    title: "Investments",
    icon: TrendingUp,
    intro: "Build with a clear view of the future.",
    items: ["Mutual Funds", "SIP (Systematic Investment Plan)", "ULIP", "Fixed Deposit (FD)", "Endowment Plans"],
  },
  {
    number: "04",
    title: "Taxation",
    icon: Scale,
    intro: "Keep decisions clear, compliant and considered.",
    items: ["ITR Filing", "Accounting & Audit", "GST", "Tax Planning"],
  },
  {
    number: "05",
    title: "Business Registration",
    icon: Building2,
    intro: "Set up the foundations for doing business.",
    items: ["Business Registration"],
  },
  {
    number: "06",
    title: "Trademark & Compliance",
    icon: FileCheck2,
    intro: "Protect the identity and continuity of your enterprise.",
    items: ["Trademarking", "Compliance-related advisory"],
  },
] as const;

const corporateServices = [
  ["01", "Coverage Assessment & Policy Review", "A structured review of sums insured, terms, exclusions, warranties, gaps and overlaps."],
  ["02", "Premium Optimisation & Risk Improvement", "Benchmark premiums against market standards and improve coverage quality without compromising protection."],
  ["03", "Complimentary Claims Assistance", "Guidance on documentation, notifications, survey coordination and disputed or partially settled claims."],
  ["04", "Ongoing Advisory & Renewal Support", "A continuing point of contact for renewal negotiations, claims assistance and coverage reviews throughout the year."],
] as const;

const corporateCovers = [
  "Fire & Special Perils",
  "Burglary",
  "Marine / Transit",
  "Group Mediclaim",
  "Group Personal Accident",
  "Directors & Officers Liability",
  "Public / Product Liability",
  "Workmen's Compensation",
  "Other Corporate Covers",
];

const reasons = [
  ["Independent advice", "Not tied to a single insurance company.", Network],
  ["Local presence in Jaipur", "Hands-on, relationship-based service.", MapPin],
  ["Transparent assessment", "Data-backed review of your existing coverage.", BarChart3],
  ["Real premium savings", "Focus on efficient protection, not just a lower renewal price.", Gem],
  ["Dedicated claims support", "Built into the advisory relationship at no extra cost.", ShieldCheck],
  ["Ongoing monitoring", "A partner beyond a one-time review.", Sparkles],
] as const;

const steps = [
  ["01", "Discovery", "Collect existing policies, schedules and past claims history."],
  ["02", "Assessment", "Audit the programme against your operational risk profile and market benchmarks."],
  ["03", "Recommendation", "Present clear recommendations on premium optimisation and risk / coverage improvement."],
  ["04", "Implementation & Ongoing Support", "Support renewal negotiations, claims assistance and ongoing coverage reviews."],
] as const;

const audiences = ["Manufacturing", "Trading & Distribution", "Hospitality", "Educational Institutions", "Healthcare", "Real Estate", "Construction", "Other Corporates"];

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Name is too long."),
  company: z.string().trim().max(100, "Company name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(160, "Email is too long."),
  phone: z.string().trim().regex(/^[+\d][\d\s()-]{7,18}$/, "Please enter a valid phone number."),
  message: z.string().trim().min(10, "Please tell us a little more.").max(1000, "Message is too long."),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CapitalNest Financial | Financial Advisory in Jaipur" },
      { name: "description", content: "CapitalNest Financial provides thoughtful insurance, loans, investments, taxation and corporate insurance advisory across Jaipur and Rajasthan." },
      { property: "og:title", content: "CapitalNest Financial | Building Wealth. Securing Futures." },
      { property: "og:description", content: "Complete financial solutions and independent corporate insurance advisory for individuals and businesses across Jaipur and Rajasthan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="CapitalNest Financial home">
      <img src={markAsset.url} alt="CapitalNest Financial mark" width={compact ? 45 : 58} height={compact ? 38 : 50} className={`${compact ? "h-10 w-11" : "h-12 w-14"} shrink-0 object-contain`} />
      <span className="min-w-0">
        <span className={`${compact ? "text-sm" : "text-base"} block truncate font-semibold tracking-[0.18em] text-primary-foreground`}>CAPITAL<span className="text-gold">NEST</span></span>
        <span className="mt-0.5 block text-[8px] tracking-[0.36em] text-gold">FINANCIAL</span>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] ${light ? "text-gold" : "text-gold"}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl leading-[0.98] sm:text-5xl md:text-6xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {copy ? <p className={`mt-6 max-w-xl text-base leading-8 ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{copy}</p> : null}
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus(null);
    setFormError(null);
    const formData = new FormData(event.currentTarget);
    const result = inquirySchema.safeParse(Object.fromEntries(formData.entries()));
    if (!result.success) {
      setFormError(result.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }
    const subject = `Advisor enquiry from ${result.data.name}`;
    const body = [`Name: ${result.data.name}`, `Company: ${result.data.company || "Not provided"}`, `Email: ${result.data.email}`, `Phone: ${result.data.phone}`, "", result.data.message].join("\n");
    window.location.href = `mailto:capitalnestfinancial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormStatus("Your email app is opening with the enquiry prepared.");
    event.currentTarget.reset();
  };

  return (
    <main id="home" className="overflow-hidden bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-primary/90 backdrop-blur-md">
        <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
          <BrandMark compact />
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-[11px] font-medium uppercase tracking-[0.13em] text-primary-foreground/70 transition-colors hover:text-gold">{label}</a>)}
          </nav>
          <div className="flex items-center justify-end gap-2">
            <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex"><a href="#contact">Talk to an Advisor <ArrowRight /></a></Button>
            <Button variant="navIcon" size="icon" className="xl:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen ? <nav className="border-t border-primary-foreground/10 bg-primary px-4 py-4 xl:hidden" aria-label="Mobile navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-primary-foreground/10 py-3 text-sm uppercase tracking-[0.14em] text-primary-foreground/80 last:border-b-0">{label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)} className="mt-3 block py-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold">Talk to an Advisor <ArrowRight className="ml-2 inline size-4" /></a></nav> : null}
      </header>

      <section className="relative isolate flex min-h-[760px] items-center bg-primary pb-24 pt-36 text-primary-foreground sm:min-h-[820px] lg:min-h-[880px]">
        <img src={heroAsset.url} alt="Sunlit boardroom overlooking Jaipur" width={1600} height={1104} className="absolute inset-0 -z-20 h-full w-full object-cover object-center animate-slow-pan" />
        <div className="absolute inset-0 -z-10 bg-primary/75" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/80 via-primary/55 to-primary/85" />
        <div className="section-shell w-full">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center animate-rise-in">
            <BrandMark />
            <div className="mt-12 flex items-center justify-center gap-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-gold"><span className="h-px w-10 bg-gold" />Jaipur &amp; Rajasthan<span className="h-px w-10 bg-gold" /></div>
            <h1 className="mt-8 font-display text-[clamp(2.6rem,8vw,6rem)] leading-[1.02] text-primary-foreground">
              <span className="block sm:whitespace-nowrap">Building Wealth.</span>
              <span className="block text-gold sm:whitespace-nowrap">Securing Futures.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-primary-foreground/80">Complete Financial Solutions for Individuals and Businesses.</p>
            <p className="mt-3 max-w-lg text-sm leading-7 text-primary-foreground/60">A trusted partner for financial, insurance and business solutions under one roof.</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3"><Button asChild variant="gold" size="lg"><a href="#contact">Talk to an Advisor <ArrowRight /></a></Button><Button asChild variant="heroOutline" size="lg"><a href="#services">Explore Our Services <ArrowDownRight /></a></Button></div>
            <div className="mt-14 hidden items-center justify-center gap-6 lg:flex"><span className="gold-line w-16" /><p className="font-display text-2xl text-gold">One team. One place.</p><span className="gold-line w-16" /></div>
          </div>
          <a href="#about" className="mx-auto mt-20 flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/60 transition-colors hover:text-gold"><span className="grid size-8 place-items-center rounded-full border border-primary-foreground/30"><ChevronDown className="size-4" /></span> Discover CapitalNest</a>
        </div>
      </section>

      <section id="about" className="bg-ivory py-24 sm:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <SectionHeading eyebrow="About CapitalNest Financial" title="Clarity for the decisions that shape your future." />
          <div className="max-w-2xl"><p className="text-xl leading-9 text-primary">CapitalNest Financial is a financial solutions and advisory firm helping individuals and businesses make considered decisions across insurance, loans, investments, taxation and business-related services.</p><p className="mt-7 text-base leading-8 text-muted-foreground">For corporates, our insurance advisory work is independent and advisor-led. We review what you already hold, identify gaps and overlaps, benchmark premiums and help negotiate better terms across the market — with support when a claim actually has to be made.</p><div className="mt-10 gold-line" /><div className="mt-6 flex items-center justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary"><span>Independent guidance</span><span className="text-gold">Since the decision matters</span></div></div>
        </div>
      </section>

      <section id="services" className="bg-primary py-24 text-primary-foreground sm:py-32">
        <div className="section-shell"><SectionHeading eyebrow="Our Services" title="Complete Financial Solutions Under One Roof" copy="A considered portfolio of services for personal milestones, business decisions and the risks in between." light /><div className="mt-14 grid gap-px bg-gold/40 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ number, title, icon: Icon, intro, items }) => <article key={title} className="group bg-primary p-7 transition-colors duration-300 hover:bg-navy-soft sm:p-8"><div className="flex items-start justify-between gap-4"><span className="font-display text-3xl text-gold/70">{number}</span><Icon className="size-7 stroke-1 text-gold transition-transform duration-300 group-hover:-translate-y-1" /></div><h3 className="mt-12 font-display text-3xl text-primary-foreground">{title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-primary-foreground/60">{intro}</p><ul className="mt-7 space-y-2 border-t border-primary-foreground/15 pt-5">{items.map((item) => <li key={item} className="flex gap-2 text-sm text-primary-foreground/80"><span className="mt-2 size-1 shrink-0 rounded-full bg-gold" />{item}</li>)}</ul></article>)}</div></div>
      </section>

      <section id="corporate-insurance" className="bg-ivory py-24 sm:py-32">
        <div className="section-shell"><div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"><div><SectionHeading eyebrow="Corporate Insurance Advisory" title="Corporate Insurance Advisory & Risk Management" copy="Independent guidance on coverage, premium and claims — for corporates in Jaipur." /><a href="#contact" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:text-gold">Review your programme <ArrowRight className="size-4" /></a></div><div><p className="text-lg leading-8 text-primary">We help businesses strengthen risk protection while controlling insurance cost. Rather than selling a single insurer's product, we act as your organisation's dedicated insurance advisor.</p><p className="mt-6 text-sm leading-7 text-muted-foreground">Our engagement is built around two commitments: helping you get the most efficient premium for the coverage you genuinely need, and standing beside you — at no extra cost — when a claim has to be made.</p></div></div><div className="mt-16 grid gap-px bg-border sm:grid-cols-2">{corporateServices.map(([number, title, copy]) => <article key={number} className="bg-card p-7 sm:p-9"><span className="font-display text-4xl text-gold">{number}</span><h3 className="mt-8 max-w-xs font-display text-3xl leading-tight text-primary">{title}</h3><p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">{copy}</p></article>)}</div><div className="mt-16 grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">Corporate covers reviewed</p><p className="mt-4 text-sm leading-7 text-muted-foreground">A structured audit against your actual operational risk exposure.</p></div><div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">{corporateCovers.map((cover) => <div key={cover} className="flex items-start gap-3 text-sm text-primary"><Check className="mt-0.5 size-4 shrink-0 text-gold" />{cover}</div>)}</div></div></div>
      </section>

      <section id="why-us" className="bg-navy-deep py-24 text-primary-foreground sm:py-32"><div className="section-shell"><SectionHeading eyebrow="Why CapitalNest" title="Why Corporates Partner With Us" copy="A relationship built on independence, evidence and support that stays close to the decision." light /><div className="mt-14 grid gap-px bg-gold/40 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(([title, copy, Icon]) => <article key={title} className="bg-navy-deep p-7 sm:p-8"><Icon className="size-7 stroke-1 text-gold" /><h3 className="mt-10 font-display text-2xl text-primary-foreground">{title}</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/60">{copy}</p></article>)}</div></div></section>

      <section id="how-we-work" className="bg-background py-24 sm:py-32"><div className="section-shell"><SectionHeading eyebrow="How We Work" title="A clear path from review to readiness." copy="Four steps, built to turn a complex insurance programme into decisions you can act on." /><div className="mt-16 grid gap-0 lg:grid-cols-4">{steps.map(([number, title, copy], index) => <article key={number} className="relative border-l border-gold/50 px-6 pb-10 pt-2 first:border-l-0 first:pl-0 lg:border-l lg:pb-0 lg:pl-7 lg:pr-7 lg:first:border-l-0"><span className="font-display text-5xl text-gold/80">{number}</span><h3 className="mt-8 max-w-[12rem] font-display text-2xl leading-tight text-primary">{title}</h3><p className="mt-4 max-w-[14rem] text-sm leading-7 text-muted-foreground">{copy}</p>{index < steps.length - 1 ? <ArrowRight className="absolute bottom-0 left-6 size-5 text-gold lg:bottom-auto lg:left-auto lg:right-0 lg:top-12" /> : null}</article>)}</div></div></section>

      <section className="bg-secondary py-24 sm:py-32"><div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><SectionHeading eyebrow="Who We Serve" title="Built for businesses with something to protect." /><p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-gold">Serving businesses across Jaipur & Rajasthan.</p></div><div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">{audiences.map((audience, index) => <div key={audience} className="flex items-center gap-5 border-b border-border py-5"><span className="font-display text-xl text-gold">0{index + 1}</span><span className="text-base text-primary">{audience}</span></div>)}</div></div></section>

      <section className="bg-primary py-20 text-primary-foreground"><div className="section-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Meet Our Founders & Advisors</p><h2 className="mt-5 font-display text-4xl text-primary-foreground sm:text-5xl">Guidance with a personal point of view.</h2></div><a href="#contact" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-gold">Talk to the team <ArrowRight className="size-4" /></a></div><div className="section-shell mt-12 grid gap-px bg-gold/50 sm:grid-cols-2"><div className="bg-primary py-8 pr-8"><p className="font-display text-3xl text-gold">VIKAS GUPTA</p><p className="mt-2 text-sm text-primary-foreground/60">Founder & Advisor</p></div><div className="bg-primary py-8 sm:pl-8"><p className="font-display text-3xl text-gold">VIDIT JAIN</p><p className="mt-2 text-sm text-primary-foreground/60">Founder & Advisor</p></div></div></section>

      <section id="contact" className="bg-ivory py-24 sm:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><SectionHeading eyebrow="Contact" title="Let's review what matters to you." copy="Share a few details and our team will be in touch. For immediate enquiries, call or email us directly." /><div className="mt-10 space-y-6"><a href="tel:+917014255582" className="flex items-start gap-4 text-primary transition-colors hover:text-gold"><Phone className="mt-1 size-5 text-gold" /><span><span className="block text-sm font-semibold">7014255582</span><span className="mt-1 block text-sm font-semibold">9928991818</span></span></a><a href="mailto:capitalnestfinancial@gmail.com" className="flex items-center gap-4 text-sm text-primary transition-colors hover:text-gold"><Mail className="size-5 text-gold" />capitalnestfinancial@gmail.com</a><div className="flex items-start gap-4 text-sm leading-7 text-primary"><MapPin className="mt-1 size-5 shrink-0 text-gold" /><span>8-B, Shri Ram Nagar,<br />Opp. Dhanwantri Hospital,<br />New Sanganer Road,<br />Mansarovar, Jaipur - 302020</span></div></div></div><div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]"><form onSubmit={handleInquiry} className="space-y-5" noValidate><div className="grid gap-5 sm:grid-cols-2"><label className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">Name<input name="name" required maxLength={80} className="mt-3 h-12 w-full border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold" placeholder="Your name" /></label><label className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">Company <span className="font-normal normal-case tracking-normal text-muted-foreground">(optional)</span><input name="company" maxLength={100} className="mt-3 h-12 w-full border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold" placeholder="Your company" /></label></div><div className="grid gap-5 sm:grid-cols-2"><label className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">Email<input name="email" required type="email" maxLength={160} className="mt-3 h-12 w-full border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold" placeholder="you@example.com" /></label><label className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">Phone<input name="phone" required maxLength={19} className="mt-3 h-12 w-full border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold" placeholder="Your phone number" /></label></div><label className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">How can we help?<textarea name="message" required maxLength={1000} rows={4} className="mt-3 w-full resize-none border-b border-border bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold" placeholder="Tell us about your requirement" /></label>{formError ? <p className="text-sm text-destructive" role="alert">{formError}</p> : null}{formStatus ? <p className="text-sm text-primary" role="status">{formStatus}</p> : null}<Button type="submit" variant="dark" size="lg">Talk to an Advisor <ArrowRight /></Button></form><div className="min-h-[320px] overflow-hidden border border-border bg-primary"><iframe title="CapitalNest Financial location map" src="https://www.google.com/maps?q=Mansarovar,+Jaipur,+Rajasthan&output=embed" loading="lazy" className="h-full min-h-[320px] w-full border-0 grayscale-[0.4]" /></div></div></div></section>

      <footer className="bg-navy-deep py-14 text-primary-foreground"><div className="section-shell"><div className="grid gap-12 border-b border-primary-foreground/15 pb-12 lg:grid-cols-[1.2fr_1fr_1fr]"><div><BrandMark compact /><p className="mt-6 max-w-xs font-display text-2xl text-primary-foreground/90">Building Wealth.<br /><span className="text-gold">Securing Futures.</span></p></div><div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">Quick Links</p><div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">{[["Home", "home"], ...navItems].map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">{label}</a>)}</div></div><div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">Get in touch</p><div className="mt-5 space-y-3 text-sm text-primary-foreground/60"><a href="tel:+917014255582" className="block transition-colors hover:text-gold">7014255582</a><a href="mailto:capitalnestfinancial@gmail.com" className="block break-all transition-colors hover:text-gold">capitalnestfinancial@gmail.com</a><p className="leading-6">8-B, Shri Ram Nagar,<br />Mansarovar, Jaipur - 302020</p></div></div></div><div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[0.16em] text-primary-foreground/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} CapitalNest Financial</span><span>Independent financial & corporate insurance advisory</span></div></div></footer>
    </main>
  );
}