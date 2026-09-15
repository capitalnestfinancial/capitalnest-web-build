import { createFileRoute, Link } from "@tanstack/react-router";
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
  Network,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/capitalnest-hero.jpg.asset.json";
import markAsset from "@/assets/capitalnest-mark.png.asset.json";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Insurance", "corporate-insurance"],
  ["Loans", "loans"],
  ["Investments", "investments"],
  ["Taxation", "taxation"],
  ["Registration", "business-registration"],
  ["Trademark", "trademark-compliance"],
  ["Why Us", "why-us"],
  ["How We Work", "how-we-work"],
  ["Contact", "contact"],
] as const;

const services = [
  {
    number: "01",
    title: "Insurance",
    slug: "insurance",
    icon: ShieldCheck,
    intro: "Protection designed around what matters.",
    items: ["Health Insurance", "Term Insurance", "Property Insurance", "Motor Insurance", "Liability Insurance", "Marine Insurance", "Group Insurance"],
  },
  {
    number: "02",
    title: "Loans",
    slug: "loans",
    icon: HandCoins,
    intro: "Structure the right capital for the next move.",
    items: ["Home Loan", "Business Loan", "Vehicle Loan", "Other Loans"],
  },
  {
    number: "03",
    title: "Investments",
    slug: "investments",
    icon: TrendingUp,
    intro: "Build with a clear view of the future.",
    items: ["Mutual Funds", "SIP (Systematic Investment Plan)", "ULIP", "Fixed Deposit (FD)", "Endowment Plans"],
  },
  {
    number: "04",
    title: "Audit & Taxation",
    slug: "taxation",
    icon: Scale,
    intro: "Keep decisions clear, compliant and considered.",
    items: ["ITR Filing", "Accounting & Audit", "GST", "Tax Planning"],
  },
  {
    number: "05",
    title: "Business Registration",
    slug: "business-registration",
    icon: Building2,
    intro: "Set up the foundations for doing business.",
    items: ["Business Registration"],
  },
  {
    number: "06",
    title: "Trademark & Compliance",
    slug: "trademark-compliance",
    icon: FileCheck2,
    intro: "Protect the identity and continuity of your enterprise.",
    items: ["Trademarking", "Compliance-related advisory"],
  },
] as const;

const insuranceServices = [
  ["01", "Coverage Assessment & Policy Review", "A structured review of sums insured, terms, exclusions, warranties, gaps and overlaps."],
  ["02", "Premium Optimisation & Risk Improvement", "Benchmark premiums against current market standards and improve coverage without compromising protection."],
  ["03", "Complimentary Claims Assistance", "Guidance with documentation, notifications, survey coordination and disputed or partially settled claims."],
  ["04", "Ongoing Advisory & Renewal Support", "A continuing point of contact for renewal negotiations, claims assistance and coverage reviews throughout the year."],
] as const;

const individualCovers = [
  "Term Life Insurance",
  "Health Insurance (Individual & Family Floater)",
  "Motor Insurance (Car / Two-Wheeler)",
  "Home / Property Insurance",
  "Personal Accident Cover",
  "Critical Illness Cover",
  "Travel Insurance",
  "Child / Education-Linked Plans",
];

const corporateCovers = [
  "Fire & Special Perils",
  "Burglary",
  "Marine / Transit",
  "Group Health & Accidental Insurance",
  "      Professional Indemnity",
  "Directors & Officers Liability",
  "Public / Product Liability",
  "Workmen's Compensation",
  "Other Corporate Insurance",
];

type AdvisoryDetail = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  rightColumn: [string, string];
  linkLabel: string;
  services: readonly [string, string, string][];
  audienceLabel: string;
  audienceDescription: string;
  audienceItems: readonly string[];
  businessLabel: string;
  businessDescription: string;
  businessItems: readonly string[];
};

