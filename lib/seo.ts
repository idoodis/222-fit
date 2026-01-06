import { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, DEFAULT_CITY } from "./constants";
import { env } from "./env";

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  city?: string;
}

export function generateMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  city = DEFAULT_CITY,
}: GenerateMetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} - Premium Fitness Training in ${city}`;
  const fullDescription =
    description || SITE_DESCRIPTION.replace("[Your City]", city);
  const url = `${env.NEXT_PUBLIC_SITE_URL}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    ...(env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
      verification: {
        google: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      },
    }),
  };
}


