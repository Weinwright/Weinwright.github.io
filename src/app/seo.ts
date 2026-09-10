import type { Metadata } from "next";

export const SITE_NAME = "Ekaterina Pushkina";
export const SITE_URL = "https://epushkina.com";
export const SITE_DESCRIPTION =
  "Seattle-based motion designer and GenAI creative technologist creating clear visual stories, brand systems, and scalable content for technology companies.";
export const DEFAULT_SOCIAL_IMAGE = "/opengraph-image.png";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}`;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  noIndex?: boolean;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = `${SITE_NAME} portfolio`,
  imageWidth = 1280,
  imageHeight = 720,
  noIndex = false,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} — ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: image, width: imageWidth, height: imageHeight, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: image, alt: imageAlt }],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          noarchive: true,
          nocache: true,
          noimageindex: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
