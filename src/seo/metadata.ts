import { Metadata } from "next";
import { META_KEYWORDS } from "./keywords";

const BASE_URL = "https://bigpasso.sbs";

const TITLE = "DevStore - A loja que te impulsiona a codificar";
const DESCRIPTION =
  "Encontre as melhores roupas e acessórios para codificar com estilo. Fale com nossa consultora no WhatsApp e descubra nossas ofertas incríveis!";
const IMAGE = {
  url: "https://devstore.felipealencar.dev/icons/logo-128.png",
  width: 200,
  height: 200,
  alt: "Logo da DevStore",
};

export const metadata: Metadata = {
  metadataBase: new URL(`${BASE_URL}`),
  applicationName: TITLE,
  title: TITLE,
  description: DESCRIPTION,
  manifest: "/manifest.json",
  keywords: META_KEYWORDS,
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  alternates: {
    types: {
      "application/rss+xml": `${BASE_URL}/rss.xml`,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/logo-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/logo-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/logo-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/logo-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        url: "/apple-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        url: "/apple-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/apple-icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: "/apple-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        url: "/apple-icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/apple-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    title: TITLE,
    statusBarStyle: "default",
    capable: true,
  },
  verification: {
    google: "YOUR_DATA",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    countryName: "Brazil",
    phoneNumbers: ["+5547984342267"],
    siteName: TITLE,
    url: `${BASE_URL}`,
    locale: "pt_BR",
    type: "website",
    images: [IMAGE],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: [IMAGE],
  },
};