const advisoryDetails: readonly AdvisoryDetail[] = [
  {
    id: "loans",
    eyebrow: "Loan Advisory",
    title: "Loan Advisory & Credit Structuring",
    description: "From home and business loans to vehicle finance & personal loan, we help you find the right financing solution tailored to your needs. Our expert guidance makes borrowing simpler, smarter, and more transparent.",
    rightColumn: [
      "The lowest rate you see advertised and the rate you actually qualify for are rarely the same number — and the gap is where most borrowers overpay for years without realizing it. We work as loan advisors who sit on your side of the table, comparing what's genuinely available across banks and NBFCs for your specific profile, structuring the application so approval doesn't stall, and pushing for the number that actually lands on your EMI.",
      "We don't earn more for steering you toward one lender over another, so the comparison you get is real. And we don't disappear after disbursement — if a sharper rate opens up two years into your loan, we're the ones telling you, at no extra cost.",
    ],
    linkLabel: "Discuss your borrowing need",
    services: [
      ["01", "Loan Requirement Assessment & Eligibility Check", "We review your borrowing need, repayment capacity and credit profile to identify the right loan type and amount — not simply the maximum available."],
      ["02", "Loan Structuring & Lender Comparison", "We benchmark interest rates, processing fees, tenure and terms across multiple banks and NBFCs, then negotiate on your behalf."],
      ["03", "Documentation & Application Support", "We prepare and vet documentation, coordinate with the lender and help resolve queries so applications move with fewer delays."],
      ["04", "Post-Disbursement & Refinance Support", "We monitor your loan against current market benchmarks and guide balance transfers, refinancing, part-payments and restructuring."],
    ],
    audienceLabel: "For individuals & families",
    audienceDescription: "Thoughtful credit guidance for personal milestones and planned borrowing.",
    audienceItems: ["Home Loan", "Loan Against Property", "Personal Loan", "Car / Vehicle Loan", "Education Loan", "Loan Against Securities / FD"],
    businessLabel: "For businesses & corporates",
    businessDescription: "Structured finance support for working capital, growth and business continuity.",
    businessItems: ["Business / Working Capital Loan", "Term Loan", "Overdraft / Cash Credit", "Machinery & Equipment Loan", "Trade Finance / Letter of Credit", "Loan Restructuring & Refinancing"],
  },
  {
    id: "investments",
    eyebrow: "Investment Advisory",
    title: "Investment Advisory & Portfolio Management",
    description: "Invest with clarity, confidence and purpose. Our investment advisory services help you choose suitable investment solutions based on your financial goals, risk profile and long-term wealth creation objectives.",
    rightColumn: [
      "Money compounds quietly when nobody interferes with it. Most portfolios don't underperform because the funds were wrong — they underperform because someone panicked in a downturn, chased last year's best performer, or simply never looked at the portfolio again after setting it up. At CapitalNest Financial, we help you understand different investment avenues and choose solutions aligned with your financial goals, investment horizon, risk profile and liquidity requirements.",
      "We stay involved after the plan is made, not just at the start. That means periodic reviews, honest conversations about what needs rebalancing, our team provides personalized guidance to help you make informed decisions.",
    ],
    linkLabel: "Review your portfolio",
    services: [
      ["01", "Goal-Based Investment Planning", "We map investments to retirement, education, wealth creation or business surplus goals, with allocation built around each time horizon and risk appetite."],
      ["02", "Portfolio Review & Rebalancing", "We audit current holdings across funds, equity, deposits and bonds to identify concentration, overlap, underperformance and allocation drift."],
      ["03", "Product & Fund Selection Advisory", "We compare funds, AMCs, fixed-income instruments and deposits on track record, quality and cost — not on product bias."],
      ["04", "Ongoing Portfolio Monitoring & Reporting", "Periodic reviews, consolidated reporting and life-stage adjustments keep your strategy aligned as markets and circumstances change."],
    ],
    audienceLabel: "For individuals & families",
    audienceDescription: "A considered investment plan for the goals that matter over time.",
    audienceItems: ["Mutual Funds (SIP / Lump-sum)", "Equity Investment Advisory", "Fixed Deposits & Bonds", "PPF / NPS / Retirement Plans", "Tax-Saving Investments (ELSS)", "Child Education & Wealth Plans"],
    businessLabel: "For businesses & corporates",
    businessDescription: "Practical oversight for surplus cash, treasury and long-term diversification.",
    businessItems: ["Corporate Surplus Fund Management", "Corporate Fixed Deposits", "Treasury & Liquidity Investments", "Structured & Debt Investments", "Employee Retirement / Gratuity Funds", "Portfolio Diversification Advisory"],
  },
  {
    id: "taxation",
    eyebrow: "Tax Advisory",
    title: "Taxation Advisory & Compliance",
    description: "Simplify your accounting and taxation requirements with expert guidance. From ITR filing and GST compliance to accounting, audits and tax planning, we help you stay compliant and financially organized.",
    rightColumn: [
      "Stay compliant, organized, and financially prepared with our comprehensive audit and taxation solutions. We assist individuals and businesses with ITR Filing, Accounting & Audit, GST Compliance, Tax Planning, and related financial requirements, helping you manage your obligations efficiently and make informed financial decisions.",
      "Where planning wasn't done in time, or a notice shows up unannounced, we don't leave existing clients to handle it alone — representation and response during scrutiny or assessment comes built into the relationship, not billed as a separate emergency.",
    ],
    linkLabel: "Plan your taxes",
    services: [
      ["01", "Tax Planning & Advisory", "We review income, investments and expenses well before filing to structure deductions, exemptions, advance tax and different income streams efficiently."],
      ["02", "Income Tax & GST Return Filing", "Accurate, on-time income tax and GST filing backed by a review of Form 26AS, AIS, TDS credits, capital gains and other income heads."],
      ["03", "Audit & Regulatory Compliance", "We provide comprehensive audit, accounting, taxation, and regulatory compliance support to help businesses stay accurate, transparent, and compliant"],
      ["04", "Notice, Assessment & Audit Support", "We review notices, draft responses and provide representation and guidance during assessments, scrutiny, tax audits and documentation requests."],
    ],
    audienceLabel: "For individuals & families",
    audienceDescription: "Clear advice for personal income, investments and annual obligations.",
    audienceItems: ["Income Tax Return Filing", "Tax Planning & Investment Structuring", "Capital Gains Tax Advisory", "NRI Taxation", "Advance Tax Computation", "Notice & Assessment Support"],
    businessLabel: "For businesses & corporates",
    businessDescription: "Year-round compliance support that keeps business decisions moving.",
    businessItems: ["GST Registration & Return Filing", "Corporate & Business Tax Filing", "TDS / TCS Compliance", "Tax Audit ", "GST Reconciliation & Input Credit Review", "Assessment & Scrutiny Representation"],
  },
  {
    id: "business-registration",
    eyebrow: "Business Advisory",
    title: "Business Registration & Entity Structuring",
    description: "Practical guidance for choosing, registering and setting up the right legal structure.",
    rightColumn: [
      "Before a business has a product, a customer, or a rupee of revenue, it already has a structure — and that structure quietly decides how much tax it pays, how exposed the founder's personal assets are, and how easily it can raise money two years down the line. Most founders get this decision made for them by whoever files the paperwork fastest.",
      "We slow that one decision down before speeding everything after it up. Working with founders and businesses across Jaipur, we help you choose the entity that actually fits your plans — then handle the registration and the statutory filings that follow it, correctly, the first time.",
    ],
    linkLabel: "Structure your business",
    services: [
      ["01", "Entity Selection & Structuring Advisory", "We compare proprietorship, partnership, LLP and private limited structures based on liability, taxation, funding plans, scale and compliance load."],
      ["02", "Company / Firm Registration", "We manage name approval, incorporation documents, authority filings and coordination for director identification and digital signatures."],
      ["03", "Statutory Registrations & Licenses", "We handle the additional registrations many new businesses need, including GST, MSME / Udyam, IEC, Shops & Establishment and Professional Tax."],
      ["04", "Post-Registration Compliance Setup", "We help establish statutory registers, initial filings, bank documentation and a practical framework for ongoing ROC and regulatory compliance."],
    ],
    audienceLabel: "For individuals & start-ups",
    audienceDescription: "The right foundation for a new venture, professional practice or family business.",
    audienceItems: ["Proprietorship Registration", "Partnership Firm Registration", "LLP Registration", "Private Limited Company Registration", "MSME / Udyam Registration", "Startup India Recognition"],
    businessLabel: "For businesses & corporates",
    businessDescription: "Registration and restructuring support as the business grows and changes.",
    businessItems: ["GST Registration", "Import Export Code (IEC)", "Shops & Establishment License", "Professional Tax Registration", "Section 8 / Not-for-Profit Registration", "Entity Conversion & Restructuring"],
  },
  {
    id: "trademark-compliance",
    eyebrow: "Brand & Compliance Advisory",
    title: "Trademark & Regulatory Compliance",
    description: "Protect your brand and ensure your business meets applicable regulatory requirements with our end-to-end trademark and compliance support.",
    rightColumn: [
      "A name, a logo, a brand people recognise on sight — none of it legally belongs to you until it's registered. Until then, it's just something you're using and hoping nobody files first. We help individuals, professionals and businesses close that gap, and then keep it closed.",
      "Because registration isn't a one-time event — renewals lapse, objections get raised, compliance calendars get missed in the middle of running an actual business. We track the dates, handle the filings, and step in when an objection lands, so protecting what you've built doesn't depend on you remembering to.",
    ],
    linkLabel: "Protect your brand",
    services: [
      ["01", "Trademark Search & Registration", "We search for availability and conflicts, classify goods and services, prepare and file the application, and track it through examination."],
      ["02", "Brand Protection & Renewal", "We handle objections and oppositions, draft examination responses, track renewals and monitor potential infringement."],
      ["03", "Statutory & ROC Compliance", "For companies and LLPs, we manage annual ROC filings, financial statements, statutory registers, minutes and director or shareholder filings."],
      ["04", "Ongoing Regulatory Advisory", "Continuing guidance covers regulatory changes, licence renewals, intellectual property protection and business changes affecting compliance."],
    ],
    audienceLabel: "For individuals & professionals",
    audienceDescription: "Protect the identity you are building and keep it current.",
    audienceItems: ["Trademark Search & Filing", "Trademark Objection / Opposition Handling", "Copyright Registration", "Trademark Renewal", "Brand Infringement Monitoring"],
    businessLabel: "For businesses & corporates",
    businessDescription: "A dependable compliance calendar for the obligations behind the brand.",
    businessItems: ["ROC Annual Filings", "Company Compliance Calendar Management", "Trademark Portfolio Management", "Regulatory Filings & License Renewals", "Director & Shareholder Compliance"],
  },
];

