import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";
import markAsset from "@/assets/capitalnest-mark.png.asset.json";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="CapitalNest Financial home">
      <img src={markAsset.url} alt="CapitalNest Financial mark" width={compact ? 45 : 58} height={compact ? 38 : 50} className={`${compact ? "h-10 w-11" : "h-14 w-16 sm:h-16 sm:w-20"} shrink-0 object-contain`} />
      <span className="min-w-0">
        <span className={`${compact ? "text-sm" : "text-lg sm:text-xl"} block truncate font-semibold tracking-[0.18em] text-primary-foreground`}>CAPITAL<span className="text-gold">NEST</span></span>
        <span className={`${compact ? "text-[8px]" : "text-[9px] sm:text-[10px]"} mt-0.5 block tracking-[0.36em] text-gold`}>FINANCIAL</span>
      </span>
    </Link>
  );
}

const anchorLinks = [
  ["About", "about"],
  ["Why Us", "why-us"],
  ["How We Work", "how-we-work"],
  ["Contact", "contact"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-primary/90 backdrop-blur-md">
      <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4 lg:flex lg:justify-between">
        <BrandMark compact />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          <Link to="/" hash="about" className="text-[11px] font-medium uppercase tracking-[0.13em] text-primary-foreground/70 transition-colors hover:text-gold">About</Link>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <Button variant="ghost" size="sm" className="h-auto gap-1 px-0 text-[11px] font-medium uppercase tracking-[0.13em] text-primary-foreground/70 hover:bg-transparent hover:text-gold" onClick={() => setServicesOpen((value) => !value)} aria-expanded={servicesOpen}>
              Services <ChevronDown className={`size-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </Button>
            {servicesOpen ? <div className="absolute right-0 top-full w-64 border border-primary-foreground/10 bg-primary p-2 shadow-lg" onFocus={() => setServicesOpen(true)}>
              {services.map((service) => <Link key={service.slug} to="/services/$serviceSlug" params={{ serviceSlug: service.slug }} className="block px-4 py-3 text-xs uppercase tracking-[0.12em] text-primary-foreground/75 transition-colors hover:bg-navy-soft hover:text-gold">{service.title}</Link>)}
            </div> : null}
          </div>
          {anchorLinks.slice(1).map(([label, hash]) => <Link key={hash} to="/" hash={hash} className="text-[11px] font-medium uppercase tracking-[0.13em] text-primary-foreground/70 transition-colors hover:text-gold">{label}</Link>)}
        </nav>
        <div className="flex items-center justify-end gap-2">
          <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex"><Link to="/" hash="contact">Talk to an Advisor <ArrowRight /></Link></Button>
          <Button variant="navIcon" size="icon" className="xl:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {menuOpen ? <nav className="border-t border-primary-foreground/10 bg-primary px-4 py-4 xl:hidden" aria-label="Mobile navigation">
        <Link to="/" hash="about" onClick={() => setMenuOpen(false)} className="block border-b border-primary-foreground/10 py-3 text-sm uppercase tracking-[0.14em] text-primary-foreground/80">About</Link>
        <details className="border-b border-primary-foreground/10 py-3 text-sm uppercase tracking-[0.14em] text-primary-foreground/80">
          <summary className="cursor-pointer list-none">Services <ChevronDown className="ml-2 inline size-4 text-gold" /></summary>
          <div className="mt-2 border-l border-gold/50 pl-4">{services.map((service) => <Link key={service.slug} to="/services/$serviceSlug" params={{ serviceSlug: service.slug }} onClick={() => setMenuOpen(false)} className="block py-2 text-xs tracking-[0.12em] text-primary-foreground/70">{service.title}</Link>)}</div>
        </details>
        {anchorLinks.slice(1).map(([label, hash]) => <Link key={hash} to="/" hash={hash} onClick={() => setMenuOpen(false)} className="block border-b border-primary-foreground/10 py-3 text-sm uppercase tracking-[0.14em] text-primary-foreground/80">{label}</Link>)}
        <Link to="/" hash="contact" onClick={() => setMenuOpen(false)} className="mt-3 block py-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold">Talk to an Advisor <ArrowRight className="ml-2 inline size-4" /></Link>
      </nav> : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-14 text-primary-foreground">
      <div className="section-shell">
        <div className="grid gap-12 border-b border-primary-foreground/15 pb-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div><BrandMark compact /><p className="mt-6 max-w-xs font-display text-2xl text-primary-foreground/90">Building Wealth.<br /><span className="text-gold">Securing Futures.</span></p></div>
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">Quick Links</p><div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3"><Link to="/" className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">Home</Link>{anchorLinks.map(([label, hash]) => <Link key={hash} to="/" hash={hash} className="text-sm text-primary-foreground/60 transition-colors hover:text-gold">{label}</Link>)}</div></div>
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-gold">Get in touch</p><div className="mt-5 space-y-3 text-sm text-primary-foreground/60"><a href="tel:+917014255582" className="block transition-colors hover:text-gold">7014255582</a><a href="mailto:capitalnestfinancial@gmail.com" className="block break-all transition-colors hover:text-gold">capitalnestfinancial@gmail.com</a><p className="leading-6">8-B, Shri Ram Nagar,<br />Mansarovar, Jaipur - 302020</p></div></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-[10px] uppercase tracking-[0.16em] text-primary-foreground/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} CapitalNest Financial</span><span>Independent financial & corporate insurance advisory</span></div>
      </div>
    </footer>
  );
}