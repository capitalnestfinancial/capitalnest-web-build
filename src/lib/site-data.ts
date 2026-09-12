import {
  BarChart3,
  Building2,
  FileCheck2,
  Gem,
  HandCoins,
  MapPin,
  Network,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export const services = [
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

export type AdvisoryDetail = {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  rightColumn: [string, string];
  linkLabel: string;
  services: readonly (readonly [string, string, string])[];
  audienceLabel: string;
  audienceDescription: string;
  audienceItems: readonly string[];
  businessLabel: string;
  businessDescription: string;
  businessItems: readonly string[];
};

export const advisoryDetails: readonly AdvisoryDetail[] = [
  {
    id: "insurance",
    navLabel: "Insurance",
    eyebrow: "Insurance Advisory",
    title: "Insurance Advisory & Risk Management",
    description: "Independent guidance on coverage, premium and claims — for individuals, families and businesses.",
    rightColumn: [
      "We help individuals, families and businesses build the right protection — without over-insuring or under-insuring. Rather than selling a single insurer's product, we act as your dedicated insurance advisor, reviewing what you already hold and identifying gaps, overlaps and better options across the market.",
      "Our engagement is built around two commitments: helping you get the most efficient premium for the coverage you genuinely need, and standing beside you — at no extra cost — when a claim actually has to be made.",
    ],
    linkLabel: "Review your insurance",
    services: [
      ["01", "Coverage Assessment & Policy Review", "A structured review of sums insured, terms, exclusions, warranties, gaps and overlaps."],
      ["02", "Premium Optimisation & Risk Improvement", "Benchmark premiums against current market standards and improve coverage without compromising protection."],
      ["03", "Complimentary Claims Assistance", "Guidance with documentation, notifications, survey coordination and disputed or partially settled claims."],
      ["04", "Ongoing Advisory & Renewal Support", "A continuing point of contact for renewal negotiations, claims assistance and coverage reviews throughout the year."],
    ],
    audienceLabel: "For individuals & families",
    audienceDescription: "Life-stage advisory to protect the people, plans and possessions that matter most.",
    audienceItems: [
      "Term Life Insurance",
      "Health Insurance (Individual & Family Floater)",
      "Motor Insurance (Car / Two-Wheeler)",
      "Home / Property Insurance",
      "Personal Accident Cover",
      "Critical Illness Cover",
      "Travel Insurance",
      "Child / Education-Linked Plans",
    ],
    businessLabel: "For businesses & corporates",
    businessDescription: "Risk-improvement advisory for operational, people and liability exposures.",
    businessItems: [
      "Fire & Special Perils",
      "Burglary",
      "Marine / Transit",
      "Group Health & Accidental Insurance",
      "      Professional Indemnity",
      "Directors & Officers Liability",
      "Public / Product Liability",
      "Workmen's Compensation",
      "Other Corporate Insurance",
    ],
  },
  {
    id: "loans",
    navLabel: "Loans",
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
    navLabel: "Investments",
    eyebrow: "Investment Advisory",
    title: "Investment Advisory & Portfolio Management",
    description: "Invest with clarity, confidence and purpose. Our investment advisory services help you choose suitable investment solutions based on your financial goals, risk profile and long-term wealth creation objectives.",
    rightColumn: [
      "Money compounds quietly when nobody interferes with it. Most portfolios don't underperform because the funds were wrong — they underperform because someone panicked in a downturn, chased last year's best performer, or simply never looked at the portfolio again after setting it up. At CapitalNest Financial, we help you understand different investment avenues and choose solutions aligned with your financial goals, investment horizon, risk profile and liquidity requirements.",
      "We stay involved after the plan is made, not just at the start. That means periodic reviews, honest conversations about what needs rebalancing, our team provides personalized guidance to help you make informed decisions.",
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
    navLabel: "Audit & Taxation",
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
    businessItems: ["GST Registration & Return Filing", "Corporate & Business Tax Filing", "TDS / TCS Compliance", "Tax Audit ", "GST Reconciliation & Input Credit Review", "Assessment & Scrutiny Representation"],
  },
  {
    id: "business-registration",
    navLabel: "Business Registration",
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
    navLabel: "Trademark & Compliance",
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

export const reasons = [
  ["Independent advice", "Not tied to a single insurance company.", Network],
  ["Local presence ", "Hands-on, relationship-based service.", MapPin],
  ["Transparent assessment", "Data-backed review of your existing coverage.", BarChart3],
  ["Real premium savings", "Focus on efficient protection, not just a lower renewal price.", Gem],
  ["Dedicated claims support", "Built into the advisory relationship at no extra cost.", ShieldCheck],
  ["Ongoing monitoring", "A partner beyond a one-time review.", Sparkles],
] as const;

export const steps = [
  ["01", "Discovery", "Collect existing policies, schedules and past claims history."],
  ["02", "Assessment", "Audit the programme against your operational risk profile and market benchmarks."],
  ["03", "Recommendation", "Present clear recommendations on premium optimisation and risk / coverage improvement."],
  ["04", "Implementation & Ongoing Support", "Support renewal negotiations, claims assistance and ongoing coverage reviews."],
] as const;

export const audiences = [
  "Manufacturing",
  "Trading & Distribution",
  "Hospitality",
  "Educational Institutions",
  "Healthcare",
  "Real Estate",
  "Construction",
  "Other Corporates",
  "Perfectly Fineing",
  "Dining Experiences",
];
