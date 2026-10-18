import raw from "@/lib/data/produits.json";
import { siteConfig } from "@/lib/siteConfig";

const slugify = (s = "") =>
  s.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Encode les chemins du type "/creme/crem (1).png" (espaces et parenthèses)
const toSrc = (p) => {
  if (!p) return null;
  let s = String(p).trim();
  if (/^https?:/.test(s)) return s;
  try { s = decodeURIComponent(s); } catch {}
  return encodeURI(s.startsWith("/") ? s : `/${s}`);
};

// Le JSON est une liste de catégories : { slug, category, products: [...] }
const groups = (Array.isArray(raw) ? raw : []).filter((c) => Array.isArray(c?.products));

const all = groups.flatMap((cat) =>
  cat.products.map((p) => {
    const image = toSrc(p.pic) || siteConfig.logo;
    return {
      id: String(p.id),
      slug: `${slugify(p.name).slice(0, 60).replace(/-$/, "")}-${p.id}`,
      nom: p.name,
      prix: Number(p.price) || 0,
      description: p.desc || "",
      images: [image],
      image,
      category: cat.slug,
      categoryLabel: cat.category,
    };
  })
);

export const getProducts = () => all;
export const getProductBySlug = (slug) => all.find((p) => p.slug === slug);
export const getRelated = (p, n = 4) =>
  all.filter((x) => x.category === p.category && x.id !== p.id).slice(0, n);
export const getCategories = () =>
  groups.map((c) => ({
    slug: c.slug,
    label: c.category,
    count: c.products.length,
    cover: toSrc(c.products[0]?.pic) || siteConfig.logo,
  }));