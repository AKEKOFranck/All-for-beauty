import Link from "next/link";
import { notFound } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import AddToCart from "@/components/AddToCart/addToCart";
import ProductGallery from "@/components/ProductGallery/productGallery";
import ProductCard from "@/components/ProductCard/productCard";
import { getCategories, getProductBySlug, getProducts, getRelated } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";
import s from "./page.module.css";

export const generateStaticParams = () => getProducts().map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return {};
  const desc = p.description?.slice(0, 155) || `${p.nom} — disponible chez ${siteConfig.name}.`;
  return {
    title: p.nom,
    description: desc,
    alternates: { canonical: `/products/${p.slug}` },
    openGraph: { title: p.nom, description: desc, type: "website", images: [{ url: p.image }] },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  const related = getRelated(p);
  const cat = getCategories().find((c) => c.slug === p.category);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: p.nom,
        image: p.images.map((i) => `${siteConfig.url}${i}`),
        description: p.description || p.nom,
        ...(p.prix && {
          offers: {
            "@type": "Offer",
            priceCurrency: "XOF",
            price: p.prix,
            availability: "https://schema.org/InStock",
            url: `${siteConfig.url}/products/${p.slug}`,
          },
        }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: "Boutique", item: `${siteConfig.url}/products` },
          { "@type": "ListItem", position: 3, name: p.nom },
        ],
      },
    ],
  };

  return (
    <div className="container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className={s.crumbs} aria-label="Fil d'Ariane">
        <Link href="/">Accueil</Link><FiChevronRight />
        <Link href="/products">Boutique</Link><FiChevronRight />
        {cat && <><Link href={`/products?cat=${cat.slug}`}>{cat.label}</Link><FiChevronRight /></>}
        <span>{p.nom}</span>
      </nav>

      <div className={s.layout}>
        <ProductGallery images={p.images} alt={p.nom} />
        <div className={s.info}>
          {cat && <span className="eyebrow">{cat.label}</span>}
          <h1 className="title">{p.nom}</h1>
          <p className={s.price}>{formatPrice(p.prix)}</p>
          {p.description && <p className={s.desc}>{p.description}</p>}
          <AddToCart product={p} />
          <a className={s.ask} target="_blank" rel="noopener noreferrer"
            href={whatsappLink(`Bonjour, je souhaite des informations sur : ${p.nom}`)}>
            <FaWhatsapp /> Poser une question sur ce produit
          </a>
        </div>
      </div>

      {related.length > 0 && (
        <section className={s.related}>
          <h2 className="title">Vous aimerez aussi</h2>
          <div className={s.grid}>{related.map((r) => <ProductCard key={r.id} product={r} />)}</div>
        </section>
      )}
    </div>
  );
}