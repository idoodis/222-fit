import { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { SERVICES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL;

  const routes = [
    "",
    "/services",
    "/about",
    "/pricing",
    "/testimonials",
    "/faq",
    "/contact",
  ];

  const serviceRoutes = SERVICES.map(
    (service) => `/services/${service.slug}`
  );

  const allRoutes = [...routes, ...serviceRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}


