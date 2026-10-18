import { Dancing_Script, Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/navigation";
import Footer from "@/components/Footer/footer";
import WhatsAppBtn from "@/components/WhatsAppBtn/whatsAppBtn";
import { CartProvider } from "@/components/Cart/CartProvider";
import { getCategories } from "@/lib/products";
import { siteConfig } from "@/lib/siteConfig";

const title = Playfair_Display({ subsets: ["latin"], variable: "--font-title", display: "swap" });
const body = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-body", display: "swap" });
const script = Dancing_Script({ subsets: ["latin"], variable: "--font-script", display: "swap" });

const defaultTitle = `${siteConfig.name} | ${siteConfig.brandTagline}`;

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: defaultTitle, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["all for beauty", "soins de beauté", "produits cosmétiques", "crèmes visage", "huile de beauté", "skincare Afrique", "cosmétique naturel", "Abidjan", "Côte d'Ivoire"],
  authors: [{ name: siteConfig.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: siteConfig.locale, siteName: siteConfig.name,
    title: defaultTitle, description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: { card: "summary_large_image", title: defaultTitle, description: siteConfig.description, images: [siteConfig.ogImage] },
  icons: { icon: "/logoCos.ico" },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#7a1530" };

export default function RootLayout({ children }) {
  const categories = getCategories().map(({ slug, label, count }) => ({ slug, label, count }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.logo}`,
    areaServed: "CI",
    hasMap: siteConfig.mapUrl,
    sameAs: siteConfig.socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
  };
  return (
    <html lang="fr" className={`${title.variable} ${body.variable} ${script.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CartProvider>
          <Navigation categories={categories} />
          <main>{children}</main>
          <Footer />
          <WhatsAppBtn />
        </CartProvider>
      </body>
    </html>
  );
}