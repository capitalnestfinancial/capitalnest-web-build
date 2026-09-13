import { createFileRoute, Link } from "@tanstack/react-router";

import { AdvisoryDetailPage } from "@/components/advisory-detail-page";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { advisoryDetails } from "@/lib/site-data";

export const Route = createFileRoute("/services/$serviceSlug")({
  head: ({ params }) => {
    const detail = advisoryDetails.find((item) => item.id === params.serviceSlug);
    const title = detail ? `${detail.title} | CapitalNest Financial` : "Service | CapitalNest Financial";
    const description = detail?.description ?? "Explore CapitalNest Financial advisory services.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { serviceSlug } = Route.useParams();
  const detail = advisoryDetails.find((item) => item.id === serviceSlug);

  if (!detail) {
    return <main className="grid min-h-screen place-items-center bg-background px-6 text-center"><div><h1 className="font-display text-5xl text-primary">Service not found</h1><Link to="/" className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-gold">Return home</Link></div></main>;
  }

  return <><SiteHeader /><AdvisoryDetailPage detail={detail} /><SiteFooter /></>;
}