const reasons = [
  ["Independent advice", "Not tied to a single insurance company.", Network],
  ["Local presence ", "Hands-on, relationship-based service.", MapPin],
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

const audiences = ["Individuals", "Families", "Manufacturing", "Trading & Distribution", "Hospitality", "Educational Institutions", "Healthcare", "Real Estate", "Construction", "Other Corporates"];

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
      <img src={markAsset.url} alt="CapitalNest Financial mark" width={compact ? 45 : 70} height={compact ? 38 : 60} className={`${compact ? "h-10 w-11" : "h-16 w-20 sm:h-[4.5rem] sm:w-24"} shrink-0 object-contain`} />
      <span className="min-w-0">
        <span className={`${compact ? "text-sm" : "text-lg sm:text-xl"} block truncate font-semibold tracking-[0.18em] text-primary-foreground`}>CAPITAL<span className="text-gold">NEST</span></span>
        <span className={`${compact ? "text-[8px]" : "text-[9px] sm:text-[10px]"} mt-0.5 block tracking-[0.36em] text-gold`}>FINANCIAL</span>
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

function AdvisoryDetailSection({ detail, alt = false }: { detail: AdvisoryDetail; alt?: boolean }) {
  return (
    <section id={detail.id} className={`${alt ? "bg-ivory" : "bg-background"} py-24 sm:py-32`}>
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <SectionHeading eyebrow={detail.eyebrow} title={detail.title} copy={detail.description} />
            <a href="#contact" className="mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:text-gold">{detail.linkLabel} <ArrowRight className="size-4" /></a>
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
              <h3 className="mt-8 max-w-xs font-display text-3xl leading-tight text-primary">{title}</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 grid gap-10 border-t border-border pt-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{detail.audienceLabel}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{detail.audienceDescription}</p>
            <div className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">{detail.audienceItems.map((item) => <div key={item} className="flex items-start gap-3 text-sm text-primary"><Check className="mt-0.5 size-4 shrink-0 text-gold" />{item}</div>)}</div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">{detail.businessLabel}</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{detail.businessDescription}</p>
            <div className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">{detail.businessItems.map((item) => <div key={item} className="flex items-start gap-3 text-sm text-primary"><Check className="mt-0.5 size-4 shrink-0 text-gold" />{item}</div>)}</div>
          </div>
        </div>
      </div>
    </section>
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
      <SiteHeader />

      <section className="relative isolate flex min-h-[760px] items-center bg-primary pb-24 pt-36 text-primary-foreground sm:min-h-[820px] lg:min-h-[880px]">
        <img src={heroAsset.url} alt="Sunlit boardroom overlooking Jaipur" width={1600} height={1104} className="absolute inset-0 -z-20 h-full w-full object-cover object-center animate-slow-pan" />
        <div className="absolute inset-0 -z-10 bg-primary/75" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/80 via-primary/55 to-primary/85" />
        <div className="section-shell w-full">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center animate-rise-in">
             <BrandMark />
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
         <div className="section-shell"><SectionHeading eyebrow="Our Services" title="Complete Financial Solutions Under One Roof" copy="A considered portfolio of services for personal milestones, business decisions and the risks in between." light /><div className="mt-14 grid gap-px bg-gold/40 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ number, title, slug, icon: Icon, intro, items }) => <Link key={title} to="/services/$serviceSlug" params={{ serviceSlug: slug }} className="group bg-primary p-7 transition-colors duration-300 hover:bg-navy-soft sm:p-8"><div className="flex items-start justify-between gap-4"><span className="font-display text-3xl text-gold/70">{number}</span><Icon className="size-7 stroke-1 text-gold transition-transform duration-300 group-hover:-translate-y-1" /></div><h3 className="mt-12 font-display text-3xl text-primary-foreground">{title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-primary-foreground/60">{intro}</p><ul className="mt-7 space-y-2 border-t border-primary-foreground/15 pt-5">{items.map((item) => <li key={item} className="flex gap-2 text-sm text-primary-foreground/80"><span className="mt-2 size-1 shrink-0 rounded-full bg-gold" />{item}</li>)}</ul></Link>)}</div></div>
      </section>

      <section id="why-us" className="bg-navy-deep py-24 text-primary-foreground sm:py-32"><div className="section-shell"><SectionHeading eyebrow="Why CapitalNest" title="Why Individuals and Corporates Partner With Us" copy="A relationship built on independence, evidence and support that stays close to the decision." light /><div className="mt-14 grid gap-px bg-gold/40 sm:grid-cols-2 lg:grid-cols-3">{reasons.map(([title, copy, Icon]) => <article key={title} className="bg-navy-deep p-7 sm:p-8"><Icon className="size-7 stroke-1 text-gold" /><h3 className="mt-10 font-display text-2xl text-primary-foreground">{title}</h3><p className="mt-3 text-sm leading-7 text-primary-foreground/60">{copy}</p></article>)}</div></div></section>

      <section id="how-we-work" className="bg-background py-24 sm:py-32"><div className="section-shell"><SectionHeading eyebrow="How We Work" title="A clear path from review to readiness." copy="Four steps, built to turn a complex insurance programme into decisions you can act on." /><div className="mt-16 grid gap-0 lg:grid-cols-4">{steps.map(([number, title, copy], index) => <article key={number} className="relative border-l border-gold/50 px-6 pb-10 pt-2 first:border-l-0 first:pl-0 lg:border-l lg:pb-0 lg:pl-7 lg:pr-7 lg:first:border-l-0"><span className="font-display text-5xl text-gold/80">{number}</span><h3 className="mt-8 max-w-[12rem] font-display text-2xl leading-tight text-primary">{title}</h3><p className="mt-4 max-w-[14rem] text-sm leading-7 text-muted-foreground">{copy}</p>{index < steps.length - 1 ? <ArrowRight className="absolute bottom-0 left-6 size-5 text-gold lg:bottom-auto lg:left-auto lg:right-0 lg:top-12" /> : null}</article>)}</div></div></section>

      <section className="bg-secondary py-24 sm:py-32"><div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24"><div><SectionHeading eyebrow="Who We Serve" title="Built for Individuals, Families and businesses with something to protect." /><p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-gold">SERVING BUSINESSES ACROSS INDIA</p></div><div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">{audiences.map((audience, index) => <div key={audience} className="flex items-center gap-5 border-b border-border py-5"><span className="font-display text-xl text-gold">{String(index + 1).padStart(2, "0")}</span><span className="text-base text-primary">{audience}</span></div>)}</div></div></section>

      <section className="bg-primary py-20 text-primary-foreground"><div className="section-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">Meet Our Founders & Advisors</p><h2 className="mt-5 font-display text-4xl text-primary-foreground sm:text-5xl">Guidance with a personal point of view.</h2></div><a href="#contact" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-gold">Talk to the team <ArrowRight className="size-4" /></a></div><div className="section-shell mt-12 grid gap-px bg-gold/50 sm:grid-cols-2"><div className="bg-primary py-8 pr-8"><p className="font-display text-3xl text-gold">VIKAS GUPTA</p><p className="mt-2 text-sm text-primary-foreground/60">Founder & Advisor</p></div><div className="bg-primary py-8 sm:pl-8"><p className="font-display text-3xl text-gold">VIDIT JAIN</p><p className="mt-2 text-sm text-primary-foreground/60">Founder & Advisor</p></div></div></section>

      <section id="contact" className="bg-ivory py-24 sm:py-32"><div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><SectionHeading eyebrow="Contact" title="Let's review what matters to you." copy="Share a few details and our team will be in touch. For immediate enquiries, call or email us directly." /><div className="mt-10 space-y-6"><a href="tel:+917014255582" className="flex items-start gap-4 text-primary transition-colors hover:text-gold"><Phone className="mt-1 size-5 text-gold" /><span><span className="block text-sm font-semibold">7014255582</span><span className="mt-1 block text-sm font-semibold">9928991818</span></span></a><a href="mailto:capitalnestfinancial@gmail.com" className="flex items-center gap-4 text-sm text-primary transition-colors hover:text-gold"><Mail className="size-5 text-gold" />capitalnestfinancial@gmail.com</a><div className="flex items-start gap-4 text-sm leading-7 text-primary"><MapPin className="mt-1 size-5 shrink-0 text-gold" /><span>8-B, Shri Ram Nagar,<br />Opp. Dhanwantri Hospital,<br />New Sanganer Road,<br />Mansarovar, Jaipur - 302020</span></div></div></div><div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]"><form onSubmit={handleInquiry} className="space-y-5" noValidate><div className="grid gap-5 sm:grid-cols-2"><label className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">Name<input name="name" required maxLength={80} className="mt-3 h-12 w-full border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold" placeholder="Your name" /></label><label className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">Company <span className="font-normal normal-case tracking-normal text-muted-foreground">(optional)</span><input name="company" maxLength={100} className="mt-3 h-12 w-full border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold" placeholder="Your company" /></label></div><div className="grid gap-5 sm:grid-cols-2"><label className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">Email<input name="email" required type="email" maxLength={160} className="mt-3 h-12 w-full border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold" placeholder="you@example.com" /></label><label className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">Phone<input name="phone" required maxLength={19} className="mt-3 h-12 w-full border-b border-border bg-transparent px-0 text-sm font-normal normal-case tracking-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold" placeholder="Your phone number" /></label></div><label className="block text-xs font-semibold uppercase tracking-[0.14em] text-primary">How can we help?<textarea name="message" required maxLength={1000} rows={4} className="mt-3 w-full resize-none border-b border-border bg-transparent px-0 py-3 text-sm font-normal normal-case tracking-normal outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold" placeholder="Tell us about your requirement" /></label>{formError ? <p className="text-sm text-destructive" role="alert">{formError}</p> : null}{formStatus ? <p className="text-sm text-primary" role="status">{formStatus}</p> : null}<Button type="submit" variant="dark" size="lg">Talk to an Advisor <ArrowRight /></Button></form><div className="min-h-[320px] overflow-hidden border border-border bg-primary"><iframe title="CapitalNest Financial location map" src="https://www.google.com/maps?q=Mansarovar,+Jaipur,+Rajasthan&output=embed" loading="lazy" className="h-full min-h-[320px] w-full border-0 grayscale-[0.4]" /></div></div></div></section>

      <footer className="bg-navy-deep py-14 text-primary-foreground"><div className="section-shell"><div className="grid gap-12 border-b border-primary-foreground/15 pb-12 lg:grid-cols-[1.2fr_1fr_1fr]"><div><BrandMark compact /><p className="mt-6 max-w-xs font-display text-2xl text-primary-foreground/90">Building Wealth.<br /><span className="text-gold">Securing Futures.</span></p></div><div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">Quick Links</p><div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">{[["Home", "home"], ...navItems].map(([label, id]) => <a key={id} href={`#${id}`} className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">{label}</a>)}</div></div><div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">Get in touch</p><div className="mt-5 space-y-3 text-sm text-primary-foreground/60"><a href="tel:+917014255582" className="block transition-colors hover:text-gold">7014255582</a><a href="mailto:capitalnestfinancial@gmail.com" className="block break-all transition-colors hover:text-gold">capitalnestfinancial@gmail.com</a><p className="leading-6">8-B, Shri Ram Nagar,<br />Mansarovar, Jaipur - 302020</p></div></div></div><div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[0.16em] text-primary-foreground/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} CapitalNest Financial</span><span>Independent financial & corporate insurance advisory</span></div></div></footer>
    </main>
  );
}