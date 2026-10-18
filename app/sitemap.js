import { getProducts } from "@/lib/products";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap() {
  const now = new Date();
  const pages = ["", "/products", "/about", "/contact"].map((p) => ({
    url: `${siteConfig.url}${p}`, lastModified: now, changeFrequency: "weekly", priority: p === "" ? 1 : 0.8,
  }));
  const products = getProducts().map((p) => ({
    url: `${siteConfig.url}/products/${p.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.6,
  }));
  return [...pages, ...products];
}